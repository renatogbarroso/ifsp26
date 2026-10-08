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

  // ---------- Estado ----------
  var estado = carregar();
  var subabaAtual = "pedagogia";
  var treino = null; // lista de ids de questões do treino aleatório

  function carregar() {
    var vazio = { cards: {}, quiz: {}, sessoes: [] };
    try {
      var s = JSON.parse(localStorage.getItem(CHAVE));
      if (s && typeof s === "object") {
        s.cards = s.cards || {};
        s.quiz = s.quiz || {};
        s.sessoes = s.sessoes || [];
        return s;
      }
    } catch (e) { /* sem storage: segue com estado vazio */ }
    return vazio;
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

  // Todas as questões de pedagogia com id único: "<card>-<n>"
  function questoesPedagogia() {
    var lista = [];
    window.PEDAGOGIA.forEach(function (card) {
      card.questoes.forEach(function (q, i) { lista.push({ id: card.id + "-" + (i + 1), q: q, card: card, n: i + 1 }); });
    });
    return lista;
  }
  function statsQuiz(ids) {
    var resp = 0, acertos = 0, tentativas = 0, acTent = 0;
    ids.forEach(function (id) {
      var r = estado.quiz[id];
      if (r && r.t) { resp++; if (r.ult) acertos++; tentativas += r.t; acTent += r.a; }
    });
    return { total: ids.length, respondidas: resp, certasUltima: acertos, tentativas: tentativas, acertosTotais: acTent };
  }

  // ---------- Abas ----------
  var renders = { painel: renderPainel, estudos: renderEstudos, agenda: renderAgenda, docs: renderDocs };
  function abrir(aba) {
    if (!renders[aba]) aba = "painel";
    document.querySelectorAll(".abas button").forEach(function (b) { b.setAttribute("aria-selected", b.dataset.aba === aba ? "true" : "false"); });
    document.querySelectorAll(".aba").forEach(function (s) { s.classList.toggle("ativa", s.id === "aba-" + aba); });
    renders[aba]();
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

    // Contadores
    var cores = { inscricao: "var(--inscricao)", objetiva: "var(--objetiva)", didatica: "var(--didatica)" };
    var marcos = window.BASE.agenda.filter(function (e) { return e.marco; });
    var g = h("div", { class: "grade g3" });
    marcos.forEach(function (e) {
      var n = diasAte(e.data);
      g.appendChild(h("div", { class: "bloco contador", style: "--c:" + (cores[e.tipo] || "var(--accent)") }, [
        h("span", { class: "rot", text: e.titulo }),
        h("span", { class: "num", html: (n < 0 ? "✓" : n) + (n >= 0 ? "<small>" + (n === 1 ? "dia" : "dias") + "</small>" : "") }),
        h("span", { class: "data", text: fmtData(e.data) + " · " + DIAS_SEM[data(e.data).getDay()] })
      ]));
    });
    raiz.appendChild(g);

    // Progresso + próximos eventos
    var g2 = h("div", { class: "grade g2 mt" });

    var ped = window.PEDAGOGIA;
    var pedEstudados = ped.filter(function (c) { return (estado.cards[c.id] || 0) >= 2; }).length;
    var leg = window.BASE.legislacao;
    var legEstudados = leg.filter(function (c) { return (estado.cards[c.id] || 0) >= 2; }).length;
    var qs = statsQuiz(questoesPedagogia().map(function (x) { return x.id; }));
    var aprov = pct(qs.acertosTotais, qs.tentativas);

    g2.appendChild(h("div", { class: "bloco" }, [
      h("h3", { text: "Evolução" }),
      barra("Pedagogia · obras estudadas", pedEstudados, ped.length),
      barra("Pedagogia · questões respondidas", qs.respondidas, qs.total),
      barra("Pedagogia · aproveitamento", qs.acertosTotais, qs.tentativas, qs.tentativas ? aprov + "% de " + qs.tentativas + " tentativas" : "sem respostas"),
      barra("Legislação · normas estudadas", legEstudados, leg.length),
      h("p", { class: "muted small", text: "Informática: aguardando o mapa de tópicos." })
    ]));

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

    // Sessões de estudo
    raiz.appendChild(blocoSessoes());
  }

  function blocoSessoes() {
    var bloco = h("div", { class: "bloco mt" });
    var totalMin = estado.sessoes.reduce(function (s, x) { return s + (+x.min || 0); }, 0);

    // Semanas (segunda a domingo), últimas 8
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
      sub.appendChild(h("button", { "aria-selected": a.id === subabaAtual ? "true" : "false", text: a.nome, onclick: function () { subabaAtual = a.id; treino = null; renderEstudos(); } }));
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

  function renderPedagogia(corpo) {
    var prog = h("ul", { class: "programa" });
    window.BASE.programaPedagogia.forEach(function (p) { prog.appendChild(h("li", {}, [h("b", { text: p.n + "." }), p.t])); });
    corpo.appendChild(h("div", { class: "bloco" }, [
      h("h3", { text: "Programa oficial (Comunicado 2/2026)" }),
      prog,
      h("p", { class: "muted small", style: "margin:10px 0 0", text: "Cards na ordem sugerida de estudo: primeiro as obras mais clássicas e mais cobradas (Saviani, Luckesi, Veiga), depois desenvolvimento, IFs e diversidade. Resumos e questões são sínteses próprias; use a obra para confirmar." })
    ]));

    var todas = questoesPedagogia();
    var st = statsQuiz(todas.map(function (x) { return x.id; }));
    corpo.appendChild(h("div", { class: "ferramentas" }, [
      h("button", { class: "btn", text: "Treino aleatório (10 questões)", onclick: function () { treino = montarTreino(todas, 10); renderEstudos(); } }),
      h("span", { class: "muted small", text: st.respondidas + " de " + st.total + " questões respondidas" + (st.tentativas ? " · " + pct(st.acertosTotais, st.tentativas) + "% de acerto" : "") })
    ]));

    if (treino) corpo.appendChild(blocoTreino(todas));

    window.PEDAGOGIA.slice().sort(function (a, b) { return a.ordem - b.ordem; }).forEach(function (card) {
      corpo.appendChild(cardObra(card));
    });
  }

  function montarTreino(todas, n) {
    // Prioridade: nunca respondidas, depois erradas na última vez, depois o resto.
    var grupos = [[], [], []];
    todas.forEach(function (x) {
      var r = estado.quiz[x.id];
      grupos[!r || !r.t ? 0 : (!r.ult ? 1 : 2)].push(x.id);
    });
    var sel = [];
    grupos.forEach(function (g) { embaralhar(g); sel = sel.concat(g); });
    return embaralhar(sel.slice(0, n));
  }

  function blocoTreino(todas) {
    var mapa = {};
    todas.forEach(function (x) { mapa[x.id] = x; });
    var b = h("div", { class: "bloco", style: "border-color:var(--accent)" }, [
      h("div", { class: "cabeca", style: "margin-bottom:4px" }, [
        h("h3", { text: "Treino aleatório" }),
        h("button", { class: "btn sec", text: "Fechar treino", onclick: function () { treino = null; renderEstudos(); } })
      ]),
      h("p", { class: "muted small", style: "margin:0", text: "Prioriza questões nunca respondidas e as que você errou na última tentativa." })
    ]);
    treino.forEach(function (id, i) {
      var x = mapa[id];
      b.appendChild(renderQuestao(x.q, id, i + 1, x.card.autor.split(" (")[0] + " · " + x.card.obra));
    });
    return b;
  }

  function cardObra(card) {
    var ids = card.questoes.map(function (_, i) { return card.id + "-" + (i + 1); });
    var st = statsQuiz(ids);
    var status = estado.cards[card.id] || 0;
    var det = h("details", { class: "card", "data-status": status });
    var tagStatus = h("span", { class: "tag " + STATUS_TAG[status], text: STATUS[status] });
    var tagQuiz = h("span", { class: "tag" + (st.respondidas ? (pct(st.certasUltima, st.respondidas) >= 70 ? " ok" : " bad") : ""), text: st.respondidas ? st.certasUltima + "/" + st.total + " certas" : st.total + " questões" });

    det.appendChild(h("summary", {}, [
      h("span", { class: "n", text: card.ordem }),
      h("div", {}, [h("div", { class: "obra", text: card.obra }), h("div", { class: "autor", text: card.autor + " · " + card.ano })]),
      h("div", { class: "lado" }, [tagStatus, tagQuiz])
    ]));

    var corpo = h("div", { class: "card-corpo" });
    corpo.appendChild(h("div", { class: "linha" }, [
      h("label", { class: "small muted" }, ["Status: "]),
      seletorStatus(card.id, function (v) {
        det.setAttribute("data-status", v);
        tagStatus.className = "tag " + STATUS_TAG[v];
        tagStatus.textContent = STATUS[v];
      }),
      h("span", { class: "small muted", text: "Tópicos do programa: " + card.topicos.join(", ") })
    ]));
    corpo.appendChild(h("div", { class: "secao-tit", text: "Resumo" }));
    corpo.appendChild(h("div", { class: "resumo" }, card.resumo.map(function (p) { return h("p", { text: p }); })));
    corpo.appendChild(h("div", { class: "secao-tit", text: "Conceitos-chave" }));
    corpo.appendChild(h("div", { class: "chips" }, card.conceitos.map(function (c) { return h("span", { text: c }); })));
    corpo.appendChild(h("div", { class: "secao-tit", text: "Questões (estilo IF)" }));
    card.questoes.forEach(function (q, i) { corpo.appendChild(renderQuestao(q, ids[i], i + 1)); });
    det.appendChild(corpo);
    return det;
  }

  function renderQuestao(q, id, num, origem) {
    var caixa = h("div", { class: "questao" });
    function desenhar() {
      caixa.innerHTML = "";
      var r = estado.quiz[id];
      if (origem) caixa.appendChild(h("div", { class: "muted small", style: "margin-bottom:6px", text: origem }));
      caixa.appendChild(h("p", { class: "enun" }, [h("b", { text: num + "." }), q.q]));
      var botoes = [];
      q.o.forEach(function (txt, i) {
        var bt = h("button", { class: "alt", type: "button", onclick: function () { responder(i); } }, [
          h("span", { class: "let", text: "ABCD"[i] + ")" }), h("span", { text: txt })
        ]);
        botoes.push(bt);
        caixa.appendChild(bt);
      });
      var rod = h("div", { class: "rodape-q" }, [
        h("span", { class: "muted small", text: r && r.t ? "Histórico: " + r.a + "/" + r.t + " acertos · última " + (r.ult ? "certa" : "errada") : "Ainda não respondida" })
      ]);
      caixa.appendChild(rod);

      function responder(i) {
        var certa = i === q.c;
        var reg = estado.quiz[id] || { t: 0, a: 0 };
        reg.t++; if (certa) reg.a++; reg.ult = certa;
        estado.quiz[id] = reg; salvar();
        botoes.forEach(function (b, j) {
          b.disabled = true;
          if (j === q.c) b.classList.add("certa");
          else if (j === i) b.classList.add("errada");
        });
        caixa.insertBefore(h("div", { class: "expl" }, [
          h("b", { class: certa ? "ok" : "bad", text: certa ? "Correta. " : "Incorreta. Gabarito: " + "ABCD"[q.c] + ". " }),
          q.e
        ]), rod);
        rod.innerHTML = "";
        rod.appendChild(h("span", { class: "muted small", text: "Histórico: " + reg.a + "/" + reg.t + " acertos" }));
        rod.appendChild(h("button", { class: "link small", text: "Responder de novo", onclick: desenhar }));
      }
    }
    desenhar();
    return caixa;
  }

  function renderLegislacao(corpo) {
    corpo.appendChild(h("div", { class: "aviso" }, ["Questões de legislação entram na próxima versão. Por enquanto, use os cards para marcar o que já leu. Os links para o texto oficial estão na aba Documentos. Considere as alterações em vigor até a publicação do edital."]));
    window.BASE.legislacao.forEach(function (l, i) {
      var status = estado.cards[l.id] || 0;
      var det = h("details", { class: "card", "data-status": status });
      var tag = h("span", { class: "tag " + STATUS_TAG[status], text: STATUS[status] });
      det.appendChild(h("summary", {}, [
        h("span", { class: "n", text: i + 1 }),
        h("div", {}, [h("div", { class: "obra", text: l.titulo }), h("div", { class: "autor", text: l.foco })]),
        h("div", { class: "lado" }, [tag])
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
        estado = { cards: s.cards || {}, quiz: s.quiz || {}, sessoes: s.sessoes || [] };
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
  abrir(location.hash.slice(1) || "painel");
})();
