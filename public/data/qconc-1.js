// Questões por conceito-chave (parte 1): Saviani, Luckesi, Veiga.
// QCONC[card][i] = lista de questões do conceito i (mesma ordem de "conceitos" em pedagogia.js).
// Formato da questão igual ao de pedagogia.js: q, o (A-D), c (índice da correta), e (comentário), x (explicação por alternativa).

window.QCONC = window.QCONC || {};

window.QCONC.saviani = [
  // 0. Teorias não críticas × crítico-reprodutivistas
  [
    {
      q: "Para Saviani, o que as teorias não críticas da educação têm em comum é:",
      o: [
        "Entender a escola como instrumento de reprodução das relações de dominação, que marginaliza as camadas populares.",
        "Ver a sociedade como harmoniosa e a escola como capaz de corrigir a marginalidade.",
        "Negar qualquer papel da escola na formação dos indivíduos, atribuindo essa tarefa à família e ao trabalho.",
        "Defender que a educação depende exclusivamente das condições econômicas da sociedade em que se insere."
      ],
      c: 1,
      e: "As não críticas (tradicional, nova e tecnicista) confiam na escola como 'equalizadora social' e ignoram os determinantes sociais.",
      x: [
        "Isso é o que pensam as crítico-reprodutivistas, o grupo oposto.",
        "Correta. Sociedade harmoniosa e escola como corretora da marginalidade: é o traço comum das três não críticas.",
        "Nenhum dos dois grupos nega o papel da escola na formação; eles divergem sobre o efeito social dela.",
        "Determinação econômica exclusiva lembra as reprodutivistas, e nem elas são descritas assim por Saviani."
      ]
    },
    {
      q: "A principal crítica de Saviani às teorias crítico-reprodutivistas é que elas:",
      o: [
        "Ignoram os determinantes sociais da educação e tratam a escola como instituição autônoma e neutra.",
        "Superestimam a capacidade da escola de transformar a sociedade e de corrigir a marginalidade social.",
        "Analisam bem a escola na sociedade de classes, mas não oferecem proposta pedagógica.",
        "Defendem a transmissão dos conteúdos clássicos como função principal e específica da escola pública."
      ],
      c: 2,
      e: "Saviani reconhece o mérito das reprodutivistas em mostrar os condicionantes sociais, mas aponta que elas não dizem o que o professor pode fazer.",
      x: [
        "É o contrário: as reprodutivistas dão peso total aos determinantes sociais. Quem os ignora são as não críticas.",
        "Também é crítica às não críticas. As reprodutivistas acham que a escola não transforma nada.",
        "Correta. Críticas na análise, mas sem saída pedagógica: daí o fatalismo.",
        "Essa é a posição do próprio Saviani (histórico-crítica), não das reprodutivistas."
      ]
    },
    {
      q: "Associe os autores às teorias crítico-reprodutivistas: I. Bourdieu e Passeron; II. Althusser; III. Baudelot e Establet. ( ) escola dualista ( ) violência simbólica ( ) aparelho ideológico de Estado",
      o: [
        "III, I, II.",
        "I, II, III.",
        "II, III, I.",
        "III, II, I."
      ],
      c: 0,
      e: "Bourdieu e Passeron: violência simbólica. Althusser: AIE. Baudelot e Establet: escola dualista (capitalista na França).",
      x: [
        "Correta. Escola dualista = Baudelot e Establet (III); violência simbólica = Bourdieu e Passeron (I); AIE = Althusser (II).",
        "Atribui a escola dualista a Bourdieu e Passeron. Eles são da violência simbólica.",
        "Atribui a escola dualista a Althusser. O conceito de Althusser é o de aparelho ideológico de Estado.",
        "Acerta a escola dualista, mas troca Bourdieu e Althusser."
      ]
    }
  ],
  // 1. Marginalidade
  [
    {
      q: "Para a pedagogia tradicional, segundo a análise de Saviani, a escola resolve a marginalidade:",
      o: [
        "Acolhendo as diferenças individuais e respeitando o ritmo, os interesses e as necessidades de cada aluno.",
        "Organizando o ensino de modo racional e eficiente, com objetivos operacionais, como numa fábrica.",
        "Denunciando as relações de dominação da sociedade capitalista e formando a consciência de classe.",
        "Difundindo a instrução, já que o marginalizado é o ignorante."
      ],
      c: 3,
      e: "Na tradicional, marginalidade é ignorância; a solução é transmitir conhecimento, com o professor no centro.",
      x: [
        "Isso é a Escola Nova, que vê o marginalizado como o rejeitado.",
        "Isso é a pedagogia tecnicista, que vê o marginalizado como o incompetente.",
        "Nenhuma teoria não crítica denuncia a dominação; isso é das crítico-reprodutivistas.",
        "Correta. O ignorante precisa de instrução, e a escola transmite o saber acumulado."
      ]
    },
    {
      q: "Na pedagogia tecnicista, conforme Saviani, o elemento principal do processo educativo passa a ser:",
      o: [
        "O professor, detentor do conhecimento, que transmite os conteúdos de forma lógica e graduada.",
        "O aluno, com seus interesses e necessidades, que aprende fazendo e descobrindo por conta própria.",
        "A organização racional dos meios, com professor e aluno como executores.",
        "A comunidade escolar, que decide coletivamente os rumos do ensino por meio da gestão democrática."
      ],
      c: 2,
      e: "A tecnicista se inspira na racionalidade da produção: o centro é a organização (planejamento, instrução programada, objetivos operacionais).",
      x: [
        "Professor no centro é a pedagogia tradicional.",
        "Aluno no centro é a Escola Nova.",
        "Correta. Na tecnicista, o eixo é a organização racional dos meios; professor e aluno executam.",
        "Gestão democrática não é traço da tecnicista, que é hierárquica e técnica."
      ]
    },
    {
      q: "Segundo Saviani, para a Escola Nova o marginalizado é o rejeitado. Por isso, a função da escola seria:",
      o: [
        "Ajustar e adaptar os indivíduos à sociedade, incutindo neles o sentimento de aceitação dos demais e pelos demais.",
        "Transmitir os conhecimentos sistematizados de forma lógica, graduada e centrada na figura do professor.",
        "Formar mão de obra eficiente e produtiva para o mercado, com base em objetivos operacionais.",
        "Revelar aos alunos as contradições da sociedade de classes e os mecanismos de dominação."
      ],
      c: 0,
      e: "Na Escola Nova a ênfase sai do conteúdo e vai para a aceitação das diferenças e o ajustamento.",
      x: [
        "Correta. É a formulação de Saviani para a Escola Nova: escola como instrumento de ajustamento e aceitação.",
        "É a função na pedagogia tradicional.",
        "É a função na pedagogia tecnicista.",
        "Nenhuma não crítica faz isso; seria uma leitura crítica."
      ]
    }
  ],
  // 2. Curvatura da vara
  [
    {
      q: "A 'teoria da curvatura da vara', em Saviani, deve ser entendida como:",
      o: [
        "Uma defesa do retorno puro e simples à pedagogia tradicional, com o professor de volta ao centro.",
        "Uma estratégia: enfatizar o oposto do escolanovismo, os conteúdos, para chegar à posição correta.",
        "Uma proposta de flexibilização curricular, que adapta o currículo às necessidades de cada comunidade.",
        "Uma crítica às teorias crítico-reprodutivistas, que entortaram a compreensão sobre a função da escola."
      ],
      c: 1,
      e: "É uma estratégia de correção: a vara pende para a Escola Nova, então ele força o lado contrário, sem pretender ficar na tradicional.",
      x: [
        "É a leitura errada mais comum. Saviani não quer voltar à tradicional; quer endireitar a vara.",
        "Correta. Ênfase deliberada no lado oposto para corrigir uma distorção.",
        "Não trata de currículo flexível; trata da ênfase entre conteúdo e método.",
        "A imagem é dirigida à Escola Nova, não às reprodutivistas."
      ]
    },
    {
      q: "No contexto da curvatura da vara, Saviani afirma, de forma propositalmente provocativa, que:",
      o: [
        "A Escola Nova é a pedagogia mais democrática, por respeitar os interesses e o ritmo de cada aluno.",
        "A pedagogia tecnicista é a mais adequada às escolas populares, por garantir eficiência e produtividade.",
        "A pedagogia tradicional, por valorizar o conteúdo, pode ser considerada mais democrática que a Escola Nova em seus efeitos.",
        "Nenhuma pedagogia pode ser democrática numa sociedade de classes, pois a escola só reproduz a dominação."
      ],
      c: 2,
      e: "A tese provocativa é que, quanto aos efeitos, a Escola Nova foi antidemocrática e a tradicional, por garantir conteúdo, foi mais democrática.",
      x: [
        "É o contrário: ele critica os efeitos antidemocráticos da Escola Nova.",
        "Saviani é crítico da tecnicista também.",
        "Correta. É a provocação central da curvatura da vara.",
        "Seria uma posição fatalista, típica das reprodutivistas, que Saviani rejeita."
      ]
    },
    {
      q: "Um professor afirma: 'Hoje só faço aulas de projeto, o conteúdo os alunos procuram na internet'. À luz da curvatura da vara, Saviani diria que:",
      o: [
        "A prática está correta, pois coloca o aluno no centro do processo e desenvolve sua autonomia na busca de informações.",
        "A prática é tecnicista, pois depende do uso de tecnologia e da organização racional dos recursos da internet.",
        "A prática é adequada desde que a avaliação seja feita por competências e cada projeto tenha um produto final.",
        "Reproduz o desvio escolanovista e esvazia a transmissão do saber, prejudicando os alunos das camadas populares."
      ],
      c: 3,
      e: "Deixar o conteúdo para o aluno buscar sozinho é o lado para onde a vara estava torta.",
      x: [
        "Pôr o aluno no centro sem o conteúdo é justamente o que Saviani critica.",
        "Usar tecnologia não torna uma prática tecnicista; tecnicismo é a organização racional dos meios.",
        "Avaliação por competências não resolve o esvaziamento do conteúdo.",
        "Correta. Alunos sem acesso a esse saber fora da escola são os mais prejudicados."
      ]
    }
  ],
  // 3. Pedagogia histórico-crítica
  [
    {
      q: "Para a pedagogia histórico-crítica, a função específica da escola é:",
      o: [
        "Socializar o saber sistematizado às camadas populares.",
        "Preparar os alunos para o mercado de trabalho, desenvolvendo as competências exigidas pelos setores produtivos.",
        "Promover a adaptação dos indivíduos à sociedade, acolhendo as diferenças e combatendo a rejeição.",
        "Desenvolver competências socioemocionais, como empatia, resiliência e trabalho em equipe."
      ],
      c: 0,
      e: "A especificidade da escola, para Saviani, é a socialização do saber sistematizado.",
      x: [
        "Correta. É a definição central da histórico-crítica.",
        "Preparar para o mercado é a lógica tecnicista.",
        "Adaptação é a função da Escola Nova na leitura de Saviani.",
        "Competências socioemocionais não são a especificidade da escola nessa teoria."
      ]
    },
    {
      q: "O termo 'histórico-crítica' indica que a proposta de Saviani:",
      o: [
        "Prioriza o ensino de História no currículo, como disciplina integradora das demais áreas do conhecimento.",
        "Rejeita o conhecimento produzido no passado, por considerá-lo ideológico e comprometido com as elites.",
        "Entende a educação como fenômeno histórico e reconhece seus condicionantes, sem cair no fatalismo.",
        "Critica a escola como reprodutora da sociedade de classes, sem propor alternativas pedagógicas concretas."
      ],
      c: 2,
      e: "Histórica pela compreensão da educação na história; crítica por reconhecer seus condicionantes sem cair no fatalismo.",
      x: [
        "Não se refere à disciplina de História.",
        "É o contrário: ela valoriza os clássicos, o conhecimento produzido historicamente.",
        "Correta. Supera tanto a ingenuidade das não críticas quanto o fatalismo das reprodutivistas.",
        "Criticar sem propor é o defeito das reprodutivistas, não da histórico-crítica."
      ]
    },
    {
      q: "Sobre a relação entre a pedagogia histórico-crítica e as teorias que Saviani analisa, é correto afirmar que ela:",
      o: [
        "É uma variação da Escola Nova, por partir da experiência dos alunos e valorizar a atividade deles.",
        "Busca superar, por incorporação, as limitações das teorias não críticas e das crítico-reprodutivistas, sem se confundir com nenhuma delas.",
        "É idêntica à pedagogia tradicional, por valorizar os conteúdos e a transmissão feita pelo professor.",
        "É uma teoria crítico-reprodutivista mais recente, que atualiza Bourdieu e Althusser para o caso brasileiro."
      ],
      c: 1,
      e: "A histórico-crítica parte da prática social e valoriza o conteúdo, mas com a crítica social; não é nenhuma das anteriores.",
      x: [
        "Partir da prática social não a torna escolanovista; o eixo é o saber sistematizado.",
        "Correta. Supera a ingenuidade de umas e o fatalismo de outras.",
        "Valorizar o conteúdo não a torna tradicional: ela tem base crítica e método próprio.",
        "Ela é crítica, mas não reprodutivista: aposta na escola como instrumento de luta."
      ]
    }
  ],
  // 4. Método: prática social → ... → prática social
  [
    {
      q: "No método da pedagogia histórico-crítica, a 'catarse' corresponde ao momento em que:",
      o: [
        "O professor apresenta o conteúdo de forma expositiva, com exemplos e explicações sistematizadas.",
        "Os alunos identificam os problemas da prática social que precisam ser resolvidos com o conhecimento.",
        "Se avalia formalmente a aprendizagem, por meio de prova, para verificar o domínio do conteúdo.",
        "O aluno incorpora o conhecimento e passa a compreender a prática social de forma elaborada."
      ],
      c: 3,
      e: "Catarse é a efetiva incorporação dos instrumentos culturais, transformados em elementos ativos de transformação social.",
      x: [
        "Isso se aproxima da instrumentalização.",
        "Isso é a problematização.",
        "Catarse não é sinônimo de prova; é a incorporação do conhecimento.",
        "Correta. É a 'virada' na compreensão do aluno."
      ]
    },
    {
      q: "No método de Saviani, o ponto de partida e o ponto de chegada são a prática social. A diferença entre eles é que:",
      o: [
        "Na chegada, a prática social é compreendida de forma mais elaborada.",
        "No ponto de partida, só o professor conhece a prática social, e os alunos a desconhecem por completo.",
        "No ponto de chegada, a prática social já foi concretamente transformada pela ação dos alunos e da escola.",
        "Não há diferença, pois o método é circular e retorna exatamente ao mesmo ponto em que começou."
      ],
      c: 0,
      e: "No início, o aluno tem uma compreensão sincrética; no fim, uma compreensão sintética. A prática é a mesma, a compreensão mudou.",
      x: [
        "Correta. Da compreensão sincrética (confusa) à sintética (elaborada).",
        "Os dois conhecem a prática social, mas em níveis diferentes: o professor de forma sintética precária, o aluno de forma sincrética.",
        "A mudança é na compreensão; a transformação concreta da sociedade não acontece no fim de uma aula.",
        "Há diferença qualitativa; não é circular no sentido de voltar ao mesmo lugar."
      ]
    },
    {
      q: "Uma professora de Informática começa a aula perguntando como a escola guarda as notas dos alunos, levanta as falhas de usar planilhas soltas, ensina modelagem relacional e pede que a turma modele o caso. Em termos do método histórico-crítico, ensinar a modelagem relacional corresponde à:",
      o: [
        "Problematização.",
        "Catarse.",
        "Instrumentalização.",
        "Prática social inicial."
      ],
      c: 2,
      e: "Instrumentalização é a apropriação dos instrumentos teóricos e práticos necessários para enfrentar os problemas levantados.",
      x: [
        "A problematização foi levantar as falhas das planilhas.",
        "A catarse aparece quando a turma, por conta própria, modela o caso.",
        "Correta. Ensinar a modelagem é fornecer o instrumento.",
        "A prática social inicial foi a pergunta sobre como a escola guarda as notas."
      ]
    }
  ],
  // 5. Saber sistematizado / conteúdos clássicos
  [
    {
      q: "Para Saviani, o 'clássico' na educação é:",
      o: [
        "Aquilo que é antigo e tradicional, consagrado pela pedagogia dos séculos anteriores.",
        "O conteúdo da pedagogia tradicional, organizado de forma lógica e transmitido pelo professor.",
        "O que é mais moderno e atualizado, acompanhando as transformações científicas e tecnológicas.",
        "O que se firmou como fundamental e essencial."
      ],
      c: 3,
      e: "Clássico não é tradicional nem antigo: é o essencial, o que permanece como referência.",
      x: [
        "É a confusão que a banca explora. Antigo não é sinônimo de clássico.",
        "Saviani não identifica o clássico com a pedagogia tradicional.",
        "Atualidade não é o critério; o critério é ser fundamental.",
        "Correta. É a definição de Saviani."
      ]
    },
    {
      q: "Na perspectiva histórico-crítica, o saber escolar se distingue do saber espontâneo por ser:",
      o: [
        "Sistematizado, elaborado e metódico, e não fragmentado e assistemático como o saber espontâneo do senso comum.",
        "Mais útil para resolver os problemas imediatos da vida cotidiana dos alunos e de suas famílias.",
        "Restrito às elites, que dele necessitam para exercer as funções de direção da sociedade.",
        "Construído espontaneamente pelo aluno na interação com o meio, sem necessidade de transmissão."
      ],
      c: 0,
      e: "A escola existe para dar acesso ao saber elaborado, que o cotidiano não oferece.",
      x: [
        "Correta. É a distinção entre saber sistematizado e saber espontâneo.",
        "O critério não é utilidade imediata; é a elaboração.",
        "Saviani defende justamente que esse saber seja socializado para todos.",
        "Construção espontânea é a ênfase escolanovista, não a histórico-crítica."
      ]
    },
    {
      q: "Um coordenador propõe substituir a disciplina de Fundamentos de Redes por um curso rápido de configuração de um roteador de marca específica, 'porque é isso que o mercado pede'. Na perspectiva de Saviani, a crítica mais adequada seria:",
      o: [
        "A proposta é correta, pois aproxima a escola do mundo do trabalho e aumenta a empregabilidade imediata dos alunos.",
        "A proposta é tecnicista, mas aceitável em cursos técnicos, cuja finalidade é formar para funções específicas.",
        "Ela troca o saber fundamental por um treinamento pontual, que não permite dominar outras tecnologias.",
        "A proposta é escolanovista, pois parte do interesse dos alunos e das demandas que eles trazem da realidade."
      ],
      c: 2,
      e: "Os fundamentos são o 'clássico' da área; o treinamento de um produto é efêmero.",
      x: [
        "Aproximar do trabalho não justifica abrir mão do fundamento.",
        "Saviani não aceita o tecnicismo nem nos cursos técnicos.",
        "Correta. Troca o clássico pelo pontual, o que prejudica justamente quem só tem a escola para aprender.",
        "O critério da proposta é o mercado, não o interesse dos alunos."
      ]
    }
  ],
  // 6. Onze teses sobre educação e política
  [
    {
      q: "Nas teses sobre educação e política, Saviani sustenta que:",
      o: [
        "Educação e política são a mesma coisa, pois toda prática educativa é, em essência, uma prática política.",
        "A educação é neutra e não tem dimensão política, cabendo à escola apenas a transmissão técnica do saber.",
        "A política deve ser excluída da escola, para preservar a autonomia pedagógica dos professores.",
        "São práticas distintas, mas inseparáveis."
      ],
      c: 3,
      e: "Distintas e inseparáveis: é a formulação central das teses.",
      x: [
        "Saviani insiste que são distintas; confundi-las é um erro.",
        "Negar a dimensão política da educação é uma posição que ele critica.",
        "Excluir a política é impossível, já que toda educação tem dimensão política.",
        "Correta."
      ]
    },
    {
      q: "Segundo Saviani, a dimensão política da educação se realiza principalmente:",
      o: [
        "Pela socialização do saber às camadas populares, isto é, cumprindo a função específica da escola.",
        "Por meio de discussões partidárias em sala, que formam a consciência política dos estudantes.",
        "Pela participação dos professores em sindicatos e movimentos sociais ligados à educação pública.",
        "Pela eleição direta de diretores, que democratiza a gestão e aproxima a escola da comunidade."
      ],
      c: 0,
      e: "A dimensão política da escola está em cumprir bem sua função: democratizar o saber.",
      x: [
        "Correta. É ensinando bem que a escola cumpre sua função política.",
        "Seria confundir educação com política partidária, o que ele rejeita.",
        "A militância sindical é prática política, não a dimensão política da educação.",
        "Gestão democrática é importante, mas não é o centro do argumento das teses."
      ]
    },
    {
      q: "Em uma arguição, perguntam ao candidato se ensinar com base na pedagogia histórico-crítica seria 'doutrinação'. A resposta mais coerente com Saviani é:",
      o: [
        "Sim, pois toda educação crítica é doutrinária e transmite a visão de mundo do professor.",
        "Não, pois a pedagogia histórico-crítica é neutra e se limita à transmissão técnica dos conteúdos.",
        "Não: sua dimensão política é democratizar o conhecimento, não fazer propaganda.",
        "Depende do partido do professor e da forma como ele conduz os debates em sala de aula."
      ],
      c: 2,
      e: "Democratizar o conhecimento é político no sentido amplo, sem ser partidário.",
      x: [
        "Confunde dimensão política com doutrinação.",
        "Saviani nega a neutralidade de qualquer educação.",
        "Correta. Política no sentido de democratizar o saber, não de propaganda.",
        "Não tem relação com o partido de ninguém."
      ]
    }
  ]
];

