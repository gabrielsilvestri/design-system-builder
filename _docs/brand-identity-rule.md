# Brand-identity rule

> `primary` é a cor de identidade da marca, não a cor mais usada da UI.

A cor de identidade aparece no logo, no header, no favicon e no hero. A cor mais usada da UI normalmente é a cor de link (azul, por convenção do navegador). São coisas diferentes, e confundir as duas gera design system fora da marca.

## Exemplos canônicos

| Marca | Cor de identidade | Hex | Cor de UI dominante | Por quê é diferente |
|---|---|---|---|---|
| Mercado Livre | Amarelo | `#FFE600` | Azul `#3483FA` | Logo e header amarelos; links e listings em azul (anchor padrão do browser) |
| Stripe | Roxo | `#635BFF` | Preto / cinza | Logo e gradiente do hero roxos; UI body em neutros |
| Itaú | Laranja | `#FF6200` | Navy `#000066` | Logo laranja; links em navy para preservar legibilidade |
| Spotify | Verde | `#1DB954` | Preto / cinza | Logo verde; UI predominantemente dark em neutros |
| McDonald's | Amarelo + vermelho | `#FFC72C` / `#DA291C` | Azul genérico | Identidade vermelho-amarela; links em azul padrão |
| IKEA | Azul + amarelo | `#0058A3` / `#FFDB00` | Neutros | Logo azul; UI em escala de cinza |
| Nubank | Roxo | `#820AD1` | Cinza | Logo e dashboard roxos; texto em escala de cinza |
| Inter | Laranja | `#FF7A00` | Preto / cinza | Logo laranja; UI em neutros |
| Spotify | Verde | `#1DB954` | Preto `#191414` / Branco `#FFFFFF` | Logo verde; UI escura com accent verde |
| Magalu | Azul (com hot pink de marca em pontos) | `#0066CC` | Cinza | Logo azul; identidade hot pink usada raramente como statement |

## Como o token-extractor deve decidir

1. **Olhe o nome da marca extraído** (`name`) e seu conhecimento prévio. Se você reconhece a marca, confie nisso primeiro.
2. **Olhe o background do `<header>`** e o top-band do site live. Cor que ocupa o header costuma ser identidade.
3. **Inspecione o logo SVG** (se temos). Cores de fill / stroke do logo carregam identidade.
4. **Olhe o favicon / og:image** (dica do hex predominante).
5. **Só se nenhum sinal de identidade existir**, caia pra cor de CTA mais proeminente — e marque isso com `# inferred from primary CTA color` na provenance.

## Sinais que NÃO devem decidir `primary`

- Frequência de uso (`references` count, `hex_usage`) — cor de marca é usada com parcimônia justamente porque é âncora, não dominância
- Cor de link (`a` color) — quase sempre azul por padrão do browser
- Cor de table header / row hover
- Style archetype detectado — `polaris-friendly` não significa azul; é uma classificação de tom, não de paleta

## Como o verify avisa

`_scripts/verify.mjs` roda um check de identidade: se `colors.primary` é hex de azul (`#0...` ou `#1...` na faixa azul) e o site não é finance / SaaS / Microsoft-like, abre warning pedindo confirmação. Falso-positivo é aceitável; o objetivo é forçar o operador humano a confirmar quando o sinal é ambíguo.

## Mode hybrid

Em modo `hybrid` (manual + site), o manual sempre vence. Se o manual diz "primary = laranja" e o site CSS computed mostra azul como cor mais usada, primary vai laranja. Documentar o conflito em `<cliente>/_inputs/tokens-decisions.md`.
