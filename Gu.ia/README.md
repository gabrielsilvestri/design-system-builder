# Gu.ia · design system

Design system do painel novo da Gu.ia, o SaaS da Claudia Barradas. Tema claro único, acento único roxo, cada cor com razão de contraste medida.

## O que tem aqui

| Arquivo | O que é |
|---|---|
| `DESIGN.md` | canônico, schema v2. Tudo sai daqui. |
| `guia-marca.md` | a versão em português, para a cliente e para o time. |
| `tokens.css` | custom properties, com a razão medida no comentário de cada cor. |
| `tokens.json` | formato DTCG do W3C. |
| `tailwind.config.js` | `theme.extend` apontando para as mesmas variáveis, com a razão medida no comentário. |
| `fonts.css` + `assets/fontes/` | Anybody, Hanken Grotesk e IBM Plex Mono em woff2 local. |
| `assets/logo/` | selo, versão de contorno e lockup horizontal em SVG. |
| `brandbook/` | index, guidelines, foundations, logo e components, navegáveis. |
| `quality-score.json` | nota A a F em 7 categorias. |
| `screenshots/` | capturas de conferência em 1440 e 390. |

## Como abrir

```bash
cd "Agentes e Skills/skills/Criador Design System"
node _scripts/serve.mjs Gu.ia 4180
# http://localhost:4180/brandbook/
```

## Como mexer

Nunca editar `tokens.css`, `tokens.json` nem `tailwind.config.js` à mão. O ciclo é:

```bash
node _scripts/export.mjs Gu.ia            # gera os três derivados do DESIGN.md
node _scripts/medir-cor.mjs anotar Gu.ia  # escreve a razão medida em cada cor do tokens.css e do tailwind.config.js
node _scripts/lint.mjs Gu.ia
node _scripts/score.mjs Gu.ia
node _scripts/verify.mjs Gu.ia 4180       # com o serve.mjs rodando
```

Cor nova se mede antes de entrar:

```bash
node _scripts/medir-cor.mjs oklch 0.52 0.19 293          # OKLCH para hex
node _scripts/medir-cor.mjs medir "#633ab6" "#f4f3f9" "#fbfbfe" "#eeecf5"
```

As razões que o `anotar` escreve vêm do bloco `contrast_notes:` do `DESIGN.md`, então é lá que elas se corrigem.

## Handoff

O consumidor imediato é o protótipo E em `Clientes/Claudia Barradas/auditoria-ux/prototipos/e-painel-por-ferramenta/`, e o consumidor final é o front de produção (Next.js com Tailwind). `brandbook/_shared/components.css` carrega os nomes de classe do protótipo de propósito: trocar a raiz de tokens adota o sistema sem renomear marcação.