window.QCONC.luckesi = [
  // 0. Pedagogia do exame
  [
    {
      q: "Para Luckesi, um sintoma típico da 'pedagogia do exame' é:",
      o: [
        "O professor usar diversos instrumentos ao longo do bimestre para acompanhar a aprendizagem.",
        "Os alunos perguntarem sempre se 'isso vai cair na prova'.",
        "A escola fazer reuniões pedagógicas periódicas para replanejar o ensino a partir dos resultados.",
        "A avaliação ser usada para decidir quais conteúdos precisam ser retomados com a turma."
      ],
      c: 1,
      e: "Quando o estudo é guiado pela prova, e não pela aprendizagem, a pedagogia do exame está em ação.",
      x: [
        "Diversificar instrumentos é coerente com a avaliação defendida por Luckesi.",
        "Correta. Mostra que o foco é a prova, não o aprender.",
        "Replanejar é tomar decisão, o que é avaliação no sentido de Luckesi.",
        "Retomar conteúdos a partir do resultado é exatamente o que ele defende."
      ]
    },
    {
      q: "Na pedagogia do exame, segundo Luckesi, os pais, o sistema de ensino e os alunos estão polarizados:",
      o: [
        "Na qualidade da aprendizagem.",
        "No desenvolvimento integral dos estudantes.",
        "Nas notas e na promoção ou reprovação.",
        "Na relação professor-aluno."
      ],
      c: 2,
      e: "Todos os envolvidos olham para a nota e a promoção.",
      x: [
        "É o que deveria acontecer; na pedagogia do exame, não acontece.",
        "Formação integral não é o foco da pedagogia do exame.",
        "Correta.",
        "A relação professor-aluno até se deteriora nessa lógica, mas não é o polo."
      ]
    },
    {
      q: "Luckesi associa a pedagogia do exame a uma concepção de sociedade e de educação. Essa associação indica que:",
      o: [
        "A pedagogia do exame é neutra e técnica, e pode servir a qualquer concepção de sociedade.",
        "A pedagogia do exame foi criada pela Escola Nova para medir o desenvolvimento individual.",
        "A pedagogia do exame é exclusiva do ensino superior e dos processos seletivos de acesso.",
        "Examinar está ligado a um modelo social seletivo; superá-lo exige outra concepção pedagógica."
      ],
      c: 3,
      e: "A avaliação não é só técnica: reflete o modelo de sociedade e de pedagogia a que serve.",
      x: [
        "Luckesi rejeita a ideia de que a avaliação seja neutra.",
        "Não há essa atribuição; o exame é anterior à Escola Nova.",
        "A pedagogia do exame está em todos os níveis, inclusive na educação básica.",
        "Correta. Mudar a avaliação exige mudar a concepção de ensino."
      ]
    }
  ],
  // 1. Verificação × avaliação
  [
    {
      q: "Um professor aplica uma prova, lança as notas no sistema e passa ao conteúdo seguinte. Para Luckesi, esse procedimento é:",
      o: [
        "Avaliação somativa, por ocorrer ao final de uma etapa de ensino.",
        "Verificação, pois o processo termina no registro do resultado.",
        "Avaliação diagnóstica, pois identifica o que os alunos sabem.",
        "Avaliação formativa, pois acompanha a aprendizagem da turma."
      ],
      c: 1,
      e: "Sem decisão a partir do dado, não há avaliação no sentido de Luckesi.",
      x: [
        "'Somativa' é de outra classificação e não descreve o ponto de Luckesi.",
        "Correta. O dado foi 'congelado'.",
        "Diagnóstico exigiria usar o dado para decidir o que fazer.",
        "Formativa também implica usar o resultado para reorientar."
      ]
    },
    {
      q: "Para Luckesi, o termo 'verificar' vem de 'verum facere', que significa:",
      o: [
        "Fazer verdadeiro, isto é, constatar.",
        "Atribuir valor ou qualidade a algo.",
        "Tomar uma decisão a partir de dados.",
        "Classificar em ordem de desempenho."
      ],
      c: 0,
      e: "Verificar é constatar; avaliar ('a-valere') é atribuir valor ou qualidade, o que leva a uma decisão.",
      x: [
        "Correta. Verificar é constatar a verdade de algo.",
        "Atribuir valor é a origem de 'avaliar'.",
        "Decidir é a consequência da avaliação.",
        "Classificar não é o sentido etimológico."
      ]
    },
    {
      q: "Uma professora percebe, pela correção de exercícios, que metade da turma não entendeu chaves estrangeiras. Ela prepara outro exemplo e retoma o conteúdo antes de seguir. Para Luckesi, ela:",
      o: [
        "Verificou a aprendizagem, pois corrigiu exercícios e constatou o resultado obtido pela turma.",
        "Fez uso classificatório da avaliação, separando quem entendeu de quem não entendeu.",
        "Avaliou a aprendizagem, pois usou o dado para tomar uma decisão pedagógica.",
        "Aplicou a pedagogia do exame, já que os exercícios funcionam como pequenas provas."
      ],
      c: 2,
      e: "Dado + juízo + decisão = avaliação.",
      x: [
        "Foi além da verificação, porque decidiu algo a partir do dado.",
        "Não houve classificação dos alunos.",
        "Correta.",
        "Não há foco em nota nem em promoção."
      ]
    }
  ],
  // 2. Juízo de qualidade + decisão
  [
    {
      q: "Luckesi define a avaliação como:",
      o: [
        "A medida quantitativa do desempenho dos alunos por meio de instrumentos padronizados e comparáveis.",
        "O registro sistemático das notas obtidas nas provas e trabalhos ao longo do período letivo.",
        "Um processo de classificação dos estudantes segundo o seu rendimento em relação à turma.",
        "Um juízo de qualidade sobre dados relevantes da realidade, tendo em vista uma tomada de decisão."
      ],
      c: 3,
      e: "É a definição clássica do autor.",
      x: [
        "Medir é parte, mas não é a avaliação em si.",
        "Registrar é verificação.",
        "Classificar é a distorção que ele critica.",
        "Correta."
      ]
    },
    {
      q: "Na definição de Luckesi, o 'juízo de qualidade' exige um padrão de comparação. Esse padrão, na avaliação da aprendizagem, é:",
      o: [
        "O desempenho médio da turma, que serve de referência para situar cada estudante.",
        "O que se espera que o aluno aprenda, definido no planejamento.",
        "O desempenho do melhor aluno, que indica o que é possível alcançar naquela turma.",
        "A nota mínima de aprovação definida no regimento da instituição de ensino."
      ],
      c: 1,
      e: "O aluno é comparado com o objetivo de aprendizagem, não com os colegas.",
      x: [
        "Comparar com a média é lógica classificatória.",
        "Correta. O padrão é o objetivo planejado.",
        "Comparar com o melhor aluno também é classificatório.",
        "Nota mínima é critério administrativo, não de aprendizagem."
      ]
    },
    {
      q: "A inclusão da 'tomada de decisão' na definição de avaliação de Luckesi implica que:",
      o: [
        "Avaliar se completa na ação: reorientar, retomar ou avançar no ensino.",
        "Só o professor pode avaliar, pois é ele quem detém o conhecimento a ser verificado.",
        "A decisão é sempre aprovar ou reprovar o estudante ao final do período letivo.",
        "A avaliação deve acontecer apenas no fim do processo, quando há dados suficientes."
      ],
      c: 0,
      e: "Sem ação, a avaliação fica incompleta.",
      x: [
        "Correta.",
        "A definição não restringe quem avalia; Luckesi valoriza também a autoavaliação.",
        "Reduz a decisão à lógica do exame.",
        "Luckesi defende a avaliação ao longo do processo."
      ]
    }
  ],
  // 3. Diagnóstica × classificatória
  [
    {
      q: "Na função classificatória da avaliação, criticada por Luckesi:",
      o: [
        "O resultado é usado para identificar as dificuldades e reorientar o ensino da turma.",
        "O aluno é estimulado a se autoavaliar e a acompanhar o próprio progresso.",
        "O resultado posiciona o aluno numa escala e cristaliza esse lugar, sem servir ao seu crescimento.",
        "A aprendizagem é acompanhada continuamente ao longo do processo."
      ],
      c: 2,
      e: "Classificar é congelar o aluno num ponto; diagnosticar é ver onde ele está para seguir.",
      x: [
        "Isso é a função diagnóstica.",
        "Autoavaliação combina mais com a perspectiva diagnóstica.",
        "Correta.",
        "Acompanhamento contínuo é diagnóstico."
      ]
    },
    {
      q: "Luckesi afirma que a avaliação diagnóstica está a serviço de uma pedagogia preocupada com:",
      o: [
        "A seleção dos melhores alunos para o ensino superior.",
        "A transformação social e o desenvolvimento do educando.",
        "O cumprimento integral do conteúdo programático previsto.",
        "A manutenção da disciplina."
      ],
      c: 1,
      e: "A avaliação diagnóstica se liga a uma pedagogia transformadora.",
      x: [
        "Seleção é a lógica classificatória.",
        "Correta.",
        "Cumprir o programa sem garantir a aprendizagem é o que ele critica.",
        "Disciplina via avaliação é uso autoritário."
      ]
    },
    {
      q: "No primeiro dia de uma unidade sobre redes, o professor aplica um questionário rápido sobre o que a turma já sabe de endereços IP, sem atribuir nota, e ajusta o plano a partir disso. Segundo Luckesi, esse é um exemplo de avaliação:",
      o: [
        "Classificatória.",
        "Punitiva.",
        "Somativa.",
        "Diagnóstica."
      ],
      c: 3,
      e: "Identifica o ponto de partida para decidir como ensinar.",
      x: [
        "Não há ranqueamento.",
        "Não há punição; nem nota há.",
        "Somativa ocorre ao final e certifica.",
        "Correta."
      ]
    }
  ],
  // 4. Uso autoritário
  [
    {
      q: "Para Luckesi, o uso da avaliação como instrumento de ameaça:",
      o: [
        "Expressa uma relação autoritária e desvia a avaliação de sua finalidade.",
        "É eficiente para manter a disciplina e deve ser usado com moderação, em situações excepcionais.",
        "É inevitável em turmas numerosas, nas quais o professor não tem outro meio de controle.",
        "É legítimo quando previsto no regimento escolar e comunicado previamente aos estudantes."
      ],
      c: 0,
      e: "Ameaçar com a nota é poder, não avaliação.",
      x: [
        "Correta.",
        "Luckesi não aceita esse uso, nem com moderação.",
        "O tamanho da turma não justifica o uso autoritário.",
        "Previsão em regimento não muda a natureza autoritária."
      ]
    },
    {
      q: "Qual das práticas abaixo NÃO configura uso autoritário da avaliação, na perspectiva de Luckesi?",
      o: [
        "Tirar pontos da nota de quem conversa durante a explicação do conteúdo.",
        "Aplicar prova surpresa porque a turma não fez silêncio quando foi solicitado.",
        "Divulgar os critérios antes e devolver as provas comentadas.",
        "Anunciar que a prova será 'difícil' para que os alunos 'aprendam a respeitar'."
      ],
      c: 2,
      e: "Critérios claros e devolutiva são práticas coerentes com a avaliação a serviço da aprendizagem.",
      x: [
        "Nota como punição de comportamento: autoritário.",
        "Prova como castigo: autoritário.",
        "Correta. Transparência e devolutiva servem à aprendizagem.",
        "Prova como instrumento de poder: autoritário."
      ]
    },
    {
      q: "Segundo Luckesi, a nota usada como mecanismo de controle disciplinar produz como efeito:",
      o: [
        "Maior motivação intrínseca para aprender, já que o aluno passa a valorizar cada atividade.",
        "Medo e submissão, com foco na nota em vez da aprendizagem.",
        "Melhora da autonomia dos estudantes, que aprendem a assumir as consequências de seus atos.",
        "Maior qualidade do ensino, pois a turma se concentra e o professor cumpre o programa."
      ],
      c: 1,
      e: "Controle pela nota gera estudantes que estudam por medo, não por compreensão.",
      x: [
        "É o oposto: o medo é motivação externa.",
        "Correta.",
        "Submissão é o contrário de autonomia.",
        "Não melhora o ensino; só desloca o foco."
      ]
    }
  ],
  // 5. Mínimos necessários
  [
    {
      q: "Na proposta de Luckesi, os 'mínimos necessários' são:",
      o: [
        "A nota mínima exigida pelo regimento para a aprovação do aluno.",
        "Os conteúdos que podem ser cortados do programa quando falta tempo.",
        "Os conhecimentos e habilidades essenciais que todo aluno precisa dominar para seguir aprendendo, que orientam a avaliação.",
        "As competências mínimas definidas pelo mercado de trabalho para cada curso."
      ],
      c: 2,
      e: "Mínimos são o essencial, não o rebaixamento.",
      x: [
        "Confunde com critério administrativo de aprovação.",
        "Não se trata de cortar conteúdo.",
        "Correta.",
        "O critério é a continuidade da aprendizagem, não o mercado."
      ]
    },
    {
      q: "Se um aluno não atinge os mínimos necessários de uma unidade, a conduta coerente com Luckesi é:",
      o: [
        "Reprová-lo, já que não atingiu o padrão definido para aquela unidade.",
        "Fazer a média com as outras notas do período para compensar a deficiência.",
        "Seguir o conteúdo, pois ele poderá recuperar na avaliação do próximo bimestre.",
        "Retomar o ensino desses pontos até que ele os domine, já que são essenciais."
      ],
      c: 3,
      e: "A avaliação inclusiva busca garantir a aprendizagem do essencial.",
      x: [
        "Reprovar sem retomar é lógica de exame.",
        "Luckesi critica a média, que esconde o que não foi aprendido.",
        "Seguir sem retomar perpetua a lacuna.",
        "Correta."
      ]
    },
    {
      q: "No plano de aula da prova didática, o candidato indica: 'Ao final da aula, todo aluno deverá ser capaz de escrever uma consulta SELECT com filtro WHERE'. À luz de Luckesi, essa formulação:",
      o: [
        "Explicita um mínimo necessário e dá critério claro para avaliar e decidir.",
        "É inadequada, pois restringe o conteúdo da aula a um único comando da linguagem SQL.",
        "É classificatória, pois define um padrão que separa os alunos que atingem dos que não atingem.",
        "É irrelevante para a avaliação, que deve considerar todo o conteúdo do bimestre."
      ],
      c: 0,
      e: "Objetivo claro e essencial dá critério para avaliar e decidir.",
      x: [
        "Correta.",
        "Definir o essencial não impede ir além.",
        "Ter padrão não é classificar; classificar é comparar alunos entre si.",
        "Ao contrário, é a base da avaliação."
      ]
    }
  ],
  // 6. Avaliação inclusiva × exame excludente
  [
    {
      q: "Para Luckesi, o ato de avaliar é, por natureza:",
      o: [
        "Seletivo, pois separa os aptos dos inaptos para a etapa seguinte.",
        "Neutro, pois apenas mede o desempenho sem juízo de valor.",
        "Inclusivo, pois busca trazer o aluno para dentro do processo.",
        "Punitivo, pois corrige os erros e responsabiliza quem não estudou."
      ],
      c: 2,
      e: "A avaliação inclui; o exame exclui.",
      x: [
        "Seletividade é característica do exame.",
        "Luckesi não vê a avaliação como neutra.",
        "Correta.",
        "Corrigir erros não é punir."
      ]
    },
    {
      q: "Considere as afirmativas: I. O exame é pontual e classificatório; II. A avaliação é processual e diagnóstica; III. O exame e a avaliação são sinônimos. Está correto, segundo Luckesi, o que se afirma em:",
      o: [
        "I, apenas.",
        "I e II, apenas.",
        "II e III, apenas.",
        "I, II e III."
      ],
      c: 1,
      e: "Exame e avaliação são práticas distintas: essa é a tese do autor.",
      x: [
        "A II também está correta.",
        "Correta.",
        "A III está errada: são distintos.",
        "A III está errada."
      ]
    },
    {
      q: "Num IF que busca a permanência e o êxito dos estudantes, a avaliação inclusiva de Luckesi se manifesta quando:",
      o: [
        "Os alunos com notas baixas são encaminhados para outra turma, com ritmo mais lento e conteúdo reduzido.",
        "As notas são divulgadas em ordem decrescente, para estimular a competição saudável entre os estudantes.",
        "A recuperação é concentrada no fim do ano letivo, quando há tempo para revisar todo o conteúdo.",
        "A avaliação gera ações de retomada para que os alunos com dificuldade aprendam, e não só registra o fracasso."
      ],
      c: 3,
      e: "Avaliar para incluir é agir para que todos aprendam.",
      x: [
        "Separar os alunos é excluir.",
        "Ranqueamento é lógica do exame.",
        "Recuperação tardia não acompanha o processo.",
        "Correta."
      ]
    }
  ]
];

