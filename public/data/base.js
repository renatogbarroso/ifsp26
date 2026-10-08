// Dados gerais do concurso: agenda, links e divisões de estudo.
// Para mudar uma data ou link, edite só este arquivo.

window.BASE = {
  versao: "1.1",
  vaga: "Informática · campus Boituva · 1 vaga AC · 40h DE",

  // Datas no formato AAAA-MM-DD. "marco: true" vira contador no painel.
  agenda: [
    { data: "2026-09-29", titulo: "Publicação do Edital 183/2026", tipo: "edital" },
    { data: "2026-10-01", titulo: "Conteúdo programático publicado (Comunicado 2/2026)", tipo: "edital" },
    { data: "2026-10-05", titulo: "Retificação (Edital 188/2026) e resultado das impugnações", tipo: "edital" },
    { data: "2026-10-06", titulo: "Abertura das inscrições", tipo: "inscricao" },
    { data: "2026-11-04", titulo: "Tema da prova didática publicado (data provável)", tipo: "didatica" },
    { data: "2026-11-17", titulo: "Fim das inscrições", tipo: "inscricao", marco: true },
    { data: "2026-11-18", titulo: "Último dia para pagar a GRU (R$ 200)", tipo: "inscricao" },
    { data: "2026-12-04", titulo: "Divulgação dos locais da objetiva", tipo: "objetiva" },
    { data: "2026-12-13", titulo: "Prova objetiva (São Paulo)", tipo: "objetiva", marco: true },
    { data: "2026-12-14", titulo: "Gabarito preliminar", tipo: "objetiva" },
    { data: "2027-01-26", titulo: "Resultado da objetiva", tipo: "objetiva" },
    { data: "2027-02-01", titulo: "Resultado final da objetiva", tipo: "objetiva" },
    { data: "2027-02-03", titulo: "Convocação para a didática (8 melhores)", tipo: "didatica" },
    { data: "2027-02-27", titulo: "Início da prova didática + entrega de títulos", tipo: "didatica", marco: true },
    { data: "2027-03-07", titulo: "Fim da prova didática (sem remarcação)", tipo: "didatica" },
    { data: "2027-03-10", titulo: "Resultado da didática", tipo: "didatica" },
    { data: "2027-03-15", titulo: "Resultado preliminar dos títulos", tipo: "titulos" }
  ],

  links: [
    { grupo: "Oficial", titulo: "Página do Edital 183/2026 (todas as publicações)", url: "https://concursopublico.ifsp.edu.br/editais/edital-1832026-docentes" },
    { grupo: "Oficial", titulo: "Formulário de inscrição", url: "https://concursopublico.ifsp.edu.br/formul%C3%A1rios/formul%C3%A1rio-de-inscri%C3%A7%C3%A3o-edital-1832026" },
    { grupo: "Oficial", titulo: "Portal de concursos do IFSP", url: "https://concursopublico.ifsp.edu.br" },
    { grupo: "Oficial", titulo: "Perguntas frequentes", url: "https://concursopublico.ifsp.edu.br/perguntas-frequentes" },
    { grupo: "Oficial", titulo: "Comissão: concursodocente@ifsp.edu.br", url: "mailto:concursodocente@ifsp.edu.br" },

    { grupo: "Editais e comunicados", titulo: "Edital 183/2026 – Docentes", url: "https://concursopublico.ifsp.edu.br/arquivos/edital-1832026-docentes" },
    { grupo: "Editais e comunicados", titulo: "Edital 183/2026 – versão do DOU", url: "https://concursopublico.ifsp.edu.br/arquivos/edital-1832026-vers%C3%A3o-publicada-no-di%C3%A1rio-oficial-da-uni%C3%A3o" },
    { grupo: "Editais e comunicados", titulo: "Comunicado 1/2026 – Cronograma previsto", url: "https://concursopublico.ifsp.edu.br/arquivos/comunicado-12026-cronograma-previsto" },
    { grupo: "Editais e comunicados", titulo: "Comunicado 2/2026 – Conteúdo programático e bibliografia", url: "https://concursopublico.ifsp.edu.br/arquivos/comunicado-22026-conte%C3%BAdo-program%C3%A1tico-e-bibliografia-sugerida" },
    { grupo: "Editais e comunicados", titulo: "Conteúdo programático (PDF direto)", url: "https://concursopublico.ifsp.edu.br/sites/default/files/arquivos/comunicado-2-2026-conteudo-programatico.pdf" },
    { grupo: "Editais e comunicados", titulo: "Edital 188/2026 – Retificação", url: "https://concursopublico.ifsp.edu.br/arquivos/edital-1882026-retifica-o-edital-1832026" },
    { grupo: "Editais e comunicados", titulo: "Retificações (PDF)", url: "https://concursopublico.ifsp.edu.br/sites/default/files/arquivos/retificacoes-edital-183-2026-versao-pdf.pdf" },
    { grupo: "Editais e comunicados", titulo: "Comunicado 3/2026 – Resultado das impugnações", url: "https://concursopublico.ifsp.edu.br/arquivos/comunicado-32026-resultado-dos-pedidos-de-impugna%C3%A7%C3%A3o-do-edital-1832026" },
    { grupo: "Editais e comunicados", titulo: "Orientações para emissão e pagamento da GRU", url: "https://concursopublico.ifsp.edu.br/arquivos/orienta%C3%A7%C3%B5es-para-emiss%C3%A3o-e-pagamento-da-guia-de-recolhimento-da-uni%C3%A3o-gru-edital-1832026" },

    { grupo: "Legislação (texto oficial)", titulo: "Constituição Federal de 1988", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
    { grupo: "Legislação (texto oficial)", titulo: "Lei 8.069/1990 – ECA", url: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm" },
    { grupo: "Legislação (texto oficial)", titulo: "Lei 8.112/1990 – Regime Jurídico", url: "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm" },
    { grupo: "Legislação (texto oficial)", titulo: "Lei 8.429/1992 – Improbidade", url: "https://www.planalto.gov.br/ccivil_03/leis/l8429.htm" },
    { grupo: "Legislação (texto oficial)", titulo: "Lei 9.394/1996 – LDB", url: "https://www.planalto.gov.br/ccivil_03/leis/l9394.htm" },
    { grupo: "Legislação (texto oficial)", titulo: "Lei 11.892/2008 – Institutos Federais", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11892.htm" },
    { grupo: "Legislação (texto oficial)", titulo: "Lei 12.772/2012 – Carreira docente", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12772.htm" },
    { grupo: "Legislação (texto oficial)", titulo: "Lei 13.146/2015 – Inclusão (LBI)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm" },
    { grupo: "Legislação (texto oficial)", titulo: "Decreto 1.171/1994 – Código de Ética", url: "https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm" }
  ],

  // Divisões da objetiva. Pedagogia tem os cards completos em pedagogia.js.
  areas: [
    { id: "pedagogia", nome: "Conhecimentos pedagógicos", parte: "Parte comum (15 questões com legislação)" },
    { id: "legislacao", nome: "Legislação", parte: "Parte comum (15 questões com pedagogia)" },
    { id: "informatica", nome: "Informática", parte: "Área específica (25 questões)" }
  ],

  // Tópicos do programa de pedagogia (Comunicado 2/2026), resumidos.
  programaPedagogia: [
    { n: 1, t: "Educação, educação escolar, educação profissional e o papel do professor" },
    { n: 2, t: "Trabalho educativo, formação humana e socialização do conhecimento" },
    { n: 3, t: "Ensino, desenvolvimento humano e projeto de sociedade" },
    { n: 4, t: "Mediação didática, planejamento e avaliação da aprendizagem" },
    { n: 5, t: "Educação em direitos humanos, gênero e diversidade" },
    { n: 6, t: "Educação para as relações étnico-raciais" }
  ],

  // Cards de legislação ainda sem questões (próxima versão).
  legislacao: [
    { id: "cf88", titulo: "Constituição Federal de 1988", foco: "Administração pública e servidores; educação, ciência, tecnologia e inovação; família, criança, adolescente, jovem e idoso." },
    { id: "eca", titulo: "Lei 8.069/1990 – ECA", foco: "Disposições gerais e artigos selecionados pelo edital." },
    { id: "l8112", titulo: "Lei 8.112/1990 – Regime Jurídico Único", foco: "Provimento, vacância, direitos e vantagens, regime disciplinar e processo administrativo disciplinar." },
    { id: "l8429", titulo: "Lei 8.429/1992 – Improbidade administrativa", foco: "Disposições gerais, atos de improbidade e penas (com as mudanças da Lei 14.230/2021)." },
    { id: "ldb", titulo: "Lei 9.394/1996 – LDB", foco: "Artigos 1º a 67." },
    { id: "l11892", titulo: "Lei 11.892/2008 – Institutos Federais", foco: "Criação, finalidades, objetivos, percentuais de vagas e estrutura." },
    { id: "l12772", titulo: "Lei 12.772/2012 – Carreira EBTT", foco: "Estrutura da carreira, regime de trabalho, DE, RT e RSC." },
    { id: "lbi", titulo: "Lei 13.146/2015 – Inclusão da pessoa com deficiência", foco: "Educação, acessibilidade, cultura e lazer, ciência e tecnologia." },
    { id: "d1171", titulo: "Decreto 1.171/1994 – Código de Ética", foco: "Regras deontológicas, deveres, vedações e comissões de ética." }
  ]
};
