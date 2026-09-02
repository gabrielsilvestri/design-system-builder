# Modos: canonical · derived · hybrid

Decida no preflight. Anuncie. Não muda silenciosamente no meio do flow.

## canonical

Cliente tem manual oficial. Source of truth: manual. Site só calibra tema digital e voz.

Sinais:
- Cores com Pantone, RGB, CMYK escritos
- Fontes com nome específico e weights documentados
- Regras de proteção do logo (clear space, contextos)
- Do / Don't escritos

Discovery despacha 3 jobs:
1. Agent(brand-discovery) modo PDF -> `_inputs/discovery-manual.md`
2. `node _scripts/capture-reference.mjs` -> `_inputs/.screenshots/` + computed-styles.json
3. `node _scripts/static-extract.mjs` -> `_inputs/static/` (google-spec + 18 detection JSONs)

Token-extractor: manual vence em conflitos. Confidence high pra tokens do manual.

Exemplo: Vivendo de Bordado.

## derived

Cliente só tem site. Source of truth: site, capturado via static-extract + Playwright.

Sinais:
- Não tem manual
- Fontes são Google / sistema, detectadas via @font-face
- Cores extraídas via CSS vars / declarações

Discovery despacha 2 jobs:
1. `node _scripts/capture-reference.mjs`
2. `node _scripts/static-extract.mjs`

Token-extractor: CSS vars > declarações > inferido. Confidence varia. Pantone/CMYK ficam `null` em `colors.named` (não inventar).

Cuidado especial: aplicar a brand-identity rule explicitamente. Em modo derived é fácil pegar a cor mais usada de UI (azul de link) como `primary`, mas isso é errado. Primary é a cor de identidade (logo, header, favicon).

Exemplo: uma marca com manual visual digital publicado no site (mas sem PDF formal).

## hybrid

Cliente tem manual mas o site é mais sofisticado (ou vice-versa). Conflitos detectados entre manual e site computed/CSS.

Sinais:
- Manual existe E site existe E há divergência em pelo menos uma categoria
- Manual diz cor X, site renderiza cor Y
- Manual lista fonte A, site usa fonte B

Discovery despacha 3 jobs igual canonical, mas o token-extractor:
- Manual primário em tokens canônicos
- Site secundário (segunda voz no `tokens-decisions.md`)
- Cada conflito documentado em `<cliente>/_inputs/tokens-decisions.md` com formato:

```markdown
## <Nome da decisão>

- Categoria: cor / tipografia / spacing / etc
- O que: descrição do conflito
- Manual diz: <valor>
- Site computed diz: <valor>
- Static-extract diz: <valor> (com confidence high/medium/low)
- Escolha: <qual venceu e por quê>
```

Exemplo típico: manual lista Pantone 5535 CP mas site renderiza um hex levemente diferente. Manual vence, mas registramos a diferença pra cliente decidir se atualiza o site.

## Tabela de decisão rápida

| Tem manual PDF? | Tem URL? | Modo |
|---|---|---|
| sim | sim, mesmas decisões | canonical |
| sim | sim, conflitos detectados | hybrid |
| sim | não | canonical (só PDF) |
| não | sim | derived |
| não | não | abortar, pedir mais inputs |

## Confidence ladder por modo

| Modo | Token vindo do manual | Token vindo de CSS var | Token vindo de declaration | Token inferido |
|---|---|---|---|---|
| canonical | high | high (se bate com manual) | medium | low |
| derived | n/a | high | medium | low |
| hybrid | high (manual venceu) | medium (mesmo que high, conflito reduz) | medium | low |

## Detalhes completos

Ver `.claude/skills/design-system-builder/reference/modos.md` (snapshot) e `_docs/brand-identity-rule.md` (regra crítica para modo derived).
