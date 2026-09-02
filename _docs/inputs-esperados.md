# Inputs esperados do usuário

Pergunte tudo isso no brainstorm inicial. Se o usuário não souber, marcar como `[a definir]` e seguir.

## Obrigatórios

1. **Nome do cliente** (oficial, como aparece em documentos)
2. **Slug** (kebab-case, ex.: `vivendo-de-bordado`)
3. **URL do site oficial**
4. **Tema dominante do showcase**: light / dark / alternance

## Fortemente recomendados

5. **Manual de marca**: PDF, link, ou "não temos"
6. **Assets oficiais**: pasta com logos SVG, ou "vamos extrair do site"
7. **Fontes oficiais**: pasta com TTF/OTF, ou nome das fontes (pra usar Google Fonts), ou "indeterminado"
8. **Tagline oficial**: frase exata
9. **Voz de marca**: 3 a 5 adjetivos que descrevem o tom

## Úteis

10. **Público-alvo**
11. **Materiais de aplicação reais**: JPGs de posts, banners, stories
12. **Anti-references**: marcas/sites que NÃO são a vibe
13. **Destino do output**: handoff para dev, conectar com IAs, deploy próprio

## Perguntas que a skill faz automaticamente

A skill orquestradora roda `superpowers:brainstorming` que vai cobrir isso de forma estruturada. Não precisa decorar a lista, mas ter em mente acelera.

## Sinais de que faltam inputs críticos

Se acontecer qualquer um destes, pause e peça mais:

- Cliente sem manual e sem site funcionando → não dá pra extrair nada, peça refs visuais ou desista
- Cliente com fonte custom não-licenciada → use fallback Google Fonts e documente
- Cliente quer "uma cara totalmente nova" → não é trabalho de design system, é rebrand. Encaminha pra `superpowers:brainstorming` puro
