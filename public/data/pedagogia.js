// Cards de Conhecimentos Pedagógicos: uma obra da bibliografia sugerida por card.
// Bibliografia: Comunicado 2/2026 do IFSP (Edital 183/2026).
// Resumos, apresentações e questões são sínteses próprias para estudo. Confira sempre com a obra.
//
// Formato de cada card:
//   bio: { quem, origem, relevancia }   apresentação do autor
// Formato de cada questão:
//   q: enunciado   o: 4 alternativas (A a D)   c: índice da correta (0 = A)
//   e: comentário geral   x: explicação de cada alternativa (por que está certa ou errada)

window.PEDAGOGIA = [
  {
    id: "saviani",
    ordem: 1,
    autor: "Dermeval Saviani",
    obra: "Escola e democracia",
    ano: "2018 (1ª ed. 1983)",
    topicos: [2, 3, 4],
    bio: {
      quem: "Filósofo e educador, professor emérito da Unicamp. Criador da pedagogia histórico-crítica e coordenador do grupo HISTEDBR (História, Sociedade e Educação no Brasil).",
      origem: "Nasceu em 1943, em Santo Antônio de Posse (SP). Formou-se em Filosofia e fez doutorado em Filosofia da Educação na PUC-SP.",
      relevancia: "É um dos educadores brasileiros mais citados. 'Escola e democracia' (1983) é um dos livros de educação mais vendidos no país e virou leitura obrigatória em concursos. Como a bibliografia de 2026 tem viés crítico, Saviani é a base teórica de várias outras obras da lista, como a de Frigotto."
    },
    resumo: [
      "Saviani organiza as teorias da educação pela forma como explicam a marginalidade social. As teorias não críticas (pedagogia tradicional, pedagogia nova e pedagogia tecnicista) acreditam que a escola pode corrigir a marginalidade. As teorias crítico-reprodutivistas (violência simbólica de Bourdieu e Passeron, aparelhos ideológicos de Estado de Althusser e escola dualista de Baudelot e Establet) dizem o contrário: a escola reproduz a sociedade de classes e, por isso, marginaliza.",
      "Para Saviani, as duas leituras falham. As não críticas ignoram os determinantes sociais; as crítico-reprodutivistas não oferecem saída pedagógica. A proposta dele é a pedagogia histórico-crítica: a escola tem a função de socializar o saber sistematizado (o conhecimento clássico) para as camadas populares, como instrumento de luta.",
      "A crítica à Escola Nova é central. Ao deslocar o eixo do conteúdo para o método e do professor para o aluno, o escolanovismo teria aprimorado o ensino das elites e rebaixado o ensino destinado ao povo. A 'teoria da curvatura da vara' (imagem atribuída a Lênin) explica a estratégia: para endireitar uma vara torta, é preciso curvá-la para o lado oposto, valorizando de novo os conteúdos e o papel do professor.",
      "O método da pedagogia histórico-crítica parte da prática social e volta a ela, passando por problematização, instrumentalização e catarse."
    ],
    conceitos: [
      "Teorias não críticas × crítico-reprodutivistas",
      "Marginalidade: ignorância (tradicional), rejeição (nova), incompetência (tecnicista)",
      "Teoria da curvatura da vara",
      "Pedagogia histórico-crítica",
      "Prática social → problematização → instrumentalização → catarse → prática social",
      "Saber sistematizado / conteúdos clássicos",
      "Onze teses sobre educação e política"
    ],
    questoes: [
      {
        q: "Em 'Escola e democracia', Saviani classifica as teorias da educação conforme o modo como compreendem a relação entre educação e sociedade. Assinale a alternativa que agrupa corretamente as teorias crítico-reprodutivistas.",
        o: [
          "Pedagogia tradicional, pedagogia nova e pedagogia tecnicista.",
          "Teoria do sistema de ensino como violência simbólica, teoria da escola como aparelho ideológico de Estado e teoria da escola dualista.",
          "Pedagogia histórico-crítica, pedagogia libertadora e pedagogia da autonomia.",
          "Escola Nova, construtivismo e pedagogia das competências."
        ],
        c: 1,
        e: "As crítico-reprodutivistas são as de Bourdieu e Passeron (violência simbólica), Althusser (AIE) e Baudelot e Establet (escola dualista). A alternativa A lista as teorias não críticas.",
        x: [
          "São as três teorias NÃO críticas. Elas acreditam que a escola pode corrigir a marginalidade, o oposto do que pensam as crítico-reprodutivistas.",
          "Correta. São as três teorias que veem a escola como reprodutora da sociedade de classes: Bourdieu e Passeron, Althusser, e Baudelot e Establet.",
          "Mistura a proposta do próprio Saviani (histórico-crítica) com as de Paulo Freire. São pedagogias críticas que apontam saídas, não teorias reprodutivistas.",
          "Escola Nova é teoria não crítica. Construtivismo e pedagogia das competências nem aparecem nessa classificação de Saviani."
        ]
      },
      {
        q: "Segundo Saviani, cada teoria não crítica explica de um modo a condição do marginalizado. Associe corretamente: I. Pedagogia tradicional; II. Pedagogia nova; III. Pedagogia tecnicista. ( ) o marginalizado é o rejeitado; ( ) o marginalizado é o incompetente, ineficiente e improdutivo; ( ) o marginalizado é o ignorante.",
        o: [
          "II, III, I.",
          "I, II, III.",
          "III, I, II.",
          "II, I, III."
        ],
        c: 0,
        e: "Tradicional: marginalidade é ignorância (falta de conhecimento). Nova: é rejeição (não aceitação das diferenças). Tecnicista: é incompetência, ineficiência e improdutividade.",
        x: [
          "Correta. Rejeitado = Escola Nova (II); incompetente/improdutivo = tecnicista (III); ignorante = tradicional (I).",
          "Atribui a rejeição à pedagogia tradicional. Para a tradicional, o problema é a ignorância, que se resolve transmitindo conhecimento.",
          "Atribui a rejeição à tecnicista. A palavra 'improdutivo' é a pista da tecnicista, que pensa a escola com lógica de fábrica.",
          "Acerta a primeira (II) mas troca as outras: 'incompetente, ineficiente e improdutivo' é vocabulário de eficiência, típico da tecnicista, não da tradicional."
        ]
      },
      {
        q: "Na pedagogia histórico-crítica, o trabalho pedagógico é organizado em momentos articulados. Assinale a sequência correta.",
        o: [
          "Preparação, apresentação, associação, generalização e aplicação.",
          "Atividade, problema, levantamento de dados, hipótese e experimentação.",
          "Prática social, problematização, instrumentalização, catarse e prática social.",
          "Diagnóstico, planejamento, execução, avaliação e recuperação."
        ],
        c: 2,
        e: "Os momentos de Saviani começam e terminam na prática social, que no ponto de chegada está qualitativamente alterada. A alternativa A são os passos de Herbart (pedagogia tradicional) e a B lembra os passos de Dewey (Escola Nova).",
        x: [
          "São os passos formais de Herbart, base da pedagogia TRADICIONAL. Saviani os cita justamente para contrastar com a proposta dele.",
          "Lembra o método de Dewey, base da Escola Nova: o aluno parte de uma atividade e investiga como um cientista. Saviani critica esse modelo.",
          "Correta. É a sequência da pedagogia histórico-crítica: começa e termina na prática social, que no fim está transformada pela catarse.",
          "É um ciclo genérico de gestão ou de planejamento escolar. Não é a sequência de nenhum autor da bibliografia."
        ]
      },
      {
        q: "Ao recorrer à imagem da 'curvatura da vara', Saviani pretende:",
        o: [
          "Defender que o professor deve ser flexível e se adaptar aos interesses espontâneos dos alunos.",
          "Mostrar que a escola deve se curvar às exigências do mercado de trabalho para garantir empregabilidade.",
          "Justificar o abandono dos conteúdos clássicos em favor de projetos interdisciplinares.",
          "Argumentar que, diante do predomínio do ideário escolanovista, é preciso enfatizar no sentido oposto a importância dos conteúdos e da transmissão do conhecimento."
        ],
        c: 3,
        e: "A vara estava curvada para o lado da Escola Nova. Para endireitá-la, Saviani a curva para o outro lado, valorizando conteúdos e o papel do professor, sem simplesmente voltar à pedagogia tradicional.",
        x: [
          "É o contrário. Adaptar-se aos interesses espontâneos é o ideário escolanovista, que é justamente o lado para onde a vara estava torta.",
          "Pega a palavra 'curvar' ao pé da letra. Saviani é crítico da subordinação da escola ao mercado; essa alternativa descreve a lógica tecnicista.",
          "Saviani defende os conteúdos clássicos. Abandoná-los seria entortar a vara ainda mais para o lado errado.",
          "Correta. Como a vara estava curvada para o lado da Escola Nova, ele força o lado oposto, valorizando conteúdo e professor."
        ]
      },
      {
        q: "Sobre a crítica de Saviani à Escola Nova, é correto afirmar que:",
        o: [
          "O escolanovismo democratizou o acesso ao conhecimento ao priorizar o método e o interesse do aluno.",
          "O escolanovismo contribuiu para rebaixar o nível do ensino destinado às camadas populares, enquanto aprimorou a qualidade do ensino das elites.",
          "A Escola Nova fracassou porque manteve o professor no centro do processo de ensino.",
          "A Escola Nova é uma teoria crítico-reprodutivista, pois denuncia a escola como reprodutora da sociedade."
        ],
        c: 1,
        e: "Para Saviani, a Escola Nova desviou a atenção da transmissão do saber, o que prejudicou sobretudo os filhos das classes populares, que dependem da escola para acessar o conhecimento sistematizado. Ela é uma teoria não crítica.",
        x: [
          "É o discurso que a Escola Nova fazia de si mesma. Saviani conclui o oposto: o efeito foi antidemocrático.",
          "Correta. É a tese central da crítica: as elites aproveitaram os métodos novos, e as escolas populares perderam conteúdo.",
          "Inverte a Escola Nova. Ela tirou o professor do centro e colocou o aluno; quem centra no professor é a pedagogia tradicional.",
          "A Escola Nova é teoria NÃO crítica: acredita que a escola corrige a marginalidade. Não denuncia a escola como reprodutora."
        ]
      }
    ]
  },

  {
    id: "luckesi",
    ordem: 2,
    autor: "Cipriano Carlos Luckesi",
    obra: "Avaliação da aprendizagem escolar",
    ano: "2011 (22ª ed.)",
    topicos: [4],
    bio: {
      quem: "Filósofo e educador, professor da Faculdade de Educação da Universidade Federal da Bahia (UFBA) por décadas. Doutor em Filosofia da Educação pela PUC-SP.",
      origem: "Construiu a carreira na Bahia. Não confirmei a data e o local de nascimento; se precisar, consulte o currículo Lattes dele.",
      relevancia: "É a principal referência brasileira em avaliação da aprendizagem desde os anos 1980. Termos como 'pedagogia do exame' e a distinção entre verificar e avaliar vêm dele e aparecem em praticamente todo concurso de professor. Também é autor de 'Filosofia da educação', muito usado em licenciaturas."
    },
    resumo: [
      "Luckesi critica a 'pedagogia do exame': uma prática escolar centrada em provas, notas e aprovação ou reprovação, em que a preocupação com o resultado substitui a preocupação com a aprendizagem.",
      "Ele distingue verificação de avaliação. A verificação termina quando se obtém o dado (a nota); o resultado é registrado e 'congelado'. A avaliação vai além: é um juízo de qualidade sobre dados relevantes da realidade com vistas a uma tomada de decisão. Avaliar implica agir: reorientar o ensino para que o aluno aprenda.",
      "A avaliação deve ter caráter diagnóstico, a serviço de uma pedagogia preocupada com a transformação social, e não função classificatória. Usar a nota como ameaça, controle disciplinar ou instrumento de poder é uma distorção autoritária.",
      "O autor propõe avaliar a partir de mínimos necessários: o que o aluno precisa dominar para seguir aprendendo. A avaliação é inclusiva (busca trazer o aluno para dentro do processo); o exame é excludente (seleciona e classifica)."
    ],
    conceitos: [
      "Pedagogia do exame",
      "Verificação × avaliação",
      "Avaliação como juízo de qualidade + tomada de decisão",
      "Função diagnóstica × função classificatória",
      "Uso autoritário da avaliação (ameaça, disciplinamento)",
      "Mínimos necessários",
      "Avaliação inclusiva × exame excludente"
    ],
    questoes: [
      {
        q: "Para Luckesi, a diferença essencial entre verificar e avaliar a aprendizagem está no fato de que:",
        o: [
          "A verificação usa instrumentos escritos, enquanto a avaliação usa apenas a observação do professor.",
          "A avaliação é feita ao final do bimestre, e a verificação, ao longo dele.",
          "A verificação se encerra na obtenção e no registro do dado, enquanto a avaliação exige uma tomada de decisão sobre o que fazer a partir dele.",
          "A avaliação atribui nota, e a verificação atribui conceito."
        ],
        c: 2,
        e: "A verificação 'congela' o resultado. A avaliação implica uma decisão: reorientar a ação para que o aluno aprenda.",
        x: [
          "A diferença não está no instrumento. Uma prova escrita pode servir tanto para verificar quanto para avaliar; depende do que se faz com o resultado.",
          "A diferença também não está no momento. Para Luckesi, a avaliação deve acompanhar o processo, não só o fim do bimestre.",
          "Correta. Verificar é obter e registrar o dado; avaliar é julgar a qualidade desse dado e decidir o que fazer para o aluno aprender.",
          "Nota e conceito são só formas de registro. As duas cabem na verificação e não definem a avaliação."
        ]
      },
      {
        q: "A expressão 'pedagogia do exame', empregada por Luckesi, refere-se a:",
        o: [
          "Uma prática escolar em que a atenção de alunos, pais e professores se concentra nas provas, nas notas e na promoção, e não na aprendizagem.",
          "Uma proposta pedagógica que defende exames frequentes como forma de garantir a qualidade do ensino.",
          "O conjunto de técnicas para elaborar provas com alto grau de validade e confiabilidade.",
          "A preparação dos estudantes do ensino médio para exames de seleção, como o ENEM."
        ],
        c: 0,
        e: "É uma crítica: a escola passa a girar em torno do exame, e o centro deixa de ser a aprendizagem.",
        x: [
          "Correta. A expressão é uma crítica: a escola gira em torno do exame, e a aprendizagem sai do centro.",
          "Trata a expressão como proposta positiva. Luckesi usa 'pedagogia do exame' para criticar, não para defender.",
          "Elaborar provas tecnicamente boas é outro assunto (psicometria). O conceito de Luckesi é sobre a lógica da escola, não sobre a técnica do instrumento.",
          "Ele fala também da pressão dos vestibulares, mas o conceito é mais amplo: descreve a prática escolar cotidiana em todos os níveis."
        ]
      },
      {
        q: "Um professor de curso técnico integrado aplica provas sem aviso quando a turma está agitada e afirma que 'a nota é a única forma de manter a disciplina'. À luz de Luckesi, essa prática:",
        o: [
          "É adequada, pois a avaliação também tem função de controle da turma.",
          "Expressa um uso autoritário da avaliação, que deixa de servir à aprendizagem e passa a funcionar como instrumento de ameaça e disciplinamento.",
          "É aceitável desde que as provas sejam corrigidas com critérios objetivos.",
          "Caracteriza avaliação diagnóstica, porque revela o comportamento real dos alunos."
        ],
        c: 1,
        e: "Luckesi denuncia o uso da avaliação como mecanismo de poder e controle. A avaliação deve estar a serviço da aprendizagem.",
        x: [
          "Para Luckesi, controlar a turma não é função legítima da avaliação. Esse uso é exatamente o que ele critica.",
          "Correta. A nota vira ameaça e mecanismo de poder, que é o uso autoritário que Luckesi denuncia.",
          "Corrigir com critério objetivo não salva a prática. O problema está no uso da prova como punição, não na correção.",
          "Diagnóstico é sobre a aprendizagem, para decidir como ensinar. Uma prova-surpresa como castigo não diagnostica nada."
        ]
      },
      {
        q: "Segundo Luckesi, a avaliação da aprendizagem deve ter predominantemente função:",
        o: [
          "Classificatória, para hierarquizar os estudantes e orientar a seleção dos melhores.",
          "Somativa, para certificar ao final de cada etapa o que o aluno acumulou.",
          "Punitiva, para responsabilizar o aluno pelo próprio fracasso.",
          "Diagnóstica, como instrumento para reconhecer os caminhos percorridos e redirecionar a ação pedagógica."
        ],
        c: 3,
        e: "A avaliação diagnóstica permite identificar o estágio do aluno e decidir o que fazer para que ele avance.",
        x: [
          "Classificar é a lógica do exame, que Luckesi opõe à avaliação. É a pegadinha mais comum sobre ele.",
          "A certificação existe, mas não é a função principal para Luckesi. 'Somativa' é vocabulário de outra classificação, a de Bloom e Scriven.",
          "A função punitiva é criticada por ele como distorção autoritária.",
          "Correta. A avaliação diagnóstica mostra onde o aluno está e orienta a decisão sobre o que fazer."
        ]
      },
      {
        q: "Considere as afirmativas sobre a obra de Luckesi. I. A avaliação é inclusiva; o exame é seletivo e excludente. II. A média de notas expressa de forma fiel a aprendizagem do aluno. III. A avaliação deve se basear em mínimos necessários de aprendizagem. Está correto o que se afirma em:",
        o: [
          "I e III, apenas.",
          "I e II, apenas.",
          "II e III, apenas.",
          "I, II e III."
        ],
        c: 0,
        e: "A II está errada: Luckesi critica a média, que mistura resultados de momentos diferentes e pode esconder o que o aluno realmente aprendeu.",
        x: [
          "Correta. I e III são teses dele; a II é o tipo de prática que ele critica.",
          "Inclui a II, que está errada: Luckesi critica a média, porque ela mistura momentos diferentes e esconde o que o aluno sabe agora.",
          "Inclui a II e exclui a I. A oposição avaliação inclusiva × exame excludente é uma das ideias centrais do livro.",
          "A II está errada, então 'todas' não pode ser."
        ]
      }
    ]
  },

  {
    id: "veiga",
    ordem: 3,
    autor: "Ilma Passos Alencastro Veiga (org.)",
    obra: "Aula: gênese, dimensões, princípios e práticas",
    ano: "2008",
    topicos: [1, 4],
    bio: {
      quem: "Pedagoga (também formada em Educação Física), professora-pesquisadora da Universidade de Brasília (UnB) e da Universidade Federal de Uberlândia (UFU). Foi assessora da Secretaria de Educação de Goiás e do MEC.",
      origem: "Goiana. Não confirmei o ano nem a cidade de nascimento.",
      relevancia: "É a principal referência brasileira em projeto político-pedagógico (PPP) e uma das mais citadas em didática ('Repensando a didática', 'Lições de didática'). Em 2024 a bibliografia do IFSP trazia o livro dela sobre PPP; em 2026, trocou pelo livro sobre a aula. Isso conversa diretamente com a prova didática."
    },
    resumo: [
      "A coletânea trata a aula como o espaço-tempo em que se concretiza o trabalho pedagógico: uma relação intencional entre professor, aluno e conhecimento (a tríade didática), situada num contexto institucional e social.",
      "Os textos opõem duas concepções. Na concepção reprodutiva, ligada à racionalidade técnica, a aula é transmissão unilateral de conteúdo. Na concepção emancipatória, a aula é um projeto colaborativo, construído com os alunos, com problematização, diálogo e participação.",
      "A aula tem várias dimensões: técnica (planejar, organizar, avaliar), humana (relações e afetividade) e político-social (para que e para quem se ensina). A ideia de multidimensionalidade dialoga com a didática de Vera Candau.",
      "Planejar a aula significa articular objetivos, conteúdos, metodologia, recursos e avaliação, com coerência entre eles. Isso conversa diretamente com o plano de aula exigido na prova didática."
    ],
    conceitos: [
      "Aula como espaço-tempo do trabalho pedagógico",
      "Tríade didática: professor, aluno, conhecimento",
      "Aula como projeto colaborativo",
      "Concepção reprodutiva (racionalidade técnica) × emancipatória",
      "Dimensões técnica, humana e político-social",
      "Coerência entre objetivos, conteúdos, método e avaliação"
    ],
    questoes: [
      {
        q: "Na perspectiva da obra organizada por Veiga, a aula é compreendida como:",
        o: [
          "O momento em que o professor transmite o conteúdo previsto no plano de ensino.",
          "Um espaço-tempo intencionalmente organizado, em que se estabelecem relações entre professor, aluno e conhecimento.",
          "Uma unidade de tempo definida pela grade horária da instituição.",
          "Uma atividade técnica, cuja qualidade depende sobretudo dos recursos tecnológicos disponíveis."
        ],
        c: 1,
        e: "A aula é mais que tempo de grade ou transmissão: é o lugar da relação pedagógica entre professor, aluno e conhecimento, com intenção e contexto.",
        x: [
          "Reduz a aula à transmissão, que é a concepção reprodutiva criticada na obra.",
          "Correta. É a definição da obra: espaço-tempo intencional da relação professor, aluno e conhecimento.",
          "Reduz a aula a um dado administrativo. A grade diz quando a aula acontece, não o que ela é.",
          "Reduz a aula à dimensão técnica e ainda a amarra a recursos. A obra insiste nas dimensões humana e político-social."
        ]
      },
      {
        q: "Ao conceber a aula como 'projeto colaborativo', os autores defendem que:",
        o: [
          "O planejamento deve ser feito pela coordenação e executado pelo professor.",
          "O professor deve abrir mão de planejar, deixando que os alunos definam os conteúdos.",
          "Professor e alunos participam da construção do processo de ensino e aprendizagem, com diálogo, problematização e corresponsabilidade.",
          "A aula deve ser dividida em atividades individuais, para respeitar o ritmo de cada estudante."
        ],
        c: 2,
        e: "O projeto colaborativo não elimina o papel do professor: ele planeja e conduz, mas com participação ativa dos alunos.",
        x: [
          "Separar quem planeja de quem executa é a racionalidade técnica, que a obra critica.",
          "Exagera para o outro lado. Colaborar não é abrir mão de planejar: o professor continua responsável pela intencionalidade.",
          "Correta. Colaboração com diálogo e corresponsabilidade, e o professor ainda conduzindo.",
          "Individualizar tudo é o oposto de colaborar. A ideia é construção coletiva."
        ]
      },
      {
        q: "Na elaboração de um plano de aula coerente com a perspectiva da obra, é fundamental que:",
        o: [
          "Os objetivos, os conteúdos, os procedimentos metodológicos e a avaliação estejam articulados entre si.",
          "A avaliação seja definida apenas depois da aula, conforme o desempenho da turma.",
          "O conteúdo seja o único elemento obrigatório, pois os demais dependem do improviso do professor.",
          "Os recursos tecnológicos sejam escolhidos antes dos objetivos."
        ],
        c: 0,
        e: "A coerência entre os elementos do plano é um dos critérios mais cobrados, inclusive no quadro de avaliação da prova didática.",
        x: [
          "Correta. Os elementos do plano precisam conversar entre si: avaliar o que o objetivo pretende, com método adequado ao conteúdo.",
          "A avaliação faz parte do plano desde o início. Se for decidida depois, não há como garantir que ela meça o que o objetivo pretendia.",
          "Plano só com conteúdo é lista de tópicos. Objetivos, método e avaliação não são improviso.",
          "Inverte a lógica. O recurso se escolhe a serviço do objetivo, nunca o contrário."
        ]
      },
      {
        q: "A concepção de aula ligada à racionalidade técnica caracteriza-se por:",
        o: [
          "Valorizar a construção coletiva do conhecimento a partir da prática social dos alunos.",
          "Articular as dimensões humana, técnica e político-social do ensino.",
          "Priorizar o diálogo e a problematização dos conteúdos.",
          "Reduzir a aula à aplicação de técnicas e à transmissão de conteúdos, separando quem planeja de quem executa."
        ],
        c: 3,
        e: "A racionalidade técnica trata o ensino como aplicação de procedimentos, separando concepção e execução. É a concepção que a obra critica.",
        x: [
          "Descreve a concepção emancipatória, que é o oposto da racionalidade técnica.",
          "Multidimensionalidade é justamente o que a racionalidade técnica não faz: ela fica só na dimensão técnica.",
          "Diálogo e problematização são marcas da concepção emancipatória.",
          "Correta. Ensino como aplicação de procedimentos, com divisão entre concepção e execução."
        ]
      },
      {
        q: "Considerar a dimensão político-social da aula significa:",
        o: [
          "Incluir discussões partidárias no conteúdo de todas as disciplinas.",
          "Reconhecer que as escolhas sobre o que, como e para quem ensinar têm implicações sociais e não são neutras.",
          "Planejar a aula de acordo com as orientações do grêmio estudantil.",
          "Priorizar as relações afetivas entre professor e aluno em detrimento do conteúdo."
        ],
        c: 1,
        e: "A dimensão político-social trata do sentido do ensino na sociedade. Não é partidarismo; é reconhecer que ensinar envolve escolhas com consequências.",
        x: [
          "Confunde político com partidário. A dimensão política trata do sentido social do ensino, não de partidos.",
          "Correta. Ensinar envolve escolhas com consequências sociais; ignorar isso já é uma escolha.",
          "Ouvir os alunos é bom, mas a dimensão político-social não é delegar o planejamento ao grêmio.",
          "Descreve, de forma distorcida, a dimensão humana. E nenhuma dimensão deve ser priorizada 'em detrimento do conteúdo'."
        ]
      }
    ]
  },

  {
    id: "psicogeneticas",
    ordem: 4,
    autor: "Yves de La Taille, Marta Kohl de Oliveira e Heloysa Dantas",
    obra: "Piaget, Vygotsky, Wallon: teorias psicogenéticas em discussão",
    ano: "1992",
    topicos: [3, 4],
    bio: {
      quem: "Três professores da USP, cada um especialista em um dos teóricos. Yves de La Taille (Instituto de Psicologia) escreve sobre Piaget e é referência em desenvolvimento moral. Marta Kohl de Oliveira (Faculdade de Educação) escreve sobre Vygotsky e é autora de 'Vygotsky: aprendizado e desenvolvimento'. Heloysa Dantas (Faculdade de Educação) escreve sobre Wallon, de quem foi a principal divulgadora no Brasil.",
      origem: "Os teóricos estudados: Jean Piaget (1896, Neuchâtel, Suíça – 1980, Genebra), biólogo que criou a epistemologia genética. Lev Vygotsky (1896, Orsha, atual Belarus – 1934, Moscou), morto de tuberculose aos 37 anos, fundador da psicologia histórico-cultural. Henri Wallon (1879, Paris – 1962, Paris), médico e psicólogo, também político, coautor do Plano Langevin-Wallon de reforma do ensino francês.",
      relevancia: "O livro nasceu de um debate na USP e virou a introdução padrão às três teorias no Brasil. Ele é organizado por temas (fatores biológicos e sociais, afetividade e cognição), e cada autor responde do ponto de vista do seu teórico. As questões costumam pedir que você saiba qual conceito é de quem."
    },
    resumo: [
      "O livro coloca três teorias do desenvolvimento lado a lado, discutindo temas como fatores biológicos e sociais, afetividade e cognição. Cada autora ou autor apresenta um dos teóricos.",
      "Piaget (La Taille): o conhecimento é construído pela ação do sujeito sobre o objeto, por assimilação, acomodação e equilibração. Os estágios são sensório-motor, pré-operatório, operatório concreto e operatório formal. A interação social importa, sobretudo nas relações de cooperação entre iguais, que favorecem a descentração e a autonomia (em contraste com as relações de coação). Na moral, a criança passa da heteronomia para a autonomia. A afetividade é a energia da conduta; a cognição, a estrutura.",
      "Vygotsky (Oliveira): abordagem histórico-cultural. O desenvolvimento acontece pela mediação de instrumentos e signos, sobretudo a linguagem, e pela internalização do que antes foi vivido nas relações sociais. A zona de desenvolvimento proximal é a distância entre o que o sujeito faz sozinho (nível real) e o que faz com ajuda (nível potencial). A escola tem papel decisivo na formação dos conceitos científicos, que se apoiam nos conceitos espontâneos e os transformam. Afeto e intelecto formam uma unidade.",
      "Wallon (Dantas): estuda a pessoa completa, integrando os domínios afetivo, cognitivo e motor. A emoção é a primeira forma de comunicação do bebê com o meio, e é contagiosa. Os estágios (impulsivo-emocional, sensório-motor e projetivo, personalismo, categorial, puberdade e adolescência) alternam predominância afetiva e cognitiva, e o desenvolvimento é marcado por conflitos e rupturas, não por continuidade linear."
    ],
    conceitos: [
      "Piaget: assimilação, acomodação, equilibração",
      "Piaget: cooperação × coação; heteronomia → autonomia",
      "Vygotsky: mediação simbólica, internalização",
      "Vygotsky: zona de desenvolvimento proximal",
      "Vygotsky: conceitos espontâneos × científicos",
      "Wallon: pessoa completa (afetivo, cognitivo, motor)",
      "Wallon: emoção como primeira comunicação; alternância funcional"
    ],
    questoes: [
      {
        q: "Na teoria de Vygotsky, a zona de desenvolvimento proximal corresponde:",
        o: [
          "Ao conjunto de funções psicológicas que já amadureceram e permitem ao sujeito resolver problemas sozinho.",
          "Ao período da vida em que a aprendizagem escolar é mais eficiente.",
          "À distância entre o nível de desenvolvimento real, que o sujeito alcança sozinho, e o nível potencial, que alcança com a ajuda de outra pessoa mais experiente.",
          "Ao estágio em que a criança domina as operações concretas."
        ],
        c: 2,
        e: "A ZDP é onde o ensino deve atuar: naquilo que o aluno ainda não faz sozinho, mas consegue fazer com mediação.",
        x: [
          "Isso é o nível de desenvolvimento REAL, uma das pontas da ZDP, não a zona em si.",
          "A ZDP não é uma fase da vida. Ela existe em qualquer idade e para cada conteúdo.",
          "Correta. É a distância entre o que o sujeito faz sozinho e o que faz com ajuda; é ali que o ensino deve atuar.",
          "'Operações concretas' é um estágio de Piaget. A alternativa mistura os dois autores, uma pegadinha clássica."
        ]
      },
      {
        q: "Segundo a leitura de La Taille sobre Piaget, as interações sociais que mais favorecem o desenvolvimento intelectual e moral são:",
        o: [
          "As relações de cooperação entre pares, que exigem descentração, reciprocidade e coordenação de pontos de vista.",
          "As relações de coação, nas quais o adulto impõe regras que a criança deve respeitar.",
          "As relações de competição, que estimulam o desempenho individual.",
          "As relações familiares, por serem afetivamente mais intensas."
        ],
        c: 0,
        e: "Para Piaget, a coação reforça a heteronomia; a cooperação entre iguais favorece a autonomia e a descentração.",
        x: [
          "Correta. A cooperação entre iguais obriga a coordenar pontos de vista, e isso leva à autonomia.",
          "Coação é o oposto. Ela mantém a criança na heteronomia, obedecendo regras que vêm de fora.",
          "Competição não é uma categoria da análise de Piaget. O par que ele usa é coação × cooperação.",
          "O critério de Piaget é o tipo de relação (simétrica ou assimétrica), não a intensidade afetiva."
        ]
      },
      {
        q: "Para Wallon, conforme apresentado por Dantas, é correto afirmar que:",
        o: [
          "O desenvolvimento é linear e contínuo, com acúmulo progressivo de capacidades cognitivas.",
          "A afetividade é um obstáculo ao desenvolvimento da inteligência e deve ser controlada pela escola.",
          "Os aspectos motores são irrelevantes para a compreensão do psiquismo infantil.",
          "A emoção é a primeira forma de comunicação do ser humano com o meio, e o desenvolvimento alterna fases de predominância afetiva e cognitiva."
        ],
        c: 3,
        e: "Wallon vê o desenvolvimento como descontínuo e conflituoso, com alternância entre predominância afetiva e cognitiva, integrando também o motor.",
        x: [
          "Wallon vê o desenvolvimento como descontínuo, com crises e rupturas entre os estágios.",
          "Para Wallon, afetividade e inteligência se alternam e se alimentam. Não são inimigas.",
          "O motor é um dos três domínios da 'pessoa completa' de Wallon, junto com o afetivo e o cognitivo.",
          "Correta. Emoção como primeira comunicação e alternância funcional entre afetivo e cognitivo são as duas ideias-chave de Wallon."
        ]
      },
      {
        q: "Sobre a formação de conceitos em Vygotsky, assinale a alternativa correta.",
        o: [
          "Os conceitos científicos surgem espontaneamente da experiência cotidiana, sem necessidade de ensino.",
          "Os conceitos científicos se desenvolvem por meio do ensino sistematizado e se relacionam com os conceitos espontâneos, transformando-os.",
          "Os conceitos espontâneos devem ser eliminados pela escola, por serem incorretos.",
          "A formação de conceitos depende apenas da maturação biológica."
        ],
        c: 1,
        e: "Os dois tipos de conceito se influenciam: os espontâneos dão base concreta, e os científicos, aprendidos na escola, dão sistematização e consciência.",
        x: [
          "Troca os dois tipos. Os conceitos que surgem da experiência cotidiana são os ESPONTÂNEOS; os científicos dependem do ensino.",
          "Correta. Os científicos vêm do ensino e se apoiam nos espontâneos, transformando-os.",
          "Os espontâneos não são descartados: são a base em que os científicos se apoiam.",
          "Vygotsky dá peso central ao social e à cultura. 'Apenas maturação biológica' contraria a teoria inteira."
        ]
      },
      {
        q: "Associe os conceitos aos teóricos. I. Equilibração. II. Mediação simbólica. III. Estágio impulsivo-emocional. ( ) Wallon ( ) Piaget ( ) Vygotsky",
        o: [
          "I, II, III.",
          "II, III, I.",
          "III, I, II.",
          "III, II, I."
        ],
        c: 2,
        e: "Wallon: estágio impulsivo-emocional (III). Piaget: equilibração (I). Vygotsky: mediação simbólica (II).",
        x: [
          "Atribui equilibração a Wallon. Equilibração é o motor do desenvolvimento em Piaget.",
          "Atribui mediação simbólica a Wallon. Mediação por signos é o conceito central de Vygotsky.",
          "Correta. Wallon: impulsivo-emocional (III). Piaget: equilibração (I). Vygotsky: mediação simbólica (II).",
          "Acerta Wallon, mas troca Piaget e Vygotsky."
        ]
      }
    ]
  },

  {
    id: "frigotto",
    ordem: 5,
    autor: "Gaudêncio Frigotto (org.)",
    obra: "Institutos Federais de Educação, Ciência e Tecnologia: relação com o ensino médio integrado e o projeto societário de desenvolvimento",
    ano: "2018",
    topicos: [1, 2, 3],
    bio: {
      quem: "Educador e economista da educação, professor emérito da Universidade Federal Fluminense (UFF, título de 2023) e professor aposentado da UERJ. Fez graduação em Filosofia e Pedagogia (Unijuí), mestrado na FGV-RJ e doutorado na PUC-SP.",
      origem: "Nasceu em Antônio Prado (RS), numa família de camponeses. Não confirmei o ano de nascimento.",
      relevancia: "É a principal referência brasileira em trabalho e educação. 'A produtividade da escola improdutiva' (1984) é um clássico da área. Junto com Maria Ciavatta e Marise Ramos, foi uma das vozes do debate que levou ao Decreto 5.154/2004 e à defesa do ensino médio integrado, que é o modelo central dos IFs. Para quem vai ser professor de IF, é leitura de identidade da instituição."
    },
    resumo: [
      "O livro reúne uma pesquisa em rede sobre os Institutos Federais, criados pela Lei 11.892/2008, e discute se eles cumprem a função de oferecer ensino médio integrado e de contribuir para um projeto de desenvolvimento.",
      "O conceito de fundo é a dualidade estrutural da educação brasileira: escola propedêutica (de formação geral, preparatória para o ensino superior) para as elites e formação profissional estreita para os filhos dos trabalhadores. O ensino médio integrado é visto como 'travessia' para superar essa dualidade, rumo à formação omnilateral (humana integral) e politécnica, tendo o trabalho como princípio educativo e integrando trabalho, ciência, cultura e tecnologia.",
      "Histórico que costuma cair: o Decreto 2.208/1997 separou o ensino médio da educação profissional; o Decreto 5.154/2004 restabeleceu a possibilidade do ensino integrado; a Lei 11.892/2008 exige que os IFs destinem no mínimo 50% das vagas à educação profissional técnica de nível médio, prioritariamente integrada, e no mínimo 20% às licenciaturas e à formação de professores. Os autores criticam a reforma do ensino médio (Lei 13.415/2017) como ameaça ao integrado.",
      "Os autores mostram que a expansão e a interiorização dos IFs abrem possibilidades, mas o sentido delas depende do projeto de sociedade em disputa: formação para o mercado ou formação humana integral, num país de capitalismo dependente."
    ],
    conceitos: [
      "Dualidade estrutural",
      "Formação omnilateral × unilateral",
      "Trabalho como princípio educativo",
      "Politecnia",
      "Integração: trabalho, ciência, cultura e tecnologia",
      "Decreto 2.208/1997 → Decreto 5.154/2004 → Lei 11.892/2008",
      "Projeto societário e capitalismo dependente"
    ],
    questoes: [
      {
        q: "De acordo com a Lei 11.892/2008, discutida na obra organizada por Frigotto, os Institutos Federais devem garantir, no mínimo:",
        o: [
          "30% das vagas para a educação profissional técnica de nível médio e 20% para cursos de licenciatura e formação de professores.",
          "50% das vagas para a educação profissional técnica de nível médio, prioritariamente integrada, e 20% para licenciaturas e programas de formação pedagógica.",
          "50% das vagas para cursos superiores de tecnologia e 10% para licenciaturas.",
          "40% das vagas para o ensino médio integrado e 30% para a pós-graduação."
        ],
        c: 1,
        e: "Art. 8º da Lei 11.892/2008: mínimo de 50% para técnico de nível médio (prioritariamente integrado) e 20% para licenciaturas e formação de professores. Cai tanto em pedagogia quanto em legislação.",
        x: [
          "Acerta os 20% das licenciaturas, mas o mínimo do técnico de nível médio é 50%, não 30%.",
          "Correta. É o art. 8º da Lei 11.892/2008: 50% técnico de nível médio, prioritariamente integrado, e 20% licenciaturas e formação de professores.",
          "Os 50% são do técnico de NÍVEL MÉDIO, não dos tecnólogos. E o mínimo das licenciaturas é 20%.",
          "Os percentuais estão errados e a lei não fixa mínimo para a pós-graduação."
        ]
      },
      {
        q: "Na perspectiva adotada pelos autores, o ensino médio integrado deve ser compreendido como:",
        o: [
          "A soma de disciplinas técnicas ao currículo do ensino médio regular, cursadas em turnos diferentes.",
          "Uma formação voltada exclusivamente às demandas imediatas do mercado de trabalho local.",
          "Uma formação humana integral, que tem o trabalho como princípio educativo e articula trabalho, ciência, cultura e tecnologia.",
          "Um curso preparatório para o vestibular com certificação técnica opcional."
        ],
        c: 2,
        e: "Integração não é justaposição. É uma concepção de formação omnilateral, com o trabalho como princípio educativo.",
        x: [
          "Descreve justaposição, não integração. Somar disciplinas em turnos separados é exatamente o que os autores criticam.",
          "Formar só para o mercado imediato é formação unilateral. É o oposto da proposta.",
          "Correta. Formação omnilateral, com o trabalho como princípio educativo, integrando trabalho, ciência, cultura e tecnologia.",
          "Reduz o integrado à lógica propedêutica (preparar para o vestibular), que é um dos lados da dualidade que ele quer superar."
        ]
      },
      {
        q: "A expressão 'dualidade estrutural', recorrente na obra, refere-se:",
        o: [
          "À separação histórica entre uma escola de formação geral e propedêutica para as elites e uma formação profissional instrumental para os filhos da classe trabalhadora.",
          "À coexistência de escolas públicas e privadas no sistema educacional brasileiro.",
          "À divisão do ensino médio em formação geral básica e itinerários formativos.",
          "À existência de duas redes de ensino profissional: a federal e a estadual."
        ],
        c: 0,
        e: "A dualidade estrutural é a separação de classe entre quem estuda para dirigir e quem é formado para executar. O integrado busca superá-la.",
        x: [
          "Correta. É a separação de classe entre formar para dirigir (propedêutica) e formar para executar (profissional estreita).",
          "Público × privado é outra discussão. A dualidade é sobre o TIPO de formação oferecida a cada classe, e existe dentro da própria rede pública.",
          "Descreve a estrutura criada pela reforma de 2017. Os autores até a veem como reforço da dualidade, mas não é a definição do conceito.",
          "Redes federal e estadual são uma divisão administrativa, não o conceito."
        ]
      },
      {
        q: "Sobre a trajetória normativa da relação entre ensino médio e educação profissional, assinale a alternativa correta.",
        o: [
          "O Decreto 5.154/2004 proibiu a oferta integrada, que foi restabelecida pelo Decreto 2.208/1997.",
          "A Lei 11.892/2008 extinguiu a possibilidade de oferta concomitante e subsequente.",
          "A integração entre ensino médio e educação profissional sempre foi obrigatória desde a LDB de 1996.",
          "O Decreto 2.208/1997 separou o ensino médio da educação profissional, e o Decreto 5.154/2004 restabeleceu a possibilidade da forma integrada."
        ],
        c: 3,
        e: "A ordem é: 2.208/1997 separa; 5.154/2004 recupera o integrado; Lei 11.741/2008 incorpora isso à LDB; Lei 11.892/2008 cria os IFs com prioridade ao integrado.",
        x: [
          "Inverte os decretos e a cronologia: o de 1997 não pode restabelecer algo proibido em 2004.",
          "A Lei 11.892/2008 dá prioridade ao integrado, mas não extingue as formas concomitante e subsequente, que os IFs continuam oferecendo.",
          "Nunca foi obrigatória. Pelo Decreto 2.208/1997, a forma integrada chegou a ser vedada.",
          "Correta. 1997 separa; 2004 restabelece a forma integrada."
        ]
      },
      {
        q: "Em relação ao papel dos Institutos Federais no desenvolvimento, a obra sustenta que:",
        o: [
          "Os IFs são instituições tecnicamente neutras, cuja função é atender às necessidades das empresas da região.",
          "A expansão e a interiorização dos IFs abrem possibilidades de desenvolvimento, mas seu sentido depende do projeto de sociedade em disputa, entre a formação para o mercado e a formação humana integral.",
          "Os IFs já superaram a dualidade estrutural, pois todos os cursos técnicos são integrados.",
          "A reforma do ensino médio de 2017 fortaleceu a proposta de formação integrada dos IFs."
        ],
        c: 1,
        e: "O livro trata os IFs como espaço de disputa entre projetos societários e vê a reforma de 2017 como ameaça ao integrado.",
        x: [
          "A obra nega a neutralidade. Atender só às empresas é um dos projetos em disputa, não a função dada.",
          "Correta. Os IFs são vistos como espaço de disputa entre projetos de sociedade.",
          "Nem todos os cursos são integrados, e a pesquisa mostra que a dualidade persiste. 'Já superaram' é otimismo que a obra não sustenta.",
          "Os autores veem a reforma de 2017 como ameaça ao integrado, não como fortalecimento."
        ]
      }
    ]
  },

  {
    id: "brandao",
    ordem: 6,
    autor: "Carlos Rodrigues Brandão",
    obra: "O que é educação popular",
    ano: "1986",
    topicos: [1, 2, 3],
    bio: {
      quem: "Antropólogo, educador e escritor, professor da Unicamp desde 1976 e professor emérito da Unicamp e da UFU. Formou-se em Psicologia (PUC-Rio), fez mestrado em Antropologia (UnB) e doutorado em Ciências Sociais (USP). Era amigo de Paulo Freire.",
      origem: "Nasceu em 1940, no Rio de Janeiro. Morreu em 11 de julho de 2023, aos 83 anos, em Campinas (SP).",
      relevancia: "Militou na educação popular desde os anos 1960 e escreveu mais de 70 livros. Os pequenos volumes que publicou na coleção 'Primeiros Passos' (Brasiliense), como 'O que é educação', 'O que é educação popular' e 'O que é o método Paulo Freire', foram a porta de entrada de gerações de estudantes. A frase muito atribuída a Freire, de que a educação muda as pessoas e as pessoas mudam o mundo, é na verdade dele."
    },
    resumo: [
      "Brandão parte de uma ideia ampla de educação: ela existe antes e fora da escola, nas práticas sociais pelas quais um grupo transmite e recria seu saber. A escola é apenas uma das formas de educação.",
      "Educação popular não é sinônimo de educação para pobres, nem de ensino supletivo ou compensatório para adultos. É uma prática político-pedagógica feita com as classes populares, a partir dos seus saberes e da sua realidade, voltada à conscientização e à transformação social.",
      "Historicamente, a educação popular ganha força no início dos anos 1960, com o Movimento de Educação de Base (MEB), os Centros Populares de Cultura (CPCs) da UNE, o Movimento de Cultura Popular (MCP) de Recife e o método de alfabetização de Paulo Freire. Após o golpe de 1964, esses movimentos são reprimidos, e a alfabetização de adultos passa ao MOBRAL, numa perspectiva funcional e despolitizada. Nos anos 1970 e 1980, a educação popular ressurge ligada aos movimentos sociais, às comunidades eclesiais de base e a organizações não governamentais.",
      "Conexão com o IF: PROEJA, cursos FIC e projetos de extensão com a comunidade, nos quais partir do saber do aluno trabalhador e dialogar com ele é essencial."
    ],
    conceitos: [
      "Educação além da escola (prática social)",
      "Educação popular ≠ educação para pobres / supletiva",
      "Saber popular, diálogo, conscientização",
      "Anos 1960: MEB, CPCs, MCP, Paulo Freire",
      "Pós-1964: repressão e MOBRAL",
      "Anos 1970-80: movimentos sociais e CEBs"
    ],
    questoes: [
      {
        q: "Para Carlos Rodrigues Brandão, a educação popular deve ser compreendida como:",
        o: [
          "Uma prática político-pedagógica construída com as classes populares, a partir de seus saberes, orientada à transformação social.",
          "Uma modalidade de ensino supletivo destinada a jovens e adultos que não concluíram a escolarização.",
          "A educação informal transmitida na família, sem intencionalidade pedagógica ou política.",
          "Um programa estatal de alfabetização em massa voltado à qualificação da mão de obra."
        ],
        c: 0,
        e: "Brandão insiste que educação popular não se define pelo público (os pobres) nem pela modalidade (supletivo), e sim pelo projeto político-pedagógico com o povo.",
        x: [
          "Correta. É feita COM as classes populares, a partir dos seus saberes, com projeto de transformação.",
          "É a confusão que Brandão desfaz logo no início: educação popular não é sinônimo de supletivo.",
          "Educação popular é intencional e política. A alternativa descreve a educação difusa do dia a dia, que é outra coisa.",
          "Descreve algo como o MOBRAL, que Brandão apresenta como o oposto despolitizado da educação popular."
        ]
      },
      {
        q: "São experiências associadas ao movimento de educação popular no início da década de 1960:",
        o: [
          "MOBRAL e Projeto Minerva.",
          "Manifesto dos Pioneiros da Educação Nova e Escola Nova.",
          "SENAI e SENAC.",
          "Movimento de Educação de Base (MEB), Centros Populares de Cultura (CPCs) da UNE, Movimento de Cultura Popular (MCP) e o método de alfabetização de Paulo Freire."
        ],
        c: 3,
        e: "O MOBRAL e o Projeto Minerva são do período militar. O Manifesto é de 1932. SENAI e SENAC são dos anos 1940 e voltados à formação profissional.",
        x: [
          "Os dois são do período militar, depois de 1964. O MOBRAL substituiu as experiências de educação popular.",
          "O Manifesto é de 1932 e a Escola Nova é um movimento de renovação pedagógica, não de educação popular.",
          "SENAI (1942) e SENAC (1946) são o 'Sistema S', de formação profissional para a indústria e o comércio.",
          "Correta. São os quatro marcos do início dos anos 1960 citados por Brandão."
        ]
      },
      {
        q: "Segundo Brandão, é correto afirmar que:",
        o: [
          "A educação só se realiza plenamente dentro da instituição escolar.",
          "A educação acontece em múltiplas práticas sociais, e a escola é apenas uma de suas formas.",
          "O saber popular é senso comum e deve ser substituído pelo saber científico.",
          "A educação é neutra e deve se afastar das questões políticas."
        ],
        c: 1,
        e: "A abertura do livro defende que não há uma forma única de educação. Ela acontece em casa, na rua, no trabalho, na comunidade.",
        x: [
          "É o contrário da tese de abertura dele: a educação existe muito antes da escola e fora dela.",
          "Correta. A escola é uma forma entre várias; a educação está em todas as práticas sociais.",
          "Brandão valoriza o saber popular como ponto de partida do diálogo, não como algo a ser substituído.",
          "Para Brandão, a educação é sempre política. A pretensa neutralidade também é uma posição."
        ]
      },
      {
        q: "Um docente de um curso PROEJA no IF pretende planejar suas aulas com base nos princípios da educação popular. Uma ação coerente seria:",
        o: [
          "Reduzir o conteúdo do curso regular, considerando a menor capacidade de aprendizagem dos adultos.",
          "Priorizar a rapidez da certificação, reduzindo atividades de discussão.",
          "Partir da experiência de vida e de trabalho dos estudantes, estabelecendo diálogo entre esses saberes e o conhecimento técnico-científico.",
          "Tratar os saberes dos estudantes como equívocos a serem corrigidos."
        ],
        c: 2,
        e: "Diálogo e valorização do saber do educando são centrais. Adultos trabalhadores não têm 'menor capacidade'; têm outra trajetória.",
        x: [
          "Parte de um preconceito. Adultos não aprendem menos; têm outras experiências, e é delas que se parte.",
          "Atalho de certificação é a lógica compensatória que Brandão critica. A discussão é o centro, não um extra.",
          "Correta. Parte da experiência do estudante e dialoga com o conhecimento técnico-científico.",
          "Tratar o saber do aluno como erro é a 'educação bancária' que a educação popular combate."
        ]
      },
      {
        q: "Sobre o percurso histórico da educação popular no Brasil descrito por Brandão, assinale a alternativa correta.",
        o: [
          "Após 1964, os movimentos de educação popular foram ampliados pelo governo militar.",
          "Após 1964, as experiências de educação popular foram reprimidas, e a alfabetização de adultos passou a ser conduzida pelo MOBRAL, numa perspectiva funcional; nas décadas seguintes, a educação popular ressurgiu ligada aos movimentos sociais.",
          "A educação popular surgiu com a LDB de 1996, que criou a modalidade EJA.",
          "O MOBRAL incorporou integralmente o método Paulo Freire e sua dimensão política."
        ],
        c: 1,
        e: "O MOBRAL (criado em 1967) aproveitou aspectos técnicos da alfabetização, mas esvaziou a dimensão política e conscientizadora.",
        x: [
          "Foram reprimidos, não ampliados. Freire, por exemplo, foi preso e exilado.",
          "Correta. Repressão depois de 1964, MOBRAL funcional e ressurgimento nos movimentos sociais.",
          "A educação popular é dos anos 1960. A LDB de 1996 trata da EJA como modalidade, mas não a criou.",
          "O MOBRAL usou aspectos técnicos, como palavras geradoras, mas esvaziou justamente a dimensão política."
        ]
      }
    ]
  },

  {
    id: "antirracista-mec",
    ordem: 7,
    autor: "Brasil. MEC/SECAD",
    obra: "Educação anti-racista: caminhos abertos pela Lei Federal nº 10.639/03",
    ano: "2005",
    topicos: [5, 6],
    bio: {
      quem: "Não é obra de um autor só. É uma coletânea do MEC publicada pela SECAD (Secretaria de Educação Continuada, Alfabetização e Diversidade, criada em 2004 e hoje chamada SECADI), na coleção 'Educação para Todos'. Reúne textos de pesquisadores e militantes da educação antirracista.",
      origem: "Saiu em 2005, dois anos depois da Lei 10.639, sancionada em 9 de janeiro de 2003, no início do primeiro governo Lula. A lei atendeu a uma reivindicação histórica do movimento negro.",
      relevancia: "Foi um dos primeiros materiais oficiais para orientar as escolas na aplicação da lei. Para a prova, o que importa é a lei em si (arts. 26-A e 79-B da LDB), as normas que a regulamentam e os conceitos que o livro discute, como o mito da democracia racial."
    },
    resumo: [
      "Publicação do MEC que discute a implementação da Lei 10.639/2003. A lei incluiu na LDB o art. 26-A, que tornou obrigatório o ensino de história e cultura afro-brasileira nos estabelecimentos de ensino fundamental e médio, públicos e privados, e o art. 79-B, que incluiu o 20 de novembro (Dia Nacional da Consciência Negra) no calendário escolar.",
      "O conteúdo inclui a história da África e dos africanos, a luta dos negros no Brasil, a cultura negra brasileira e o negro na formação da sociedade nacional. Ele deve ser trabalhado em todo o currículo, especialmente em Arte, Literatura e História brasileiras. A Lei 11.645/2008 ampliou a obrigatoriedade para a história e cultura dos povos indígenas.",
      "As bases normativas são o Parecer CNE/CP 3/2004 e a Resolução CNE/CP 1/2004 (Diretrizes Curriculares Nacionais para a Educação das Relações Étnico-Raciais).",
      "Temas recorrentes: o mito da democracia racial (a ideia de convivência harmoniosa que esconde desigualdades), o racismo na escola (estereótipos em livros didáticos, silenciamento, apelidos tratados como brincadeira), a invisibilidade da população negra no currículo e o papel do professor na valorização da identidade negra."
    ],
    conceitos: [
      "Lei 10.639/2003: art. 26-A e art. 79-B da LDB",
      "Lei 11.645/2008: inclui a temática indígena",
      "Parecer CNE/CP 3/2004 e Resolução CNE/CP 1/2004",
      "Mito da democracia racial",
      "Racismo na escola: silenciamento, estereótipos",
      "Conteúdo em todo o currículo (não só datas)"
    ],
    questoes: [
      {
        q: "A Lei 10.639/2003 alterou a LDB para estabelecer:",
        o: [
          "A obrigatoriedade do ensino de história e cultura afro-brasileira nos estabelecimentos de ensino fundamental e médio, oficiais e particulares.",
          "A obrigatoriedade do ensino de história e cultura afro-brasileira apenas nas escolas públicas.",
          "A criação de uma disciplina específica de Estudos Africanos no ensino médio.",
          "A obrigatoriedade do tema apenas nos cursos de licenciatura."
        ],
        c: 0,
        e: "O art. 26-A vale para o fundamental e o médio, públicos e privados. Não cria disciplina própria: o conteúdo atravessa o currículo.",
        x: [
          "Correta. É o texto do art. 26-A: fundamental e médio, oficiais e particulares.",
          "A lei vale também para as particulares. 'Apenas' é a palavra que derruba a alternativa.",
          "A lei não cria disciplina: o conteúdo atravessa o currículo, com destaque para Arte, Literatura e História.",
          "O art. 26-A trata da educação básica (fundamental e médio), não das licenciaturas."
        ]
      },
      {
        q: "A mesma lei incluiu no calendário escolar o:",
        o: [
          "13 de maio, Dia da Abolição da Escravatura.",
          "21 de março, Dia Internacional pela Eliminação da Discriminação Racial.",
          "20 de novembro, Dia Nacional da Consciência Negra.",
          "19 de abril, Dia dos Povos Indígenas."
        ],
        c: 2,
        e: "Art. 79-B da LDB. O 20 de novembro marca a morte de Zumbi dos Palmares (e desde 2023 é feriado nacional, pela Lei 14.759/2023).",
        x: [
          "O movimento negro critica o 13 de maio por celebrar uma abolição 'concedida', sem reparação. A data escolhida foi justamente outra.",
          "É uma data da ONU (lembra o massacre de Sharpeville, de 1960), mas não foi a incluída pela lei.",
          "Correta. É o art. 79-B da LDB, a data da morte de Zumbi dos Palmares.",
          "É uma data da temática indígena, que só entrou no art. 26-A em 2008, e não por esse artigo."
        ]
      },
      {
        q: "O chamado 'mito da democracia racial', discutido na publicação, consiste:",
        o: [
          "Na constatação de que o Brasil eliminou as desigualdades raciais após a abolição.",
          "Na crença de que no Brasil há convivência harmoniosa entre os grupos raciais e ausência de racismo, ideia que oculta desigualdades e dificulta o seu enfrentamento.",
          "Na política oficial de cotas raciais adotada após a Constituição de 1988.",
          "Na defesa de que a escola deve tratar todos os alunos de forma idêntica, sem considerar a questão racial."
        ],
        c: 1,
        e: "O mito nega a existência do racismo e, por isso, dificulta ações para combatê-lo.",
        x: [
          "'Constatação' trata o mito como fato. O ponto é o contrário: as desigualdades persistem e o mito as esconde.",
          "Correta. A crença na harmonia racial oculta o racismo e trava o enfrentamento.",
          "Cotas são política de ação afirmativa, que nasce justamente da crítica ao mito.",
          "Descreve uma consequência prática do mito (a 'cegueira de cor'), não o mito em si. A alternativa B é a definição completa."
        ]
      },
      {
        q: "A Lei 11.645/2008, em relação à Lei 10.639/2003:",
        o: [
          "Revogou a obrigatoriedade do ensino de história e cultura afro-brasileira.",
          "Tornou facultativo o ensino da temática nas escolas particulares.",
          "Estendeu a obrigatoriedade ao ensino superior.",
          "Ampliou a obrigatoriedade para incluir a história e cultura dos povos indígenas."
        ],
        c: 3,
        e: "O art. 26-A passou a tratar de 'história e cultura afro-brasileira e indígena'.",
        x: [
          "Não revogou: manteve o conteúdo afro-brasileiro e somou o indígena.",
          "As particulares continuam obrigadas.",
          "O art. 26-A continua restrito ao fundamental e ao médio.",
          "Correta. O art. 26-A passou a falar em cultura 'afro-brasileira e indígena'."
        ]
      },
      {
        q: "Segundo a perspectiva da publicação, a implementação da Lei 10.639/2003 na escola deve:",
        o: [
          "Concentrar as atividades na semana do 20 de novembro, para dar visibilidade ao tema.",
          "Ocorrer ao longo de todo o currículo e do ano letivo, de forma contínua, especialmente em Arte, Literatura e História, mas não só nelas.",
          "Limitar-se ao estudo do período da escravidão.",
          "Evitar o tema em turmas com conflitos raciais, para não acirrar tensões."
        ],
        c: 1,
        e: "O §2º do art. 26-A diz que os conteúdos devem ser ministrados no âmbito de todo o currículo. Reduzir o tema a uma data é a crítica clássica.",
        x: [
          "Concentrar tudo numa data é a crítica clássica: a 'pedagogia do evento', na expressão de Bárbara Carine.",
          "Correta. É o que diz o §2º do art. 26-A: o conteúdo é ministrado em todo o currículo.",
          "A lei inclui história da África, cultura, luta e contribuição do negro, não só a escravidão. Reduzir o tema à escravidão reforça estereótipos.",
          "É justamente onde há conflito que o tema mais precisa ser trabalhado. Evitar é silenciamento."
        ]
      }
    ]
  },

  {
    id: "pinheiro",
    ordem: 8,
    autor: "Bárbara Carine Soares Pinheiro",
    obra: "Como ser um educador antirracista",
    ano: "2023",
    topicos: [5, 6],
    bio: {
      quem: "Química e educadora, professora do Instituto de Química da Universidade Federal da Bahia (UFBA). Formou-se na UFBA em 2010, fez mestrado em 2012 e doutorado em 2014, na área de ensino de ciências. Também tem forte presença em redes sociais como divulgadora ('Uma intelectual diferentona').",
      origem: "Nasceu em 1987, na periferia de Salvador (BA).",
      relevancia: "Em 2017, cofundou em Salvador a Escola Afro-Brasileira Maria Felipa, apresentada como a primeira escola afro-brasileira do país; hoje a rede tem unidade também no Rio. É a autora mais recente da bibliografia. Como o livro é de 2023, há pouquíssimas questões dela em bancos de prova, então as daqui são a principal fonte de treino. Ela vem de uma área de exatas, o que ajuda a fazer pontes com Informática."
    },
    resumo: [
      "A autora é química, professora da UFBA e fundadora da Escola Afro-Brasileira Maria Felipa, em Salvador. O livro é um guia prático para educadores.",
      "Ponto de partida: o racismo é estrutural. Ele organiza instituições, relações econômicas e o próprio conhecimento, e não se reduz a atos individuais. Por isso, não basta 'não ser racista': o educador antirracista age ativamente contra o racismo, inclusive revendo os próprios privilégios (branquitude) e o letramento racial.",
      "A autora critica o currículo eurocentrado, que apresenta a ciência e a tecnologia como produção exclusivamente europeia e apaga as contribuições africanas, afro-diaspóricas e indígenas (matemática e astronomia do Egito antigo, metalurgia africana etc.). Propõe descolonizar o currículo e garantir representatividade.",
      "Ela critica a 'pedagogia do evento': tratar a questão racial só em datas comemorativas, como o 20 de novembro. A Lei 10.639/2003 deve ser cumprida de forma contínua e transversal.",
      "Conexão com Informática: pessoas negras na história da computação, vieses raciais em algoritmos (reconhecimento facial, sistemas de decisão automatizada) e diversidade em tecnologia."
    ],
    conceitos: [
      "Racismo estrutural",
      "Antirracismo como prática ativa",
      "Branquitude e letramento racial",
      "Currículo eurocentrado × descolonização do currículo",
      "Crítica à 'pedagogia do evento'",
      "Representatividade e produção de conhecimento africana"
    ],
    questoes: [
      {
        q: "Para Bárbara Carine Soares Pinheiro, ser um educador antirracista significa:",
        o: [
          "Evitar atitudes discriminatórias em sala de aula.",
          "Tratar todos os estudantes da mesma forma, sem distinção de cor ou raça.",
          "Assumir uma postura ativa de enfrentamento do racismo nas práticas pedagógicas, no currículo e nas relações escolares.",
          "Abordar a questão racial sempre que um estudante relatar uma situação de discriminação."
        ],
        c: 2,
        e: "Não basta não discriminar ou ser 'neutro'. O antirracismo exige ação deliberada e contínua.",
        x: [
          "É o mínimo, ser 'não racista'. A autora diferencia isso de ser antirracista, que exige ação.",
          "Parece justo, mas é a 'neutralidade' que ignora desigualdades reais. Num contexto desigual, tratar igual mantém a desigualdade.",
          "Correta. É uma postura ativa e contínua, no currículo e nas relações.",
          "É reativo: só age quando há denúncia. O antirracismo é proativo e está no planejamento."
        ]
      },
      {
        q: "A crítica da autora à chamada 'pedagogia do evento' dirige-se à prática de:",
        o: [
          "Restringir a abordagem das relações étnico-raciais a datas comemorativas, como o 20 de novembro, sem continuidade no currículo.",
          "Organizar feiras de ciências com temas africanos.",
          "Convidar lideranças do movimento negro para palestras na escola.",
          "Utilizar eventos culturais como recurso didático em qualquer disciplina."
        ],
        c: 0,
        e: "Eventos não são o problema; o problema é quando eles são a única ação, sem mudança no currículo e nas práticas.",
        x: [
          "Correta. O problema é o tema aparecer só na data e sumir no resto do ano.",
          "Uma feira com temas africanos pode ser ótima. A crítica não é ao evento em si, mas a reduzir tudo a ele.",
          "Convidar lideranças é bem-vindo. Isolado, vira evento; integrado ao currículo, não.",
          "Usar eventos como recurso didático é legítimo. A palavra que muda tudo na crítica é 'restringir'."
        ]
      },
      {
        q: "Ao discutir o currículo das ciências, a autora defende que:",
        o: [
          "A ciência é universal e neutra, por isso não cabe discutir a origem dos conhecimentos.",
          "O currículo deve substituir os conteúdos europeus por conteúdos exclusivamente africanos.",
          "Os conteúdos científicos devem ser mantidos e as questões raciais tratadas apenas nas Ciências Humanas.",
          "O currículo eurocentrado apaga as contribuições africanas, afro-diaspóricas e indígenas à ciência e à tecnologia, e é preciso torná-las visíveis."
        ],
        c: 3,
        e: "A proposta é descolonizar e ampliar, não substituir. E isso vale para as áreas técnicas e de exatas, não só para as Humanas.",
        x: [
          "A autora questiona essa suposta neutralidade: a forma de contar a história da ciência apaga certos povos.",
          "A proposta não é substituir, e sim ampliar e tornar visível. 'Exclusivamente' é o exagero que derruba a alternativa.",
          "Ela é química e defende o tema justamente nas exatas. Deixar só para as Humanas é o que ela critica.",
          "Correta. Descolonizar o currículo é tornar visíveis as contribuições que foram apagadas."
        ]
      },
      {
        q: "O conceito de racismo estrutural, mobilizado pela autora, indica que o racismo:",
        o: [
          "Manifesta-se apenas em atos individuais de preconceito.",
          "Integra a organização econômica, política, institucional e simbólica da sociedade, reproduzindo desigualdades mesmo sem intenção individual explícita.",
          "Foi superado com a criminalização do racismo pela Constituição de 1988.",
          "Restringe-se às relações entre grupos sociais de classes diferentes."
        ],
        c: 1,
        e: "Estrutural significa que está nas regras, instituições e práticas normais da sociedade, não só em indivíduos.",
        x: [
          "É a visão individualista que o conceito de racismo estrutural justamente supera.",
          "Correta. Está nas regras e nas instituições, e funciona mesmo sem intenção individual.",
          "A criminalização (art. 5º, XLII, da CF) não acabou com o racismo estrutural, que persiste nos indicadores sociais.",
          "Reduz raça a classe. Os dois se cruzam, mas o racismo atravessa todas as classes."
        ]
      },
      {
        q: "Um professor de Informática de um curso técnico integrado quer incorporar uma perspectiva antirracista à disciplina. Uma ação coerente com a obra seria:",
        o: [
          "Dedicar uma aula em novembro para falar sobre racismo, mantendo o restante do plano inalterado.",
          "Evitar o tema, por não ter relação com os conteúdos técnicos da área.",
          "Integrar ao conteúdo discussões como vieses raciais em algoritmos de reconhecimento facial e a contribuição de pessoas negras na história da computação.",
          "Pedir à coordenação que a temática seja trabalhada só pelos professores de História."
        ],
        c: 2,
        e: "A abordagem é transversal e ligada ao próprio conteúdo da disciplina. Um bom exemplo para arguição na prova didática.",
        x: [
          "É a 'pedagogia do evento' em estado puro.",
          "A tecnologia não é neutra: algoritmos reproduzem vieses, e isso é conteúdo técnico da área.",
          "Correta. É transversal e ligado ao próprio conteúdo da disciplina.",
          "Terceirizar o tema para História contraria o art. 26-A, que fala em todo o currículo, e a proposta da autora."
        ]
      }
    ]
  },

  {
    id: "sem-homofobia",
    ordem: 9,
    autor: "Brasil. MEC",
    obra: "Escola sem homofobia",
    ano: "listado como 2004 no edital",
    topicos: [5],
    bio: {
      quem: "Material institucional, não obra de um autor. O programa federal 'Brasil sem Homofobia' foi lançado em 2004. Dentro dele, o projeto 'Escola sem Homofobia' foi financiado pelo MEC e elaborado por organizações da sociedade civil (entre elas a ABGLT, Pathfinder do Brasil, ECOS e Reprolatina).",
      origem: "O caderno e os materiais do projeto ficaram prontos por volta de 2010 e 2011. Em maio de 2011, a distribuição foi suspensa pelo governo Dilma Rousseff, depois de forte pressão de parlamentares religiosos, que apelidaram o material de 'kit gay'. Por isso a data '2004' do edital provavelmente se refere ao programa; confira no PDF da bibliografia qual versão é indicada.",
      relevancia: "Apesar da polêmica política, o material está na bibliografia oficial e cobre o tópico 5 do programa (direitos humanos, gênero e diversidade). Na prova, o que cai são os conceitos (identidade de gênero, orientação sexual, heteronormatividade) e a postura esperada da escola. Na arguição da didática, trate o tema pela ótica legal e de direitos, que é a do edital."
    },
    resumo: [
      "Material ligado ao programa federal Brasil sem Homofobia (2004), de combate à violência e à discriminação contra a população LGBT. O caderno do projeto Escola sem Homofobia foi elaborado por organizações da sociedade civil com apoio do MEC. Confira no PDF da bibliografia qual versão o edital indica.",
      "Conceitos básicos que costumam ser cobrados: sexo biológico; identidade de gênero (como a pessoa se reconhece: homem, mulher, pessoa não binária); orientação sexual (por quem a pessoa sente atração afetiva ou sexual); expressão de gênero (como a pessoa se apresenta socialmente). São dimensões distintas.",
      "Heteronormatividade é a norma social que toma a heterossexualidade e a correspondência entre sexo e gênero como padrão 'natural', tornando as outras formas invisíveis ou desviantes.",
      "A homofobia na escola não se resume à agressão física: inclui piadas, apelidos, exclusão, silenciamento e omissão dos adultos. Ela afeta a permanência e o desempenho dos estudantes. A escola deve reconhecer a diversidade, intervir nas situações de discriminação e incluir o tema nas práticas pedagógicas. O uso do nome social nos registros escolares está regulamentado pela Resolução CNE/CP 1/2018."
    ],
    conceitos: [
      "Sexo biológico, identidade de gênero, orientação sexual, expressão de gênero",
      "Heteronormatividade",
      "Homofobia, lesbofobia, transfobia",
      "Violência simbólica: piadas, silenciamento, omissão",
      "Nome social (Resolução CNE/CP 1/2018)",
      "Escola como espaço de proteção e permanência"
    ],
    questoes: [
      {
        q: "Sobre os conceitos de identidade de gênero e orientação sexual, é correto afirmar que:",
        o: [
          "São sinônimos e se referem à atração afetiva e sexual de uma pessoa.",
          "A identidade de gênero é determinada pelo sexo biológico.",
          "A orientação sexual é uma escolha consciente e pode ser alterada pela educação.",
          "A identidade de gênero se refere a como a pessoa se reconhece, e a orientação sexual, a por quem ela sente atração afetiva ou sexual; são dimensões distintas."
        ],
        c: 3,
        e: "São dimensões diferentes. Uma pessoa trans pode ter qualquer orientação sexual, por exemplo.",
        x: [
          "Não são sinônimos. Só a orientação sexual trata de atração.",
          "Se fosse determinada pelo sexo biológico, não existiriam pessoas trans. A identidade de gênero é como a pessoa se reconhece.",
          "O material rejeita a ideia de 'opção' ou de que a orientação possa ser alterada pela educação, e as tentativas de 'reversão' são condenadas pelo Conselho Federal de Psicologia.",
          "Correta. São dimensões distintas: como a pessoa se reconhece × por quem ela sente atração."
        ]
      },
      {
        q: "O termo heteronormatividade designa:",
        o: [
          "A norma social que toma a heterossexualidade como padrão natural e obrigatório, tornando invisíveis ou desviantes as demais orientações e identidades.",
          "A legislação que garante direitos iguais a casais heterossexuais e homossexuais.",
          "A orientação sexual da maioria da população.",
          "Um conjunto de orientações pedagógicas para a educação sexual nas escolas."
        ],
        c: 0,
        e: "É uma norma cultural, não um dado estatístico nem uma lei.",
        x: [
          "Correta. É uma norma social que trata a heterossexualidade como padrão natural.",
          "'Normatividade' aqui é norma cultural, não lei.",
          "Descreve um dado estatístico. O conceito trata da norma que transforma esse dado em regra obrigatória.",
          "Não é orientação pedagógica. É o que o material propõe questionar."
        ]
      },
      {
        q: "Segundo o material, a homofobia no ambiente escolar:",
        o: [
          "Restringe-se às agressões físicas, que devem ser encaminhadas à polícia.",
          "Manifesta-se também em piadas, apelidos, exclusão e silenciamento, inclusive na omissão dos educadores, e afeta a permanência dos estudantes.",
          "É um problema exclusivo das relações entre estudantes, sem relação com as práticas institucionais.",
          "Deve ser tratada como questão de foro íntimo, sem intervenção da escola."
        ],
        c: 1,
        e: "Tratar como 'brincadeira' ou se omitir também é uma forma de violência e contribui para a evasão.",
        x: [
          "'Restringe-se' derruba a alternativa. A violência simbólica (piadas, exclusão) é a forma mais comum.",
          "Correta. Inclui violência simbólica e omissão, e afeta a permanência.",
          "A omissão dos adultos e as práticas institucionais fazem parte do problema.",
          "A omissão também é violência. A escola tem o dever de intervir."
        ]
      },
      {
        q: "Um estudante trans de 16 anos solicita ser chamado pelo nome social nas aulas e nos registros escolares. A conduta adequada da instituição é:",
        o: [
          "Exigir decisão judicial de alteração de nome antes de atender ao pedido.",
          "Atender ao pedido apenas oralmente, mantendo o nome civil em todos os registros.",
          "Respeitar o nome social nas interações e nos registros escolares, conforme a regulamentação existente, garantindo o respeito à identidade do estudante.",
          "Encaminhar o estudante ao atendimento psicológico antes de qualquer decisão."
        ],
        c: 2,
        e: "A Resolução CNE/CP 1/2018 regulamenta o uso do nome social nos registros escolares. Para menores de 18 anos, a norma prevê solicitação pelos responsáveis legais.",
        x: [
          "O nome social não depende de decisão judicial. Retificar o registro civil é outra coisa.",
          "A norma prevê o uso do nome social também nos registros escolares, não só na fala.",
          "Correta. Nome social nas interações e nos registros, conforme a Resolução CNE/CP 1/2018. Para menores de 18 anos, o pedido é feito pelos responsáveis.",
          "Condicionar o pedido a atendimento psicológico trata a identidade como patologia."
        ]
      },
      {
        q: "Considerando o tópico 'educação em direitos humanos, gênero e diversidade' do programa, o papel da escola diante da diversidade sexual e de gênero é:",
        o: [
          "Manter neutralidade, deixando o tema exclusivamente para as famílias.",
          "Abordar o tema apenas quando houver casos de violência.",
          "Reconhecer a diversidade, prevenir e intervir em situações de discriminação e garantir condições de permanência e aprendizagem a todos os estudantes.",
          "Separar os estudantes em turmas conforme a identidade de gênero."
        ],
        c: 2,
        e: "A perspectiva de direitos humanos coloca a escola como espaço de proteção, reconhecimento e garantia de permanência.",
        x: [
          "Diante da discriminação, a 'neutralidade' é omissão. 'Exclusivamente' também derruba a alternativa.",
          "Agir só depois da violência é reativo. A prevenção faz parte do papel da escola.",
          "Correta. Reconhecer, prevenir, intervir e garantir a permanência.",
          "Separar os estudantes é segregação, o oposto da inclusão."
        ]
      }
    ]
  }
];

