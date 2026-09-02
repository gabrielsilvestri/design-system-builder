# Placeholders dos stubs

Todos os arquivos `.stub` em `_template/` usam placeholders `{{NOME}}` que o `showcase-builder` ou `token-extractor` preenche antes de salvar a versão final.

Lista canônica do que cada stub usa. Mantenha esta lista sincronizada com os stubs (rode `grep -ohE '\{\{[A-Z_0-9]+\}\}' *.stub | sort -u` pra auditar).

## 1. Marca (string replace direto)

| Placeholder | Exemplo | Onde usado |
|---|---|---|
| `{{CLIENT_NAME}}` | "Vivendo de Bordado" | DESIGN, guia, index, README |
| `{{CLIENT_SLUG}}` | "vivendo-de-bordado" | README |
| `{{CLIENT_URL}}` | "https://www.vivendodebordado.com.br/" | DESIGN, guia, index |
| `{{TAGLINE}}` | "Escrevendo a sua história com bordado." | DESIGN, guia, index |
| `{{BRAND_DESCRIPTION_SHORT}}` | 1 frase | DESIGN, guia, index |
| `{{BRAND_DESCRIPTION_LONG}}` | 2 a 3 parágrafos | DESIGN, guia, index |
| `{{LANGUAGE}}` | "pt-BR" | index (atributo lang) |
| `{{THEME}}` | "light" \| "dark" \| "alternance" | DESIGN, guia, index (data-theme) |
| `{{VERSION}}` | "1.0.0" | DESIGN, guia, README, index |
| `{{UPDATED}}` | "2026-05-13" (YYYY-MM-DD) | DESIGN, guia |

## 2. Tema (string replace direto)

| Placeholder | Exemplo | Notas |
|---|---|---|
| `{{BG_DEFAULT}}` | "#ffffff" | Hex do fundo dominante; vai em `colors.surface` |
| `{{TEXT_DEFAULT}}` | "#06271f" | Hex do texto sobre o fundo; vai em `colors.on-surface` |

## 3. Paleta (5 cores nomeadas + auxiliares)

Convenção: COLOR_1..5 são as cores principais com nome de marca. O mapping pro spec DESIGN.md é:

| Slot | Mapping no DESIGN.md | Notas |
|---|---|---|
| COLOR_1 | `primary` + `on-primary` derivado | Anchor de autoridade |
| COLOR_2 | `secondary` | Variante escura de apoio |
| COLOR_3 | `tertiary` | Wordmark, links, CTA secundária |
| COLOR_4 | `surface-variant` | Highlight/accent claro, bg de seção alt |
| COLOR_5 | `neutral` | Fundo padrão (geralmente branco ou off-white) |

Para cada COLOR_N (N de 1 a 5):

- `{{COLOR_N_NAME}}`, nome de marca (ex.: "Forest", "Oliva")
- `{{COLOR_N_HEX}}`, hex em sRGB (ex.: "#06271f")
- `{{COLOR_N_PANTONE}}`, Pantone CP (ex.: "5535 CP" ou "null")
- `{{COLOR_N_RGB}}`, RGB separado por vírgula (ex.: "6, 39, 31")
- `{{COLOR_N_CMYK}}`, CMYK separado por vírgula (ex.: "84, 56, 72, 72")
- `{{COLOR_N_ROLE}}`, descrição de uso

Auxiliares estruturais (calculados pelo token-extractor):

- `{{COLOR_1_CONTAINER_HEX}}`, variante mais clara da primary, pra estado hover de `button-primary`
- `{{COLOR_1_ON_CONTAINER_HEX}}`, cor de texto sobre o container
- `{{COLOR_OUTLINE_HEX}}`, cor de borda/divider (geralmente secondary a 30% ou similar)

## 4. Tipografia (string replace direto)

