# Comece aqui

Agente de Claude Code que constrói um design system completo a partir do site de um cliente (e, se existir, do manual de marca em PDF). Em 30 a 60 minutos entrega tokens, um `DESIGN.md` canônico, um guia de marca em português e um brandbook multipágina navegável, tudo com rastreabilidade e um score de qualidade A a F.

## Pré-requisitos

- **Node.js 18 ou mais novo** (`node -v` para conferir). Baixe em https://nodejs.org.
- **Claude Code** aberto nesta pasta (é ele que dirige o agente).
- Opcional: a skill `superpowers:brainstorming`. Se estiver instalada, o agente a usa para alinhar escopo, tema e voz antes de começar. Sem ela, o agente faz as mesmas perguntas direto.

## Primeiro uso (uma vez)

Na raiz desta pasta, rode o wizard:

```bash
node setup.mjs
```

Ele checa o Node, instala as dependências do workspace, baixa o Chromium do Playwright, instala as dependências da skill `design-md-static` e prova o linter. Se preferir manual, é isto:

```bash
npm install
npx playwright install chromium
cd .claude/skills/design-md-static && npm install && cd ../../..
```

## Como usar

1. Abra o Claude Code nesta pasta.
2. Peça em linguagem natural, por exemplo:
   - `cria o design system do cliente Acme` (com a URL do site)
   - `monta o design system a partir deste manual` (anexando o PDF)
   - `design system da https://site-do-cliente.com`
3. O agente roda o fluxo: alinha modo, tema e voz, captura o site por dois ângulos (Playwright + análise estática de CSS), monta o `DESIGN.md`, deriva os tokens, mostra um gate de aprovação com o score de qualidade, gera o brandbook e roda a verificação final.
4. A saída fica em uma subpasta com o nome do cliente aqui dentro.

### Os três modos

| Modo | Quando | Fonte da verdade |
|---|---|---|
| **canonical** | Cliente tem manual oficial em PDF | O manual |
| **derived** | Cliente só tem site | CSS vars > declarações > inferido |
| **hybrid** | Manual + site com conflitos | Manual primário, conflitos documentados |

O agente decide o modo no início e confirma com você.

## O que sai por cliente

- `DESIGN.md` canônico (machine-readable, fonte da verdade)
- `guia-marca.md` em português (Pantone, CMYK, voz, prompt para colar em outras IAs)
- `tokens.css`, `tokens.json` (DTCG) e `tailwind.config.js`, todos derivados automaticamente
- `brandbook/` multipágina navegável (index, guidelines, foundations, logo e opcionais icons, moodboard, estratégia)
- `quality-score.json` com a nota A a F

## Exemplo incluído

A pasta `Norte Design System (compartilhavel)/` é um design system pronto, para você ver o formato e a profundidade do resultado antes de rodar o seu.

## Comandos avançados

Depois de gerar um cliente, dá para operar direto:

```bash
node _scripts/export.mjs <cliente>     # re-deriva tokens do DESIGN.md
node _scripts/lint.mjs <cliente>       # linter proprio, 11 regras
node _scripts/score.mjs <cliente>      # nota de qualidade A a F
node _scripts/drift.mjs <cliente>      # compara com o site vivo (manutencao mensal)
node _scripts/verify.mjs <cliente>     # verificacao completa
```

## Onde ler mais

- `README.md`: estrutura completa, fluxo e produtos derivados.
- `CLAUDE.md`: o que o Claude Code lê ao trabalhar aqui (subagents, modos, regras).
- `_docs/`: schema do `DESIGN.md`, brand-identity rule, coverage notes, escada de maturidade.

## Se algo der errado

- Playwright não carrega fontes: confirme que o `serve.mjs` está rodando antes do `verify`.
- `export.mjs` falha: o `DESIGN.md` do cliente está sem frontmatter YAML válido.
- Lint `missing-required-slot`: falta `colors.primary` (ou outro slot obrigatório) no `DESIGN.md`.
- Subagent volta vazio: cheque a permissão de leitura no caminho do input.
