# ifsp26

Painel de estudos para o concurso docente do IFSP (Edital 183/2026), área de Informática, campus Boituva.

## O que tem

- **Painel:** contadores (fim das inscrições, objetiva, didática), evolução dos estudos, próximos eventos e registro de horas de estudo.
- **Estudos:** divisões da prova. Pedagogia tem um card por obra da bibliografia oficial, com resumo, conceitos-chave e 5 questões no estilo IF. Legislação e Informática estão com a estrutura pronta.
- **Agenda:** cronograma previsto do edital.
- **Documentos:** links oficiais (edital, retificação, conteúdo programático, leis).

## Estrutura

```
public/
  index.html        página
  style.css         visual
  app.js            funcionamento
  data/base.js      agenda, links, áreas e legislação
  data/pedagogia.js cards e questões de autor (pedagogia)
  data/conceitos.js explicação dos conceitos-chave
  data/qconc-*.js   questões por conceito-chave (3 por conceito)
wrangler.jsonc      configuração do Cloudflare (publica a pasta public/)
```

Para mudar uma data, um link ou uma questão, edite só os arquivos em `public/data/`.

## Progresso

Fica salvo no navegador (localStorage). Para levar de um aparelho para outro, use **Exportar backup** e **Importar backup** no rodapé.

## Publicação

Site estático, sem build. O Cloudflare publica a pasta `public/` a cada push na `main`.