| Placeholder | Exemplo | Onde |
|---|---|---|
| `{{FONT_DISPLAY_FAMILY}}` | "BN Cringe" | DESIGN, guia |
| `{{FONT_DISPLAY_WEIGHTS}}` | "300, 400, 500, 700, 900" | DESIGN, guia |
| `{{FONT_DISPLAY_USAGE}}` | "títulos hero" | DESIGN, guia |
| `{{FONT_BODY_FAMILY}}` | "Rebond Grotesque" | DESIGN, guia |
| `{{FONT_BODY_WEIGHTS}}` | "300, 400, 500, 600, 700" | DESIGN, guia |
| `{{FONT_BODY_USAGE}}` | "toda tipografia digital" | DESIGN, guia |

## 5. Voz e regras (string replace direto)

| Placeholder | Exemplo |
|---|---|
| `{{VOICE_ADJECTIVES}}` | "afetuoso, pausado, artesanal" |
| `{{VOICE_AUDIENCE}}` | "Designer brasileira de bordados artesanais" |
| `{{VOICE_EXAMPLES}}` | 2 a 3 frases tipo da marca |
| `{{VOICE_ANTIEXAMPLES}}` | 2 frases que NÃO são da marca |
| `{{RULE_1}}` ... `{{RULE_5}}` | "Use a paleta inteira" etc. |
| `{{ANTI_1}}` ... `{{ANTI_3}}` | "Não misture sharp e pill" etc. |

## 6. Blocos HTML (gerados pelo showcase-builder)

Não são string replace simples. O showcase-builder gera o HTML inteiro dinamicamente baseado em DESIGN.md e nos assets do cliente.

| Placeholder | O que vai no lugar | Quando é vazio |
|---|---|---|
| `{{FONTS_HEAD}}` | `<link rel="stylesheet" href="./fonts.css" />` se há fontes locais, ou `<link>` do Google Fonts | Nunca vazio; fallback é Google Fonts |
| `{{LOGO_HEADER_HTML}}` | `<img src="assets/logo/horizontal.svg" alt="..." height="32">` ou wordmark CSS | Se sem logo, gerar wordmark CSS com `--font-display-lg` |
| `{{LOGO_VARIATIONS_HTML}}` | Grid com horizontal/vertical/símbolo | Se sem logos, omitir o bloco |
| `{{PALETTE_SWATCHES_HTML}}` | 5 `<button class="swatch" data-hex="...">` com nome+hex+role | Sempre presente; uma cor por COLOR_N |
| `{{TYPOGRAPHY_SPECIMEN_HTML}}` | Specimens de cada level (display-lg, headline-lg/md/sm, body-lg/md/sm, label-md) | Sempre presente |
| `{{SPACING_SCALE_HTML}}` | Barras visualizando xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl | Sempre presente |
| `{{IDENTITY_STATEMENT_HTML}}` | `<section>` com citação/frase de marca em fundo primary | Omitir se cliente não tem citação canônica |
| `{{APPLICATIONS_GALLERY_HTML}}` | `<section id="applications">` com grid de JPGs | Omitir se `assets/materiais/` vazio |

## 7. Meta-placeholder (não preenchido pelo agente)

| Placeholder | Onde aparece | Quem preenche |
|---|---|---|
| `{{TAREFA}}` | `guia-marca.md` (seção "Prompt para outras IAs") | O **usuário final** ao colar o prompt em outra IA. Nunca preencher no build. |

## Como o showcase-builder usa

1. Lê DESIGN.md do cliente e extrai cores, tipografia, components
2. Lê discovery + briefing pra valores de copy (CLIENT_NAME, TAGLINE, BRAND_DESCRIPTION_*, VOICE_*, RULE_*, ANTI_*)
3. Pra string-replace simples (seções 1-5): substitui `{{NOME}}` pelo valor
4. Pra blocos HTML (seção 6): gera o HTML inteiro a partir dos tokens e assets disponíveis
5. Pra meta-placeholder `{{TAREFA}}` (seção 7): deixa literal, é pro usuário final preencher

Se faltar valor pra um placeholder de string, escrever `[a definir]` no lugar e listar no resumo de entrega pro usuário.
