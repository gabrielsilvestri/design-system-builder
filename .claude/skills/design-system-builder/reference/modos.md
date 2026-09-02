# Modos canonical vs derived

## canonical

Use quando o cliente tem **manual de marca oficial** com:

- Paleta nomeada com Pantone, RGB, CMYK
- Tipografia oficial com nomes específicos
- Regras de uso explícitas (proteção do logo, do, dont)
- Versão dos arquivos (logo SVG, símbolo, wordmark)

### Source of truth

O manual manda. Em conflito entre manual e site, o manual vence.

### Como executar

1. Descomprima o manual em `<cliente>/_inputs/manual/` (PDFs separados se possível)
2. Pague o brand-discovery pra ler cada PDF e extrair pontos canônicos
3. Use o site só pra calibrar tema (light/dark) e voz de copy
4. tokens.css/json refletem 100% do manual
5. Anote em `tokens-decisions.md` se algum hex teve que ser ajustado pra contraste

### Exemplo real

Vivendo de Bordado: manual com 5 cores Pantone (Forest, Pinheiro, Oliva, Fotossíntese, Branco), BN Cringe + Rebond Grotesque oficiais, logos SVG em vertical/horizontal/símbolo. tokens.css usa exatamente os hex do manual.

## derived

Use quando o cliente só tem **site + redes + refs visuais**, sem manual oficial.

### Source of truth

O site real do cliente, capturado via Playwright.

### Como executar

1. `node _scripts/capture-reference.mjs https://cliente.com.br <cliente>/_inputs/.screenshots`
2. O script grava: 3 screenshots em viewports diferentes, 1 mobile, e um JSON com computed styles de h1/h2/h3/p/a/button/nav
3. brand-discovery analisa o JSON + screenshots e propõe paleta
4. Cores derivadas precisam aprovação extra do usuário (sem Pantone para validar)
5. Tipografia: extrair font-family computed; se for fonte custom, perguntar ao usuário se tem os arquivos
6. Anote em `tokens-decisions.md` toda decisão (qual cor virou primary, qual virou neutro, etc.)

### Limitações

- Sem Pantone/CMYK: tokens.json fica sem esses campos
- Sem regras de uso: showcase-builder usa heurísticas (light-dominant por default, accent ≤10%, etc.)
- Sem assets oficiais: gera logos placeholder a partir do wordmark CSS

## Modo híbrido

Cliente tem manual mas site é mais sofisticado, ou vice-versa. Trate como canonical mas anote no `tokens-decisions.md` cada ponto onde o site divergiu (e qual venceu, com justificativa).