window.QCONC.veiga = [
  // 0. Aula como espaço-tempo
  [
    {
      q: "Considerar a aula como 'espaço-tempo' do trabalho pedagógico significa:",
      o: [
        "Que a aula é um lugar e um momento intencionalmente organizados, nos quais se concretizam as relações pedagógicas.",
        "Que a qualidade da aula depende do tamanho e das condições físicas da sala.",
        "Que a aula deve durar exatamente o tempo previsto na grade horária.",
        "Que a aula só ocorre dentro da sala, e não em laboratórios ou visitas."
      ],
      c: 0,
      e: "Espaço-tempo é onde a intencionalidade pedagógica se concretiza.",
      x: [
        "Correta.",
        "Não se trata do espaço físico em sentido literal.",
        "A grade define o tempo administrativo, não o sentido da aula.",
        "A aula pode ocorrer em laboratório, visita técnica, ambiente virtual."
      ]
    },
    {
      q: "Para a obra organizada por Veiga, a aula é atravessada:",
      o: [
        "Apenas pelas decisões do professor, que tem plena autonomia sobre tudo o que acontece em sala de aula.",
        "Pelo projeto da escola, pelo contexto social e pelas condições concretas de alunos e instituição.",
        "Apenas pelo conteúdo programático definido na ementa da disciplina.",
        "Exclusivamente pelas diretrizes curriculares nacionais definidas pelo MEC."
      ],
      c: 1,
      e: "A aula está situada num contexto institucional e social; não é um evento isolado.",
      x: [
        "O professor decide, mas dentro de um contexto.",
        "Correta.",
        "O conteúdo é um dos elementos, não o único.",
        "As diretrizes nacionais contam, mas não exclusivamente."
      ]
    },
    {
      q: "Uma aula de laboratório de Informática em que o professor apenas liga o projetor e lê os slides, sem planejar a interação com os alunos, contraria a concepção de aula da obra porque:",
      o: [
        "Usa tecnologia em excesso e torna a aula dependente do funcionamento dos equipamentos do laboratório.",
        "Ocorre fora da sala comum, o que dispersa a atenção dos alunos e dificulta a condução.",
        "Não tem duração adequada para que os alunos assimilem todo o conteúdo apresentado.",
        "Reduz a aula a transmissão, sem intencionalidade nem relação."
      ],
      c: 3,
      e: "Sem intencionalidade e sem relação, a aula vira só transmissão.",
      x: [
        "O problema não é a tecnologia.",
        "O laboratório é um espaço-tempo legítimo.",
        "A duração não é o problema descrito.",
        "Correta."
      ]
    }
  ],
  // 1. Tríade didática
  [
    {
      q: "A tríade didática envolve:",
      o: [
        "Planejamento, execução e avaliação.",
        "Professor, aluno e conhecimento.",
        "Escola, família e comunidade.",
        "Objetivos, conteúdos e métodos."
      ],
      c: 1,
      e: "Os três polos da relação didática.",
      x: [
        "São etapas do trabalho docente, não a tríade.",
        "Correta.",
        "São atores da comunidade escolar.",
        "São elementos do plano."
      ]
    },
    {
      q: "Na pedagogia tradicional, na Escola Nova e numa perspectiva crítica, o centro da tríade didática é, respectivamente:",
      o: [
        "O aluno; o professor; o conhecimento.",
        "O conhecimento; o aluno; o professor.",
        "O professor; o aluno; a relação entre os três.",
        "O professor; o conhecimento; o aluno."
      ],
      c: 2,
      e: "Tradicional: professor. Nova: aluno. Críticas: a relação, com mediação do professor.",
      x: [
        "Inverte tradicional e Escola Nova.",
        "Na tradicional o centro é o professor.",
        "Correta.",
        "Na Escola Nova o centro é o aluno."
      ]
    },
    {
      q: "Ao revisar seu plano para a prova didática, um candidato percebe que todas as atividades são exposições suas. Pela ótica da tríade didática, ele deveria:",
      o: [
        "Incluir momentos em que os alunos atuem sobre o conhecimento, equilibrando as três pontas da relação.",
        "Manter o plano, pois o professor é o centro do processo e deve conduzir toda a aula.",
        "Eliminar a exposição e deixar que os alunos descubram o conteúdo sozinhos.",
        "Aumentar a quantidade de conteúdo, aproveitando melhor o tempo de exposição."
      ],
      c: 0,
      e: "Equilíbrio entre os três vértices.",
      x: [
        "Correta.",
        "Mantém a aula centrada no professor.",
        "Vai para o extremo oposto e tira o professor.",
        "Aumentar conteúdo não resolve o desequilíbrio."
      ]
    }
  ],
  // 2. Aula como projeto colaborativo
  [
    {
      q: "Na aula como projeto colaborativo, o papel do professor é:",
      o: [
        "Apenas observar o trabalho dos alunos, intervindo somente quando for solicitado.",
        "Executar o planejamento elaborado pela coordenação pedagógica da escola.",
        "Transmitir os conteúdos e cobrar os resultados definidos no plano de ensino.",
        "Planejar e conduzir o processo, abrindo espaço para a participação dos alunos."
      ],
      c: 3,
      e: "Colaboração não é ausência do professor.",
      x: [
        "Professor ausente não é colaboração.",
        "Separar planejamento e execução é racionalidade técnica.",
        "É a concepção reprodutiva.",
        "Correta."
      ]
    },
    {
      q: "São características da aula como projeto colaborativo, EXCETO:",
      o: [
        "Diálogo constante entre professor e alunos.",
        "Problematização do conteúdo trabalhado.",
        "Corresponsabilidade pelo processo educativo.",
        "Transmissão unilateral pelo professor."
      ],
      c: 3,
      e: "Transmissão unilateral é a marca da concepção reprodutiva.",
      x: [
        "É característica.",
        "É característica.",
        "É característica.",
        "Correta (é a exceção). É o oposto do projeto colaborativo."
      ]
    },
    {
      q: "Numa disciplina de desenvolvimento web, uma prática coerente com a aula como projeto colaborativo é:",
      o: [
        "O professor demonstrar o código no projetor e os alunos copiarem passo a passo.",
        "A turma escolher, com o professor, um problema real da escola para resolver em equipe.",
        "Cada aluno resolver individualmente os exercícios de uma lista fixa de dificuldade crescente.",
        "Os alunos assistirem a videoaulas gravadas, sem mediação, no próprio ritmo."
      ],
      c: 1,
      e: "Escolha conjunta, divisão de responsabilidades e diálogo.",
      x: [
        "Copiar código é reprodução.",
        "Correta.",
        "Individual e fixo, sem construção conjunta.",
        "Sem mediação, não há projeto colaborativo."
      ]
    }
  ],
  // 3. Reprodutiva × emancipatória
  [
    {
      q: "A racionalidade técnica, criticada na obra, concebe o ensino como:",
      o: [
        "Prática social complexa e reflexiva, que exige do professor julgamento em cada situação.",
        "Construção coletiva de conhecimento entre professor e alunos, com base no diálogo.",
        "Aplicação de técnicas definidas externamente, em que o professor executa.",
        "Diálogo entre saberes de diferentes origens, como o científico e o popular."
      ],
      c: 2,
      e: "Ensino como aplicação técnica, com separação entre quem concebe e quem executa.",
      x: [
        "É a visão emancipatória.",
        "É a visão emancipatória.",
        "Correta.",
        "É a visão emancipatória."
      ]
    },
    {
      q: "A concepção emancipatória de aula tem como finalidade:",
      o: [
        "A formação de sujeitos críticos e autônomos, capazes de compreender e transformar a realidade.",
        "A memorização eficiente dos conteúdos mais cobrados.",
        "A adaptação dos alunos às exigências do mercado de trabalho.",
        "O cumprimento rigoroso do programa da disciplina."
      ],
      c: 0,
      e: "Emancipar é formar autonomia e criticidade.",
      x: [
        "Correta.",
        "Memorização é foco da concepção reprodutiva.",
        "Adaptação é lógica tecnicista.",
        "Cumprir programa não é a finalidade em si."
      ]
    },
    {
      q: "Um professor de Informática ensina comandos de Linux em formato de tutorial, passo a passo, sem explicar o funcionamento do sistema. Para tornar a aula mais emancipatória, ele poderia:",
      o: [
        "Aumentar a quantidade de comandos ensinados, cobrindo também os de administração do sistema.",
        "Usar slides mais bonitos e vídeos curtos para tornar o tutorial mais atraente.",
        "Exigir a memorização dos comandos para a prova, garantindo que fiquem gravados.",
        "Explicar o porquê dos comandos e propor problemas em que os alunos escolham quais usar."
      ],
      c: 3,
      e: "Entender o porquê e decidir é o caminho para a autonomia.",
      x: [
        "Mais do mesmo continua sendo reprodutivo.",
        "Forma não muda a concepção.",
        "Memorização reforça a lógica reprodutiva.",
        "Correta."
      ]
    }
  ],
  // 4. Dimensões técnica, humana e político-social
  [
    {
      q: "A ideia de que o ensino é multidimensional, envolvendo as dimensões técnica, humana e político-social, foi difundida na didática brasileira por:",
      o: [
        "Dermeval Saviani.",
        "Vera Maria Candau.",
        "Paulo Freire.",
        "Cipriano Luckesi."
      ],
      c: 1,
      e: "Vera Candau, em 'A didática em questão' (anos 1980).",
      x: [
        "Saviani trabalha a pedagogia histórico-crítica, não essa formulação.",
        "Correta.",
        "Freire influenciou, mas a formulação da multidimensionalidade é de Candau.",
        "Luckesi é referência em avaliação."
      ]
    },
    {
      q: "A dimensão humana do processo de ensino se refere:",
      o: [
        "Às relações interpessoais e à afetividade presentes na aula.",
        "Ao planejamento, à organização e à escolha das técnicas de ensino.",
        "Ao compromisso social do ensino e às suas consequências.",
        "Aos recursos didáticos e materiais utilizados em sala."
      ],
      c: 0,
      e: "Relação e afeto.",
      x: [
        "Correta.",
        "É a dimensão técnica.",
        "É a dimensão político-social.",
        "Recursos são parte da dimensão técnica."
      ]
    },
    {
      q: "Para a perspectiva multidimensional, o problema de uma didática que trata apenas da dimensão técnica é:",
      o: [
        "Ela não ensina a planejar, pois se limita a discutir a dimensão política do ensino.",
        "Ela valoriza demais a afetividade e as relações interpessoais na sala de aula.",
        "Ela reduz o ensino a procedimentos, como se fosse neutro.",
        "Ela é excessivamente política e afasta o professor das questões técnicas da aula."
      ],
      c: 2,
      e: "Só técnica = ensino visto como neutro e instrumental.",
      x: [
        "Ao contrário, a dimensão técnica é justamente o planejamento.",
        "A afetividade está ausente nessa visão.",
        "Correta.",
        "Ela ignora o político, não exagera nele."
      ]
    }
  ],
  // 5. Coerência no plano
  [
    {
      q: "No plano de aula, o objetivo 'compreender a importância da normalização' e a avaliação 'questão de múltipla escolha sobre a data de criação do modelo relacional' revelam:",
      o: [
        "Coerência, pois ambos tratam do mesmo tema: banco de dados e normalização.",
        "Incoerência: a avaliação não mede o objetivo.",
        "Excesso de rigor, já que a questão exige memorização de detalhe histórico.",
        "Adequação, desde que a questão seja difícil o suficiente para discriminar."
      ],
      c: 1,
      e: "A avaliação precisa medir o objetivo.",
      x: [
        "Mesmo tema não garante coerência.",
        "Correta.",
        "Não é questão de rigor.",
        "Dificuldade não corrige o desalinhamento."
      ]
    },
    {
      q: "Na elaboração de objetivos de aprendizagem, é recomendável:",
      o: [
        "Descrevê-los do ponto de vista do professor, como 'apresentar o conteúdo'.",
        "Evitar verbos, para não limitar o que pode acontecer na aula.",
        "Formulá-los em termos do que o aluno deverá ser capaz de fazer, usando verbos que indiquem ações observáveis.",
        "Copiá-los diretamente da ementa da disciplina."
      ],
      c: 2,
      e: "Objetivo centrado no aluno e verificável.",
      x: [
        "Objetivo do professor descreve atividade, não aprendizagem.",
        "Sem verbo, o objetivo fica vago.",
        "Correta.",
        "A ementa orienta, mas o objetivo da aula é mais específico."
      ]
    },
    {
      q: "Num plano de aula coerente, a escolha da metodologia deve ser feita:",
      o: [
        "Em função dos objetivos e do conteúdo, considerando os alunos.",
        "Antes da definição dos objetivos, para orientar o restante do plano.",
        "Com base no recurso tecnológico disponível no laboratório.",
        "De acordo com a preferência pessoal e a experiência do professor."
      ],
      c: 0,
      e: "Método a serviço do objetivo.",
      x: [
        "Correta.",
        "Inverte a lógica do planejamento.",
        "O recurso serve ao objetivo, não o contrário.",
        "A preferência pessoal não é critério."
      ]
    }
  ]
];
