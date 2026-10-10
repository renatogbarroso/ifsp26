// Painel de estudos IFSP 2026. JavaScript puro, sem dependências.
// O progresso fica no localStorage do navegador (chave abaixo).

(function () {
  "use strict";

  var CHAVE = "ifsp26-v1";
  var STATUS = ["Não iniciado", "Estudando", "Estudado", "Revisado"];
  var STATUS_TAG = ["", "warn", "acc", "ok"];
  var MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  var MESES_LONGO = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  var DIAS_SEM = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  var TIPO_NOME = { edital: "edital", inscricao: "inscrição", objetiva: "objetiva", didatica: "didática", titulos: "títulos" };
  var AREA_NOME = { pedagogia: "Pedagogia", legislacao: "Legislação", informatica: "Informática", didatica: "Didática", outro: "Outro" };
  var LETRAS = "ABCD";

  // Flags por alternativa (formato do simulado de 2024)
  var FLAGS = ["E", "T", "A", "C"];
  var FLAG_NOME = { E: "Excluída", T: "Talvez", A: "Acho que é", C: "Certeza" };
  var RANK = { "": 0, E: 0, T: 2, A: 3, C: 4 };

  // Classificação de cada questão após a correção
  var CLS = {
    solido:   { nome: "Certeza e acertou", dica: "sólido", tag: "ok" },
    fragil:   { nome: "Acertou com dúvida", dica: "frágil, pode virar erro", tag: "warn" },
    chute:    { nome: "Chute que acertou", dica: "sorte, não conta como sabido", tag: "warn" },
    falsa:    { nome: "Certeza e errou", dica: "falsa certeza, prioridade máxima", tag: "bad" },
    eliminou: { nome: "Eliminou a correta", dica: "conceito errado, não só dúvida", tag: "bad" },
    erro:     { nome: "Errou com dúvida", dica: "lacuna conhecida", tag: "bad" },
    branco:   { nome: "Em branco", dica: "sem marcação", tag: "" }
  };
  var CLS_ORDEM = ["falsa", "eliminou", "erro", "branco", "chute", "fragil", "solido"];

  // ---------- Estado ----------
  var estado = carregar();
  var subabaAtual = "pedagogia";

  function carregar() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem(CHAVE)); } catch (e) { /* sem storage */ }
    return normalizar(s);
  }
  function normalizar(s) {
    if (!s || typeof s !== "object") s = {};
    s.cards = s.cards || {};
    s.quiz = s.quiz || {};
    s.sessoes = s.sessoes || [];
    s.rasc = s.rasc || {};   // listas em andamento
    s.rev = s.rev || {};     // listas finalizadas (correção)
    s.lidos = s.lidos || s.vistos || {}; // conceitos marcados como lidos (herda os abertos da v1.2)
    delete s.vistos;
    return s;
  }
  function salvar() {
    try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch (e) { /* ignora */ }
  }

  // ---------- Utilidades ----------
  function h(tag, attrs, filhos) {
    var el = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (k === "class") el.className = attrs[k];
        else if (k === "html") el.innerHTML = attrs[k];
        else if (k === "text") el.textContent = attrs[k];
        else if (k.indexOf("on") === 0) el.addEventListener(k.slice(2), attrs[k]);
        else if (attrs[k] !== null && attrs[k] !== undefined) el.setAttribute(k, attrs[k]);
      }
    }
    (filhos || []).forEach(function (f) {
      if (f === null || f === undefined || f === false) return;
      el.appendChild(typeof f === "string" ? document.createTextNode(f) : f);
    });
    return el;
  }
  function data(str) { var p = str.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function hoje() { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function diasAte(str) { return Math.round((data(str) - hoje()) / 86400000); }
  function fmtData(str) { var d = data(str); return String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0") + "/" + d.getFullYear(); }
  function fmtCurta(str) { var d = data(str); return String(d.getDate()).padStart(2, "0") + " " + MESES[d.getMonth()]; }
  function falta(n) {
    if (n === 0) return "hoje";
    if (n === 1) return "amanhã";
    if (n === -1) return "ontem";
    return n > 0 ? "em " + n + " dias" : "há " + (-n) + " dias";
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function barra(rotulo, valor, total, extra) {
    return h("div", { class: "prog" }, [
      h("div", { class: "prog-top" }, [h("span", { text: rotulo }), h("span", { class: "muted", text: extra || (valor + "/" + total) })]),
      h("div", { class: "barra" }, [h("i", { style: "width:" + pct(valor, total) + "%" })])
    ]);
  }
  function embaralhar(arr) {
    for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; }
    return arr;
  }

  // Todas as questões de pedagogia, com id único:
  //   "<card>-<n>"         questões do autor (lista do card)
  //   "<card>-c<i>-<n>"    questões do conceito i (janela do conceito)
  var MAPA_Q = {};
  var IDS_AUTOR = {};    // card -> todas as questões ligadas ao autor (card + conceitos)
  var IDS_CARD = {};     // card -> só as 5 da lista do card
  var IDS_CONC = {};     // card -> [conceito i -> todas as questões que cobram o conceito]
  var IDS_CONC_LISTA = {}; // card -> [conceito i -> só as questões da janela do conceito]
  function nomeAutor(card) { return card.autor.split(" (")[0]; }
  function questoesPedagogia() {
    var lista = [];
    window.PEDAGOGIA.forEach(function (card) {
      IDS_AUTOR[card.id] = []; IDS_CARD[card.id] = [];
      IDS_CONC[card.id] = card.conceitos.map(function () { return []; });
      IDS_CONC_LISTA[card.id] = card.conceitos.map(function () { return []; });
      function add(item, conceitos) {
        MAPA_Q[item.id] = item; lista.push(item);
        IDS_AUTOR[card.id].push(item.id);
        (conceitos || []).forEach(function (k) { if (IDS_CONC[card.id][k]) IDS_CONC[card.id][k].push(item.id); });
      }
      card.questoes.forEach(function (q, i) {
        var item = { id: card.id + "-" + (i + 1), q: q, card: card, origem: nomeAutor(card) + " · " + card.obra };
        IDS_CARD[card.id].push(item.id);
        add(item, q.k);
      });
      var qc = (window.QCONC || {})[card.id] || [];
      qc.forEach(function (lst, k) {
        (lst || []).forEach(function (q, j) {
          var item = { id: card.id + "-c" + (k + 1) + "-" + (j + 1), q: q, card: card, origem: nomeAutor(card) + " · conceito: " + card.conceitos[k] };
          IDS_CONC_LISTA[card.id][k].push(item.id);
          add(item, [k]);
        });
      });
    });
    return lista;
  }
  var TODAS = questoesPedagogia();

  // ---------- Pontuação ----------
  // Pontos de cada classificação (última tentativa da questão).
  var PONTOS = { solido: 100, fragil: 60, chute: 25, erro: 0, eliminou: 0, falsa: 0, branco: 0 };
  function pontuar(ids) {
    var r = { total: ids.length, resp: 0, soma: 0, certas: 0, alertas: 0, dominio: null };
    ids.forEach(function (id) {
      var x = estado.quiz[id];
      if (x && x.t && x.cls) {
        r.resp++; r.soma += PONTOS[x.cls] || 0;
        if (x.ult) r.certas++;
        if (x.cls === "falsa" || x.cls === "eliminou") r.alertas++;
      }
    });
    if (r.resp) r.dominio = Math.round(r.soma / r.resp);
    return r;
  }
  function nivel(p) {
    if (!p.resp) return { nome: "não avaliado", tag: "" };
    var d = p.dominio;
    if (d >= 90) return { nome: "dominado", tag: "ok" };
    if (d >= 70) return { nome: "bom", tag: "ok" };
    if (d >= 40) return { nome: "em construção", tag: "warn" };
    return { nome: "fraco", tag: "bad" };
  }
  function pilulaPontos(p, curta) {
    var n = nivel(p);
    var txt = p.resp ? (curta ? String(p.dominio) : "Domínio " + p.dominio) : (curta ? "–" : "Não avaliado");
    return h("span", { class: "tag pts " + n.tag, title: p.resp ? (n.nome + " · " + p.resp + " de " + p.total + " questões respondidas") : "Nenhuma questão respondida", text: txt });
  }
  function linhaDesempenho(rotulo, p, aoClicar) {
    var n = nivel(p);
    var nome = aoClicar ? h("button", { type: "button", class: "link-txt", text: rotulo, onclick: aoClicar }) : h("span", { text: rotulo });
    return h("div", { class: "desemp" }, [
      h("div", { class: "desemp-nome" }, [nome]),
      h("div", { class: "desemp-barra" }, [h("div", { class: "barra" }, [h("i", { class: "b-" + (n.tag || "vazio"), style: "width:" + (p.dominio || 0) + "%" })])]),
      h("div", { class: "desemp-num" }, [
        h("b", { text: p.resp ? String(p.dominio) : "–" }),
        h("span", { class: "muted small", text: " " + p.resp + "/" + p.total }),
        p.alertas ? h("span", { class: "tag bad alerta-mini", title: "Falsas certezas ou corretas eliminadas", text: "⚠ " + p.alertas }) : null
      ])
    ]);
  }

  function statsQuiz(ids) {
    var r = { total: ids.length, respondidas: 0, certasUltima: 0, tentativas: 0, acertosTotais: 0, cls: {} };
    ids.forEach(function (id) {
      var x = estado.quiz[id];
      if (x && x.t) {
        r.respondidas++; if (x.ult) r.certasUltima++;
        r.tentativas += x.t; r.acertosTotais += x.a;
        if (x.cls) r.cls[x.cls] = (r.cls[x.cls] || 0) + 1;
      }
    });
    return r;
  }

  // ---------- Lógica das flags ----------
  // Devolve a resposta escolhida a partir das flags: {i, flag, empate} ou {status:"branco"|"empate", cand}
  function resposta(fl, pick) {
    fl = fl || ["", "", "", ""];
    var top = 0;
    fl.forEach(function (f) { top = Math.max(top, RANK[f || ""]); });
    if (top === 0) return { status: "branco" };
    var cand = [];
    fl.forEach(function (f, i) { if (RANK[f || ""] === top) cand.push(i); });
    if (cand.length === 1) return { i: cand[0], flag: fl[cand[0]] };
    if (pick !== undefined && pick !== null && cand.indexOf(pick) >= 0) return { i: pick, flag: fl[pick], empate: true };
    return { status: "empate", cand: cand };
  }
  function classificar(fl, pick, c) {
    var r = resposta(fl, pick);
    if (r.status === "branco") return "branco";
    if (r.i === undefined) return "branco";
    var nenhumaE = fl.indexOf("E") < 0;
    if (r.i === c) {
      if (fl[c] === "C") return "solido";
      if (r.empate || (fl[c] === "T" && nenhumaE)) return "chute";
      return "fragil";
    }
    if (fl[r.i] === "C") return "falsa";
    if (fl[c] === "E") return "eliminou";
    return "erro";
  }

  // ---------- Abas ----------
  var renders = { painel: renderPainel, estudos: renderEstudos, agenda: renderAgenda, docs: renderDocs };
  function abrir(aba) {
    if (!renders[aba]) aba = "painel";
    document.querySelectorAll(".abas button").forEach(function (b) { b.setAttribute("aria-selected", b.dataset.aba === aba ? "true" : "false"); });
    document.querySelectorAll(".aba").forEach(function (s) { s.classList.toggle("ativa", s.id === "aba-" + aba); });
    renders[aba]();
    if (typeof atualizaRolagem === "function") atualizaRolagem();
  }
  document.querySelectorAll(".abas button").forEach(function (b) {
    b.addEventListener("click", function () { location.hash = b.dataset.aba; });
  });
  window.addEventListener("hashchange", function () { abrir(location.hash.slice(1)); });

  // ---------- Painel ----------
  function renderPainel() {
    var raiz = document.getElementById("aba-painel");
    raiz.innerHTML = "";
    var hj = hoje();
    raiz.appendChild(h("div", { class: "cabeca" }, [
      h("div", {}, [
        h("h2", { text: "Painel" }),
        h("p", { class: "muted small", text: "Hoje: " + DIAS_SEM[hj.getDay()] + ", " + fmtData(iso(hj)) })
      ])
    ]));

    var cores = { inscricao: "var(--inscricao)", objetiva: "var(--objetiva)", didatica: "var(--didatica)" };
    var g = h("div", { class: "grade g3" });
    window.BASE.agenda.filter(function (e) { return e.marco; }).forEach(function (e) {
      var n = diasAte(e.data);
      g.appendChild(h("div", { class: "bloco contador", style: "--c:" + (cores[e.tipo] || "var(--accent)") }, [
        h("span", { class: "rot", text: e.titulo }),
        h("span", { class: "num", html: (n < 0 ? "✓" : n) + (n >= 0 ? "<small>" + (n === 1 ? "dia" : "dias") + "</small>" : "") }),
        h("span", { class: "data", text: fmtData(e.data) + " · " + DIAS_SEM[data(e.data).getDay()] })
      ]));
    });
    raiz.appendChild(g);

    var g2 = h("div", { class: "grade g2 mt" });
    var ped = window.PEDAGOGIA;
    var pedEstudados = ped.filter(function (c) { return (estado.cards[c.id] || 0) >= 2; }).length;
    var leg = window.BASE.legislacao;
    var legEstudados = leg.filter(function (c) { return (estado.cards[c.id] || 0) >= 2; }).length;
    var qs = statsQuiz(TODAS.map(function (x) { return x.id; }));
    var revisar = (qs.cls.falsa || 0) + (qs.cls.eliminou || 0);
    var conc = contarConceitos();

    var evol = h("div", { class: "bloco" }, [
      h("h3", { text: "Evolução" }),
      barra("Pedagogia · obras estudadas", pedEstudados, ped.length),
      barra("Pedagogia · conceitos-chave lidos", conc.lidos, conc.total),
      barra("Pedagogia · conceitos-chave avaliados (com questão feita)", conc.avaliados, conc.total),
      barra("Pedagogia · conceitos-chave com domínio ≥ 70", conc.bons, conc.total),
      barra("Pedagogia · questões respondidas", qs.respondidas, qs.total),
      barra("Pedagogia · sólidas (certeza e acertou)", qs.cls.solido || 0, qs.total),
      barra("Pedagogia · acerto na última tentativa", qs.certasUltima, qs.respondidas, qs.respondidas ? pct(qs.certasUltima, qs.respondidas) + "% de " + qs.respondidas : "sem respostas"),
      barra("Legislação · normas estudadas", legEstudados, leg.length),
      h("p", { class: "muted small", text: "Informática: aguardando o mapa de tópicos." })
    ]);
    if (revisar) evol.appendChild(h("div", { class: "aviso small", style: "margin-top:8px" }, [revisar + " questão(ões) com falsa certeza ou com a correta eliminada. Comece a próxima sessão pelo treino aleatório, que puxa essas primeiro."]));
    g2.appendChild(evol);

    var prox = window.BASE.agenda.filter(function (e) { return diasAte(e.data) >= 0; }).slice(0, 5);
    var ul = h("ul", { class: "lista" });
    prox.forEach(function (e) {
      ul.appendChild(h("li", {}, [
        h("span", { class: "quando", text: fmtCurta(e.data) }),
        h("span", {}, [e.titulo + " ", h("span", { class: "tag " + e.tipo, text: TIPO_NOME[e.tipo] || e.tipo })]),
        h("span", { class: "falta", text: falta(diasAte(e.data)) })
      ]));
    });
    g2.appendChild(h("div", { class: "bloco" }, [h("h3", { text: "Próximos eventos" }), ul]));
    raiz.appendChild(g2);

    raiz.appendChild(blocoDesempenhoAutores());
    raiz.appendChild(blocoSessoes());
  }

  // Contadores de conceitos-chave (lidos, avaliados, com domínio >= 70), no geral ou de um card.
  function contarConceitos(cardId) {
    var r = { total: 0, lidos: 0, avaliados: 0, bons: 0 };
    window.PEDAGOGIA.forEach(function (card) {
      if (cardId && card.id !== cardId) return;
      card.conceitos.forEach(function (_, i) {
        r.total++;
        if (lido(card.id, i)) r.lidos++;
        var p = pontuar(IDS_CONC[card.id][i]);
        if (p.resp) r.avaliados++;
        if (p.resp && p.dominio >= 70) r.bons++;
      });
    });
    return r;
  }

  function blocoDesempenhoAutores() {
    var todas = pontuar(TODAS.map(function (x) { return x.id; }));
    var bloco = h("div", { class: "bloco mt" }, [
      h("div", { class: "cabeca", style: "margin-bottom:6px" }, [
        h("h3", { text: "Desempenho em pedagogia por autor" }),
        h("span", { class: "small" }, ["Geral: ", pilulaPontos(todas)])
      ]),
      h("p", { class: "muted small", style: "margin:0 0 8px", text: "Domínio de 0 a 100, pela última tentativa de cada questão: certeza e acertou = 100, acertou com dúvida = 60, chute = 25, erro = 0. Ao lado, quantas questões você já fez do total. ⚠ = falsas certezas ou corretas eliminadas." })
    ]);
    window.PEDAGOGIA.slice().sort(function (a, b) { return a.ordem - b.ordem; }).forEach(function (card) {
      bloco.appendChild(linhaDesempenho(card.curto || nomeAutor(card), pontuar(IDS_AUTOR[card.id]), function () {
        location.hash = "estudos"; subabaAtual = "pedagogia";
        setTimeout(function () { abrirCard(card.id); }, 50);
      }));
    });
    return bloco;
  }

  function abrirCard(cardId) {
    var det = document.querySelector('details.card[data-card="' + cardId + '"]');
    if (det) { det.open = true; det.scrollIntoView({ behavior: "smooth", block: "start" }); }
  }

  function blocoSessoes() {
    var bloco = h("div", { class: "bloco mt" });
    var totalMin = estado.sessoes.reduce(function (s, x) { return s + (+x.min || 0); }, 0);

    var seg = hoje(); seg.setDate(seg.getDate() - ((seg.getDay() + 6) % 7));
    var semanas = [];
    for (var i = 7; i >= 0; i--) {
      var ini = new Date(seg); ini.setDate(ini.getDate() - 7 * i);
      var fim = new Date(ini); fim.setDate(fim.getDate() + 7);
      var min = estado.sessoes.filter(function (s) { var d = data(s.d); return d >= ini && d < fim; })
        .reduce(function (a, s) { return a + (+s.min || 0); }, 0);
      semanas.push({ ini: ini, min: min });
    }
    var max = Math.max.apply(null, semanas.map(function (s) { return s.min; }).concat([60]));
    var graf = h("div", { class: "semanas" });
    semanas.forEach(function (s, idx) {
      var horas = (s.min / 60).toFixed(1).replace(".", ",");
      graf.appendChild(h("div", { class: "semana", title: "Semana de " + fmtData(iso(s.ini)) }, [
        h("span", { class: "v", text: s.min ? horas + "h" : "" }),
        h("div", { class: "col" + (s.min ? "" : " vazia"), style: "height:" + Math.max(2, (s.min / max) * 85) + "%" }),
        h("span", { class: "l", text: idx === 7 ? "esta" : fmtCurta(iso(s.ini)) })
      ]));
    });

    var inData = h("input", { type: "date", value: iso(hoje()) });
    var inMin = h("input", { type: "number", min: "5", step: "5", value: "50", style: "width:90px" });
    var inArea = h("select", {}, Object.keys(AREA_NOME).map(function (k) { return h("option", { value: k, text: AREA_NOME[k] }); }));
    var inObs = h("input", { type: "text", placeholder: "O que estudou (opcional)", style: "flex:1;min-width:160px" });
    var form = h("form", { class: "form", onsubmit: function (ev) {
      ev.preventDefault();
      var m = parseInt(inMin.value, 10);
      if (!inData.value || !m || m <= 0) return;
      estado.sessoes.push({ d: inData.value, min: m, area: inArea.value, obs: inObs.value.trim() });
      estado.sessoes.sort(function (a, b) { return a.d < b.d ? -1 : 1; });
      salvar();
      renderPainel();
    } }, [
      h("label", {}, ["Data", inData]),
      h("label", {}, ["Minutos", inMin]),
      h("label", {}, ["Área", inArea]),
      h("label", { style: "flex:1" }, ["Anotação", inObs]),
      h("button", { class: "btn", type: "submit", text: "Registrar" })
    ]);

    var recentes = h("ul", { class: "lista mt" });
    var ult = estado.sessoes.slice(-5).reverse();
    if (!ult.length) recentes.appendChild(h("li", { class: "muted small", text: "Nenhuma sessão registrada ainda." }));
    ult.forEach(function (s) {
      recentes.appendChild(h("li", {}, [
        h("span", { class: "quando", text: fmtData(s.d) }),
        h("span", {}, [h("span", { class: "tag", text: AREA_NOME[s.area] || s.area }), " " + s.min + " min" + (s.obs ? " · " + s.obs : "")]),
        h("button", { class: "link falta", text: "remover", onclick: function () {
          var i = estado.sessoes.indexOf(s);
          if (i >= 0) { estado.sessoes.splice(i, 1); salvar(); renderPainel(); }
        } })
      ]));
    });

    bloco.appendChild(h("div", { class: "cabeca", style: "margin-bottom:0" }, [
      h("h3", { text: "Horas de estudo" }),
      h("span", { class: "muted small", text: "Total: " + (totalMin / 60).toFixed(1).replace(".", ",") + " h em " + estado.sessoes.length + " sessões" })
    ]));
    bloco.appendChild(graf);
    bloco.appendChild(h("div", { class: "mt" }, [form]));
    bloco.appendChild(recentes);
    return bloco;
  }

  // ---------- Agenda ----------
  function renderAgenda() {
    var raiz = document.getElementById("aba-agenda");
    raiz.innerHTML = "";
    raiz.appendChild(h("div", { class: "cabeca" }, [
      h("div", {}, [h("h2", { text: "Agenda" }), h("p", { class: "muted small", text: "Cronograma previsto do Edital 183/2026 (Comunicado 1/2026). Datas marcadas como prováveis podem mudar." })])
    ]));
    raiz.appendChild(h("div", { class: "aviso" }, ["A prova didática (27/02 a 07/03/2027) não tem remarcação em hipótese alguma. Confira essas datas com a agenda da família."]));
    var cores = { objetiva: "var(--objetiva)", didatica: "var(--didatica)", inscricao: "var(--inscricao)", edital: "var(--edital)", titulos: "var(--titulos)" };
    var mesAtual = "", bloco = null;
    window.BASE.agenda.forEach(function (e) {
      var d = data(e.data);
      var chave = d.getFullYear() + "-" + d.getMonth();
      if (chave !== mesAtual) {
        mesAtual = chave;
        bloco = h("div", { class: "mes" }, [h("h3", { text: MESES_LONGO[d.getMonth()] + " " + d.getFullYear() })]);
        raiz.appendChild(bloco);
      }
      var n = diasAte(e.data);
      bloco.appendChild(h("div", { class: "evento" + (n < 0 ? " passado" : n === 0 ? " hoje" : ""), style: "--c:" + cores[e.tipo] }, [
        h("div", { class: "dia" }, [String(d.getDate()).padStart(2, "0"), h("small", { text: DIAS_SEM[d.getDay()] })]),
        h("div", {}, [h("div", { text: e.titulo }), h("span", { class: "tag " + e.tipo, text: TIPO_NOME[e.tipo] || e.tipo })]),
        h("span", { class: "muted small", text: falta(n) })
      ]));
    });
  }

  // ---------- Documentos ----------
  function renderDocs() {
    var raiz = document.getElementById("aba-docs");
    raiz.innerHTML = "";
    raiz.appendChild(h("div", { class: "cabeca" }, [
      h("div", {}, [h("h2", { text: "Documentos e links" }), h("p", { class: "muted small", text: "Sempre confira a página oficial: novas retificações e comunicados aparecem lá primeiro." })])
    ]));
    var grupos = {};
    window.BASE.links.forEach(function (l) { (grupos[l.grupo] = grupos[l.grupo] || []).push(l); });
    Object.keys(grupos).forEach(function (g) {
      var div = h("div", { class: "docs-grupo" }, [h("h3", { text: g })]);
      grupos[g].forEach(function (l) { div.appendChild(h("a", { href: l.url, target: "_blank", rel: "noopener", text: l.titulo })); });
      raiz.appendChild(div);
    });
  }

  // ---------- Estudos ----------
  function renderEstudos() {
    var raiz = document.getElementById("aba-estudos");
    raiz.innerHTML = "";
    raiz.appendChild(h("div", { class: "cabeca" }, [
      h("div", {}, [h("h2", { text: "Estudos" }), h("p", { class: "muted small", text: "Objetiva: 40 questões · 15 de legislação e pedagogia · 25 de Informática · mínimo 50 pontos." })])
    ]));
    var sub = h("div", { class: "subabas", role: "tablist" });
    window.BASE.areas.forEach(function (a) {
      sub.appendChild(h("button", { "aria-selected": a.id === subabaAtual ? "true" : "false", text: a.nome, onclick: function () { subabaAtual = a.id; renderEstudos(); } }));
    });
    raiz.appendChild(sub);
    var corpo = h("div");
    raiz.appendChild(corpo);
    if (subabaAtual === "pedagogia") renderPedagogia(corpo);
    else if (subabaAtual === "legislacao") renderLegislacao(corpo);
    else renderInformatica(corpo);
  }

  function seletorStatus(id, aoMudar) {
    var sel = h("select", { "aria-label": "Status de estudo", onclick: function (ev) { ev.stopPropagation(); }, onchange: function () {
      estado.cards[id] = +sel.value; salvar(); if (aoMudar) aoMudar(+sel.value);
    } }, STATUS.map(function (s, i) { return h("option", { value: i, text: s }); }));
    sel.value = estado.cards[id] || 0;
    return sel;
  }

  function legendaFlags() {
    return h("div", { class: "legenda" }, FLAGS.map(function (f) {
      return h("span", {}, [h("b", { class: "flag-mini f-" + f, text: f }), " " + FLAG_NOME[f]]);
    }));
  }

  function renderPedagogia(corpo) {
    var prog = h("ul", { class: "programa" });
    window.BASE.programaPedagogia.forEach(function (p) { prog.appendChild(h("li", {}, [h("b", { text: p.n + "." }), p.t])); });
    corpo.appendChild(h("div", { class: "bloco" }, [
      h("h3", { text: "Programa oficial (Comunicado 2/2026)" }),
      prog,
      h("p", { class: "muted small", style: "margin:10px 0 0", text: "Cards na ordem sugerida de estudo: primeiro as obras mais clássicas e mais cobradas (Saviani, Luckesi, Veiga), depois desenvolvimento, IFs e diversidade. Resumos, apresentações e questões são sínteses próprias; use a obra para confirmar." })
    ]));

    corpo.appendChild(h("div", { class: "bloco mt" }, [
      h("h3", { text: "Como responder" }),
      h("p", { class: "small", style: "margin:0 0 8px", text: "Marque cada alternativa com uma flag. A sua resposta é a alternativa com a flag mais forte (Certeza > Acho > Talvez). Se duas empatarem, toque na letra para escolher (vira um asterisco, contado como chute se acertar). Ao finalizar a lista, vem a correção com a explicação de cada alternativa." }),
      legendaFlags()
    ]));

    var st = statsQuiz(TODAS.map(function (x) { return x.id; }));
    var temTreino = estado.rasc.treino || estado.rev.treino;
    corpo.appendChild(h("div", { class: "ferramentas" }, [
      h("button", { class: "btn", text: temTreino ? "Novo treino aleatório (10)" : "Treino aleatório (10 questões)", onclick: function () {
        if (estado.rasc.treino && !confirm("Descartar o treino em andamento e começar outro?")) return;
        delete estado.rev.treino;
        estado.rasc.treino = { ids: montarTreino(10), flags: {}, pick: {}, notas: {} };
        salvar(); renderEstudos();
      } }),
      h("span", { class: "muted small", text: st.respondidas + " de " + st.total + " questões já feitas" + (st.respondidas ? " · " + (st.cls.solido || 0) + " sólidas" : "") })
    ]));

    if (temTreino) {
      var caixa = h("div", { class: "bloco", style: "border-color:var(--accent)" }, [
        h("div", { class: "cabeca", style: "margin-bottom:4px" }, [
          h("h3", { text: "Treino aleatório" }),
          h("button", { class: "btn sec", text: "Fechar treino", onclick: function () {
            if (estado.rasc.treino && !confirm("Fechar sem finalizar? As marcações deste treino serão perdidas.")) return;
            delete estado.rasc.treino; delete estado.rev.treino; salvar(); renderEstudos();
          } })
        ]),
        h("p", { class: "muted small", style: "margin:0", text: "Puxa primeiro as que você nunca fez, depois as falsas certezas, as corretas eliminadas e os erros, e por último as frágeis e os chutes." })
      ]);
      var ids = (estado.rasc.treino || estado.rev.treino).ids;
      caixa.appendChild(renderLista("treino", ids, true, function () { renderEstudos(); }));
      corpo.appendChild(caixa);
    }

    window.PEDAGOGIA.slice().sort(function (a, b) { return a.ordem - b.ordem; }).forEach(function (card) {
      corpo.appendChild(cardObra(card));
    });
  }

  function montarTreino(n) {
    var prioridade = { falsa: 1, eliminou: 1, erro: 1, branco: 1, chute: 2, fragil: 2, solido: 3 };
    var grupos = [[], [], [], []];
    TODAS.forEach(function (x) {
      var r = estado.quiz[x.id];
      var g = !r || !r.t ? 0 : (prioridade[r.cls] || (r.ult ? 3 : 1));
      grupos[g].push(x.id);
    });
    var sel = [];
    grupos.forEach(function (g) { embaralhar(g); sel = sel.concat(g); });
    return embaralhar(sel.slice(0, n));
  }

  function cardObra(card) {
    var ids = card.questoes.map(function (_, i) { return card.id + "-" + (i + 1); });
    var chave = "card:" + card.id;
    var status = estado.cards[card.id] || 0;
    var det = h("details", { class: "card", "data-status": status, "data-card": card.id });
    var tagStatus = h("span", { class: "tag " + STATUS_TAG[status], text: STATUS[status] });
    var tagQuiz = h("span", { class: "tag" });
    var tagPts = h("span");
    var desempenho = h("div", { class: "desemp-lista" });
    function atualizaPontos() {
      tagPts.innerHTML = ""; tagPts.appendChild(pilulaPontos(pontuar(IDS_AUTOR[card.id])));
      desempenho.innerHTML = "";
      card.conceitos.forEach(function (c, i) {
        desempenho.appendChild(linhaDesempenho(c, pontuar(IDS_CONC[card.id][i]), function () { abrirConceito(card, i); }));
      });
    }
    function atualizaTagQuiz() {
      atualizaPontos();
      var rev = estado.rev[chave];
      if (rev) {
        var certas = ids.filter(function (id) { return rev.res[id] && ["solido", "fragil", "chute"].indexOf(rev.res[id]) >= 0; }).length;
        tagQuiz.className = "tag " + (certas >= 4 ? "ok" : certas >= 3 ? "warn" : "bad");
        tagQuiz.textContent = certas + "/" + ids.length + " certas";
      } else if (estado.rasc[chave]) {
        tagQuiz.className = "tag warn"; tagQuiz.textContent = "lista em andamento";
      } else {
        tagQuiz.className = "tag"; tagQuiz.textContent = ids.length + " questões";
      }
    }
    atualizaTagQuiz();

    det.appendChild(h("summary", {}, [
      h("span", { class: "n", text: card.ordem }),
      h("div", {}, [h("div", { class: "obra", text: card.obra }), h("div", { class: "autor", text: card.autor + " · " + card.ano })]),
      h("div", { class: "lado" }, [tagStatus, tagQuiz, tagPts]),
      h("span", { class: "seta", "aria-hidden": "true", title: "Abrir ou recolher" })
    ]));

    var corpo = h("div", { class: "card-corpo" });
    corpo.appendChild(h("div", { class: "linha" }, [
      h("label", { class: "small muted" }, ["Status: "]),
      seletorStatus(card.id, function (v) {
        det.setAttribute("data-status", v);
        tagStatus.className = "tag " + STATUS_TAG[v];
        tagStatus.textContent = STATUS[v];
      }),
      h("span", { class: "small muted", text: "Tópicos do programa: " + card.topicos.join(", ") }),
      h("span", { class: "small muted", "data-lidos-card": card.id, text: textoLidos(card.id) })
    ]));

    if (card.bio) {
      corpo.appendChild(h("div", { class: "secao-tit", text: card.autor.indexOf("Brasil") === 0 ? "Apresentação do material" : "Apresentação do autor" }));
      corpo.appendChild(h("div", { class: "bio" }, [
        h("p", {}, [h("b", { text: "Quem é: " }), card.bio.quem]),
        h("p", {}, [h("b", { text: "Origem: " }), card.bio.origem]),
        h("p", {}, [h("b", { text: "Por que importa: " }), card.bio.relevancia])
      ]));
    }

    corpo.appendChild(h("div", { class: "secao-tit", text: "Resumo da obra" }));
    corpo.appendChild(h("div", { class: "resumo" }, card.resumo.map(function (p) { return h("p", { text: p }); })));
    corpo.appendChild(h("div", { class: "secao-tit", text: "Conceitos-chave" }));
    corpo.appendChild(h("div", { class: "chips" }, card.conceitos.map(function (c, i) {
      if (!conceitoDe(card.id, i)) return h("span", { text: c });
      return chipConceito(card, i);
    })));
    corpo.appendChild(h("p", { class: "muted small", style: "margin:4px 0 0", text: "Toque no nome para abrir a explicação e as questões do conceito. A caixinha marca como lido." }));
    corpo.appendChild(h("div", { class: "secao-tit", text: "Lista de questões do autor (estilo IF)" }));
    corpo.appendChild(renderLista(chave, ids, false, atualizaTagQuiz));
    corpo.appendChild(h("div", { class: "secao-tit", text: "Desempenho por conceito" }));
    corpo.appendChild(h("p", { class: "muted small", style: "margin:0 0 6px", text: "Inclui as questões do autor e as de cada conceito. Toque no conceito para treinar." }));
    corpo.appendChild(desempenho);
    det.appendChild(corpo);
    det.addEventListener("toggle", aoAlternarCard(det, card.id));
    if (abertos[card.id]) det.open = true;
    return det;
  }

  // Cards abertos ficam abertos quando a aba é redesenhada.
  var abertos = {};
  // Ao recolher um card longo lá de baixo, volta a tela para o topo dele.
  function aoAlternarCard(det, id) {
    return function () {
      if (det.open) { abertos[id] = 1; return; }
      delete abertos[id];
      var topo = det.getBoundingClientRect().top;
      if (topo < alturaTopo()) window.scrollTo(0, window.scrollY + topo - alturaTopo() - 8);
      atualizaRolagem();
    };
  }
  function alturaTopo() { var t = document.querySelector(".topo"); return t ? t.offsetHeight : 0; }
  // O cabeçalho é fixo: o corpo reserva a altura dele cheio (--topo-cheio) e,
  // ao rolar, ele encolhe para só as abas, sem empurrar o conteúdo.
  function ajustaTopo() {
    var raiz = document.documentElement.style;
    var compacto = document.body.classList.contains("compacto");
    if (compacto) document.body.classList.remove("compacto");
    raiz.setProperty("--topo-cheio", alturaTopo() + "px");
    if (compacto) document.body.classList.add("compacto");
    raiz.setProperty("--topo-h", alturaTopo() + "px");
  }
  window.addEventListener("resize", function () { ajustaTopo(); atualizaRolagem(); });

  // Barra fina do card aberto: aparece quando o cabeçalho do card sai da tela.
  var barraCard = h("div", { class: "barra-card", "aria-hidden": "true" });
  var barraAlvo = null;
  barraCard.appendChild(h("div", { class: "barra-card-in" }, [
    h("span", { class: "n" }), h("span", { class: "tit" }),
    h("button", { type: "button", class: "seta", title: "Recolher card", "aria-label": "Recolher card", onclick: function () { if (barraAlvo) barraAlvo.open = false; } })
  ]));
  document.body.appendChild(barraCard);

  var pedidoRolagem = false;
  function atualizaRolagem() {
    pedidoRolagem = false;
    var y = window.scrollY;
    var corpo = document.body;
    var era = corpo.classList.contains("compacto");
    var deve = era ? y > 10 : y > 60;
    if (deve !== era) { corpo.classList.toggle("compacto", deve); ajustaTopo(); }
    var limite = alturaTopo();
    var alvo = null;
    document.querySelectorAll(".aba.ativa details.card[open]").forEach(function (d) {
      var r = d.getBoundingClientRect();
      var s = d.querySelector("summary").getBoundingClientRect();
      if (s.bottom < limite && r.bottom > limite + 60) alvo = d;
    });
    if (alvo !== barraAlvo) {
      barraAlvo = alvo;
      if (alvo) {
        barraCard.querySelector(".n").textContent = alvo.querySelector("summary .n").textContent;
        barraCard.querySelector(".tit").textContent = alvo.querySelector("summary .obra").textContent;
      }
    }
    barraCard.classList.toggle("ativa", !!alvo);
  }
  window.addEventListener("scroll", function () {
    if (!pedidoRolagem) { pedidoRolagem = true; requestAnimationFrame(atualizaRolagem); }
  }, { passive: true });

  function lido(cardId, i) { return !!(estado.lidos && estado.lidos[cardId + ":" + i]); }
  function marcarLido(cardId, i, v) {
    estado.lidos = estado.lidos || {};
    if (v) estado.lidos[cardId + ":" + i] = 1; else delete estado.lidos[cardId + ":" + i];
    salvar();
    document.querySelectorAll('[data-lido="' + cardId + ":" + i + '"]').forEach(function (cb) { cb.checked = v; });
    document.querySelectorAll('[data-chip="' + cardId + ":" + i + '"]').forEach(function (ch) { ch.classList.toggle("lido", v); });
    document.querySelectorAll('[data-lidos-card="' + cardId + '"]').forEach(function (el) { el.textContent = textoLidos(cardId); });
  }
  function textoLidos(cardId) {
    var c = contarConceitos(cardId);
    return "Conceitos lidos: " + c.lidos + "/" + c.total;
  }
  function caixaLido(cardId, i, rotulo) {
    var cb = h("input", { type: "checkbox", "data-lido": cardId + ":" + i, "aria-label": "Marcar como lido", onchange: function () { marcarLido(cardId, i, cb.checked); } });
    cb.checked = lido(cardId, i);
    return rotulo ? h("label", { class: "lido-label" }, [cb, " " + rotulo]) : cb;
  }
  function chipConceito(card, i) {
    var p = pontuar(IDS_CONC[card.id][i]);
    return h("span", { class: "chip" + (lido(card.id, i) ? " lido" : ""), "data-chip": card.id + ":" + i }, [
      caixaLido(card.id, i),
      h("button", { type: "button", class: "chip-txt", title: "Abrir explicação e questões", text: card.conceitos[i], onclick: function () { abrirConceito(card, i); } }),
      p.resp ? pilulaPontos(p, true) : null
    ]);
  }

  // ---------- Janela de conceito ----------
  function conceitoDe(cardId, i) {
    var lista = (window.CONCEITOS || {})[cardId];
    return lista && lista[i] ? lista[i] : null;
  }

  var janela = null;
  var janelaMudou = false;
  function abrirConceito(card, i) {
    var c = conceitoDe(card.id, i);
    if (!c) return;

    if (!janela) {
      janela = h("dialog", { class: "janela" });
      // clicar fora do conteúdo fecha
      janela.addEventListener("click", function (ev) { if (ev.target === janela) janela.close(); });
      // ao fechar, redesenha a aba para atualizar pontuações (mantendo cards abertos e a rolagem)
      janela.addEventListener("close", function () {
        if (!janelaMudou) return;
        janelaMudou = false;
        var y = window.scrollY;
        if (document.getElementById("aba-estudos").classList.contains("ativa")) renderEstudos();
        else abrir(location.hash.slice(1));
        window.scrollTo(0, y);
      });
      document.body.appendChild(janela);
    }
    var total = card.conceitos.length;
    var idsLista = IDS_CONC_LISTA[card.id][i];
    var placar = h("div", { class: "jan-placar" });
    function atualizaPlacar() {
      var p = pontuar(IDS_CONC[card.id][i]);
      var n = nivel(p);
      placar.innerHTML = "";
      placar.appendChild(h("div", {}, [
        h("span", { class: "muted small", text: "Seu domínio neste conceito" }),
        h("div", { class: "jan-pts" }, [
          h("b", { text: p.resp ? String(p.dominio) : "–" }),
          h("span", { class: "tag " + n.tag, text: n.nome }),
          h("span", { class: "muted small", text: p.resp + " de " + p.total + " questões feitas (3 do conceito + as do autor que o cobram)" })
        ])
      ]));
      if (p.alertas) placar.appendChild(h("div", { class: "small", style: "color:var(--bad);margin-top:4px", text: "⚠ " + p.alertas + " com falsa certeza ou correta eliminada" }));
    }
    atualizaPlacar();

    janela.innerHTML = "";
    janela.appendChild(h("div", { class: "jan-in" }, [
      h("div", { class: "jan-topo" }, [
        h("span", { class: "muted small", text: nomeAutor(card) + " · conceito " + (i + 1) + " de " + total }),
        h("button", { type: "button", class: "jan-x", "aria-label": "Fechar", text: "×", onclick: function () { janela.close(); } })
      ]),
      h("h3", { class: "jan-tit", text: c.t }),
      h("div", { class: "jan-lido" }, [caixaLido(card.id, i, "Li e entendi este conceito")]),
      placar,
      h("div", { class: "jan-sec" }, [h("div", { class: "secao-tit", text: "O que é" }), h("p", { text: c.o })]),
      h("div", { class: "jan-sec" }, [h("div", { class: "secao-tit", text: "Por que importa" }), h("p", { text: c.i })]),
      h("div", { class: "jan-sec" }, [h("div", { class: "secao-tit", text: "Como aplicar" }), h("p", { text: c.a })]),
      idsLista.length ? h("div", { class: "jan-sec" }, [
        h("div", { class: "secao-tit", text: "Questões deste conceito (" + idsLista.length + ")" }),
        renderLista("conc:" + card.id + ":" + i, idsLista, false, (function () { var primeiro = true; return function () { if (primeiro) { primeiro = false; return; } janelaMudou = true; atualizaPlacar(); }; })())
      ]) : null,
      h("div", { class: "jan-nav" }, [
        h("button", { type: "button", class: "btn sec", text: "‹ Anterior", disabled: i === 0 ? "" : null, onclick: function () { abrirConceito(card, i - 1); } }),
        h("button", { type: "button", class: "btn sec", text: "Próximo ›", disabled: i === total - 1 ? "" : null, onclick: function () { abrirConceito(card, i + 1); } })
      ])
    ]));
    if (!janela.open) janela.showModal();
    janela.scrollTop = 0;
  }

  // ---------- Lista de questões (responder → finalizar → correção) ----------
  function renderLista(chave, ids, mostrarOrigem, aoMudar) {
    var caixa = h("div", { class: "lista-q" });

    function desenhar() {
      caixa.innerHTML = "";
      if (estado.rev[chave]) desenharCorrecao(); else desenharResposta();
      if (aoMudar) aoMudar();
    }

    function rascunho() {
      if (!estado.rasc[chave]) estado.rasc[chave] = { ids: ids, flags: {}, pick: {}, notas: {} };
      return estado.rasc[chave];
    }

    function desenharResposta() {
      var r = estado.rasc[chave] || { flags: {}, pick: {}, notas: {} };
      var rodape = h("div", { class: "fim-lista" });
      ids.forEach(function (id, idx) { caixa.appendChild(questaoResposta(id, idx + 1, r, atualizarRodape)); });
      caixa.appendChild(rodape);
      function atualizarRodape() {
        var rr = estado.rasc[chave] || r;
        var marcadas = ids.filter(function (id) { return resposta(rr.flags[id], rr.pick[id]).i !== undefined; }).length;
        rodape.innerHTML = "";
        rodape.appendChild(h("span", { class: "muted small", text: marcadas + " de " + ids.length + " com resposta definida" }));
        rodape.appendChild(h("button", { class: "btn", text: "Finalizar lista e corrigir", onclick: finalizar }));
      }
      atualizarRodape();
    }

    function questaoResposta(id, num, r, aoMarcar) {
      var item = MAPA_Q[id], q = item.q;
      var box = h("div", { class: "questao" });
      if (mostrarOrigem) box.appendChild(h("div", { class: "muted small", style: "margin-bottom:6px", text: item.origem }));
      box.appendChild(h("p", { class: "enun" }, [h("b", { text: num + "." }), q.q]));
      var linhas = [];
      var status = h("div", { class: "status-q small" });

      q.o.forEach(function (txt, i) {
        var botoes = FLAGS.map(function (f) {
          return h("button", { type: "button", class: "flag f-" + f, title: FLAG_NOME[f], "aria-label": LETRAS[i] + ": " + FLAG_NOME[f], text: f, onclick: function () {
            var rr = rascunho();
            var fl = (rr.flags[id] || ["", "", "", ""]).slice();
            fl[i] = fl[i] === f ? "" : f;
            rr.flags[id] = fl;
            salvar(); pintar(); aoMarcar();
          } });
        });
        var letra = h("button", { type: "button", class: "letra", title: "Escolher esta em caso de empate", text: LETRAS[i], onclick: function () {
          var rr = rascunho();
          var res = resposta(rr.flags[id], undefined);
          if (res.status === "empate" && res.cand.indexOf(i) >= 0) { rr.pick[id] = i; salvar(); pintar(); aoMarcar(); }
          else if (rr.pick[id] !== undefined) { delete rr.pick[id]; salvar(); pintar(); aoMarcar(); }
        } });
        var linha = h("div", { class: "alt-f" }, [letra, h("span", { class: "txt", text: txt }), h("span", { class: "flags" }, botoes)]);
        linhas.push({ el: linha, botoes: botoes, letra: letra });
        box.appendChild(linha);
      });
      box.appendChild(status);

      var notaIni = (r.notas && r.notas[id]) || "";
      var nota = h("textarea", { rows: "2", placeholder: "Por que marcou assim? (opcional)", oninput: function () {
        var rr = rascunho(); rr.notas[id] = nota.value; salvar();
      } });
      nota.value = notaIni;
      box.appendChild(h("details", { class: "nota", open: notaIni ? "" : null }, [h("summary", { text: "Anotar raciocínio" }), nota]));

      function pintar() {
        var rr = estado.rasc[chave] || r;
        var fl = rr.flags[id] || ["", "", "", ""];
        var res = resposta(fl, rr.pick[id]);
        linhas.forEach(function (l, i) {
          l.el.className = "alt-f" + (fl[i] ? " m-" + fl[i] : "") + (res.i === i ? " escolhida" : "");
          l.botoes.forEach(function (b, k) { b.classList.toggle("on", fl[i] === FLAGS[k]); });
          l.letra.textContent = LETRAS[i] + (res.empate && res.i === i ? "*" : "");
        });
        status.className = "status-q small";
        if (res.status === "branco") status.textContent = "Sem resposta ainda.";
        else if (res.status === "empate") {
          status.className += " alerta";
          status.textContent = "Empate entre " + res.cand.map(function (i) { return LETRAS[i]; }).join(" e ") + ": toque na letra da que vai marcar.";
        } else status.textContent = "Sua resposta: " + LETRAS[res.i] + (res.empate ? "*" : "") + " (" + FLAG_NOME[res.flag] + ")";
      }
      pintar();
      return box;
    }

    function finalizar() {
      var rr = estado.rasc[chave] || { flags: {}, pick: {}, notas: {} };
      var empates = [], brancos = [];
      ids.forEach(function (id, idx) {
        var res = resposta(rr.flags[id], rr.pick[id]);
        if (res.status === "empate") empates.push(idx + 1);
        if (res.status === "branco") brancos.push(idx + 1);
      });
      if (empates.length) { alert("Resolva o empate da(s) questão(ões) " + empates.join(", ") + ": toque na letra da alternativa que vai marcar."); return; }
      if (brancos.length && !confirm("A(s) questão(ões) " + brancos.join(", ") + " estão sem resposta e vão contar como em branco. Finalizar mesmo assim?")) return;

      var res = {};
      ids.forEach(function (id) {
        var q = MAPA_Q[id].q;
        var fl = rr.flags[id] || ["", "", "", ""];
        var cls = classificar(fl, rr.pick[id], q.c);
        res[id] = cls;
        var reg = estado.quiz[id] || { t: 0, a: 0 };
        var acertou = cls === "solido" || cls === "fragil" || cls === "chute";
        reg.t++; if (acertou) reg.a++;
        reg.ult = acertou; reg.cls = cls; reg.d = iso(hoje());
        estado.quiz[id] = reg;
      });
      estado.rev[chave] = { ids: ids, flags: rr.flags, pick: rr.pick, notas: rr.notas, res: res, fim: iso(hoje()) };
      delete estado.rasc[chave];
      salvar();
      desenhar();
      caixa.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function desenharCorrecao() {
      var rv = estado.rev[chave];
      var cont = {}, certas = 0;
      rv.ids.forEach(function (id) {
        var c = rv.res[id]; cont[c] = (cont[c] || 0) + 1;
        if (c === "solido" || c === "fragil" || c === "chute") certas++;
      });
      var resumo = h("div", { class: "resultado" }, [
        h("div", { class: "res-top" }, [
          h("div", {}, [h("span", { class: "res-num", text: certas + "/" + rv.ids.length }), h("span", { class: "muted small", text: " certas · finalizada em " + fmtData(rv.fim) })]),
          h("button", { class: "btn sec", text: "Refazer lista", onclick: refazer })
        ]),
        h("div", { class: "chips-cls" }, CLS_ORDEM.filter(function (k) { return cont[k]; }).map(function (k) {
          return h("span", { class: "tag " + CLS[k].tag, text: cont[k] + " × " + CLS[k].nome });
        }))
      ]);
      var prior = (cont.falsa || 0) + (cont.eliminou || 0);
      if (prior) resumo.appendChild(h("p", { class: "small", style: "margin:8px 0 0", text: "Revise primeiro as marcadas como falsa certeza e correta eliminada: nelas o problema é o conceito, não a dúvida." }));
      caixa.appendChild(resumo);

      rv.ids.forEach(function (id, idx) { caixa.appendChild(questaoCorrigida(id, idx + 1, rv)); });
      caixa.appendChild(h("div", { class: "fim-lista" }, [h("span"), h("button", { class: "btn sec", text: "Refazer lista", onclick: refazer })]));
    }

    function questaoCorrigida(id, num, rv) {
      var item = MAPA_Q[id], q = item.q;
      var fl = rv.flags[id] || ["", "", "", ""];
      var res = resposta(fl, rv.pick[id]);
      var cls = rv.res[id];
      var box = h("div", { class: "questao corrigida" });
      box.appendChild(h("div", { class: "cab-q" }, [
        h("span", { class: "tag " + CLS[cls].tag, text: CLS[cls].nome }),
        h("span", { class: "muted small", text: CLS[cls].dica }),
        mostrarOrigem ? h("span", { class: "muted small origem", text: item.origem }) : null
      ]));
      box.appendChild(h("p", { class: "enun" }, [h("b", { text: num + "." }), q.q]));
      q.o.forEach(function (txt, i) {
        var certa = i === q.c, minha = res.i === i;
        var classe = "alt-c" + (certa ? " certa" : "") + (minha && !certa ? " errada" : "");
        var marca = certa ? "✓ correta" : (minha ? "✗ sua resposta" : "");
        box.appendChild(h("div", { class: classe }, [
          h("div", { class: "alt-c-top" }, [
            h("span", { class: "let", text: LETRAS[i] + (res.empate && minha ? "*" : "") + ")" }),
            h("span", { class: "txt", text: txt }),
            h("span", { class: "lado-c" }, [
              fl[i] ? h("b", { class: "flag-mini f-" + fl[i], title: FLAG_NOME[fl[i]], text: fl[i] }) : h("b", { class: "flag-mini vazia", text: "–" }),
              marca ? h("span", { class: "marca-c", text: marca }) : null
            ])
          ]),
          q.x && q.x[i] ? h("div", { class: "por-que", text: q.x[i] }) : null
        ]));
      });
      box.appendChild(h("div", { class: "expl" }, [h("b", { text: "Comentário: " }), q.e]));
      if (rv.notas && rv.notas[id]) box.appendChild(h("div", { class: "nota-lida small" }, [h("b", { text: "Seu raciocínio: " }), rv.notas[id]]));
      var hist = estado.quiz[id];
      if (hist && hist.t > 1) box.appendChild(h("div", { class: "muted small", style: "margin-top:6px", text: "Histórico: " + hist.a + " acerto(s) em " + hist.t + " tentativa(s)" }));
      return box;
    }

    function refazer() {
      delete estado.rev[chave];
      if (chave === "treino") estado.rasc.treino = { ids: ids, flags: {}, pick: {}, notas: {} };
      salvar();
      desenhar();
    }

    desenhar();
    return caixa;
  }

  function renderLegislacao(corpo) {
    corpo.appendChild(h("div", { class: "aviso" }, ["Questões de legislação entram na próxima versão. Por enquanto, use os cards para marcar o que já leu. Os links para o texto oficial estão na aba Documentos. Considere as alterações em vigor até a publicação do edital."]));
    window.BASE.legislacao.forEach(function (l, i) {
      var status = estado.cards[l.id] || 0;
      var det = h("details", { class: "card", "data-status": status, "data-card": "leg-" + l.id });
      det.addEventListener("toggle", aoAlternarCard(det, "leg-" + l.id));
      if (abertos["leg-" + l.id]) det.open = true;
      var tag = h("span", { class: "tag " + STATUS_TAG[status], text: STATUS[status] });
      det.appendChild(h("summary", {}, [
        h("span", { class: "n", text: i + 1 }),
        h("div", {}, [h("div", { class: "obra", text: l.titulo }), h("div", { class: "autor", text: l.foco })]),
        h("div", { class: "lado" }, [tag]),
        h("span", { class: "seta", "aria-hidden": "true", title: "Abrir ou recolher" })
      ]));
      det.appendChild(h("div", { class: "card-corpo" }, [
        h("div", { class: "linha" }, [h("label", { class: "small muted" }, ["Status: "]), seletorStatus(l.id, function (v) {
          det.setAttribute("data-status", v); tag.className = "tag " + STATUS_TAG[v]; tag.textContent = STATUS[v];
        })]),
        h("p", { class: "muted small", text: "Questões: em breve." })
      ]));
      corpo.appendChild(det);
    });
  }

  function renderInformatica(corpo) {
    corpo.appendChild(h("div", { class: "aviso" }, [
      "O conteúdo específico de Informática está no ",
      h("a", { href: "https://concursopublico.ifsp.edu.br/sites/default/files/arquivos/comunicado-2-2026-conteudo-programatico.pdf", target: "_blank", rel: "noopener", text: "PDF do Comunicado 2/2026" }),
      ". O próximo passo é mapear os tópicos em forte, médio e fraco e criar os cards desta aba."
    ]));
    var grupos = [
      { t: "Forte · revisar rápido", tag: "ok", itens: "Redes, sistemas operacionais, infraestrutura, segurança, governança de TI" },
      { t: "Médio · revisar com cuidado", tag: "warn", itens: "Banco de dados, modelagem, BI, SQL escrito à mão" },
      { t: "Fraco · só o que costuma cair", tag: "bad", itens: "Programação, engenharia de software, estruturas de dados" }
    ];
    var g = h("div", { class: "grade g3 mt" });
    grupos.forEach(function (x) {
      g.appendChild(h("div", { class: "bloco" }, [h("span", { class: "tag " + x.tag, text: x.t }), h("p", { style: "margin:10px 0 0", text: x.itens })]));
    });
    corpo.appendChild(g);
  }

  // ---------- Backup ----------
  document.getElementById("btn-exportar").addEventListener("click", function () {
    var blob = new Blob([JSON.stringify(estado, null, 2)], { type: "application/json" });
    var a = h("a", { href: URL.createObjectURL(blob), download: "ifsp26-backup-" + iso(hoje()) + ".json" });
    document.body.appendChild(a); a.click(); a.remove();
  });
  document.getElementById("inp-importar").addEventListener("change", function (ev) {
    var f = ev.target.files[0];
    if (!f) return;
    var leitor = new FileReader();
    leitor.onload = function () {
      try {
        var s = JSON.parse(leitor.result);
        if (!s || typeof s !== "object" || !s.cards) throw new Error("formato");
        if (!confirm("Substituir o progresso deste navegador pelo backup?")) return;
        estado = normalizar(s);
        salvar();
        abrir(location.hash.slice(1));
      } catch (e) { alert("Arquivo de backup inválido."); }
    };
    leitor.readAsText(f);
    ev.target.value = "";
  });

  // ---------- Início ----------
  document.getElementById("vaga").textContent = window.BASE.vaga;
  document.getElementById("versao").textContent = "ifsp26 v" + window.BASE.versao;
  ajustaTopo();
  abrir(location.hash.slice(1) || "painel");
  atualizaRolagem();
})();