// Conceitos-chave cobrados por cada questão de autor (índices da lista "conceitos" do card).
// Usado para a pontuação por conceito.
(function () {
  var K = {
    saviani:            [[0], [1], [4], [2], [2, 0]],
    luckesi:            [[1], [0], [4], [3], [6, 5]],
    veiga:              [[0], [2], [5], [3], [4]],
    psicogeneticas:     [[3], [1], [5, 6], [4], [0, 2, 6]],
    frigotto:           [[5], [4, 2], [0], [5], [6]],
    brandao:            [[1], [3], [0], [2], [4, 5]],
    "antirracista-mec": [[0], [0], [3], [1], [5]],
    pinheiro:           [[1], [4], [3], [0], [1, 3]],
    "sem-homofobia":    [[0], [1], [3], [4], [5]]
  };
  window.PEDAGOGIA.forEach(function (c) {
    (K[c.id] || []).forEach(function (k, i) { if (c.questoes[i]) c.questoes[i].k = k; });
  });
})();

// Rótulos curtos usados no painel de desempenho.
(function () {
  var curto = {
    psicogeneticas: "Piaget, Vygotsky, Wallon (La Taille, Oliveira, Dantas)",
    "antirracista-mec": "MEC: Educação anti-racista (Lei 10.639)",
    "sem-homofobia": "MEC: Escola sem homofobia"
  };
  window.PEDAGOGIA.forEach(function (c) { if (curto[c.id]) c.curto = curto[c.id]; });
})();
