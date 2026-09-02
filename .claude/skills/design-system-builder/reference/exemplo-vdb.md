# Exemplo: Vivendo de Bordado

Case real que motivou esta skill. Use como referência ao operar em modo canonical.

## Inputs recebidos

- Manual de marca em PDF (cores.pdf, toolkit.pdf, home_site.pdf)
- Pasta `Branding - VDB` com logos SVG (vertical, horizontal, símbolo, em branco e verde)
- Fontes oficiais (BN Cringe TTF, Rebond Grotesque OTF, 13 arquivos)
- 9 JPGs de aplicação (banner YouTube, posts, stories, timbrado, perfil)
- URL: https://www.vivendodebordado.com.br/

## Decisões importantes

| Decisão | O que aconteceu | Lição |
|---|---|---|
| Tema light vs dark | Inicial heurístico foi dark-dominant. Usuário corrigiu: "Tema é light". | Sempre perguntar tema antes de começar. |
| Cor "cream" #fcf8d8 | Extraí de um screenshot de fonte sem perceber que era background do preview. Manual disse branco puro. | Não confiar em extração automática de PNG quando o manual existe. |
| Cor "moss" #36745d | Inventei. Oficial é Oliva #3b7e65. | Em modo canonical, nunca inventar hex. |
| 11 cores inicial | Cheguei a 11 cores derivadas. Oficial: 5. | Respeitar o número exato do manual; tints derivados ficam como `--cor-90`, não como cores nomeadas. |
| Fontes substitutas | Usei Fraunces + Geist como fallback. Cliente tinha BN Cringe + Rebond locais. | Sempre perguntar se fontes oficiais estão disponíveis localmente. |

## Output final

Estrutura entregue em `<cliente>/`:

```
design-system/
├── index.html               (88 KB, 11 seções light-dominant)
├── design.md                (16 KB, spec completa + prompt LLM)
├── tokens.css               (variáveis CSS + alphas derivados)
├── tokens.json              (DTCG com meta.brand)
├── fonts.css                (5 BN Cringe + 8 Rebond @font-face)
├── fonts/                   (TTF + OTF)
└── assets/
    ├── logo/                (8 SVGs)
    └── materiais/           (9 JPGs)
```

## Estrutura do index.html (light-dominant, 11 seções)

1. Sticky header com logo SVG e nav
2. Hero card Forest com tagline e CTA pill
3. Brand identity (logo horizontal/vertical/símbolo + tagline em display)
4. Palette (5 swatches click-to-copy)
5. Typography (specimen display + escala completa)
6. Spacing scale
7. Components (botões pill, cards, eyebrows)
8. Identity statement (citação de Schopenhauer em fundo Forest)
9. Applications gallery (9 JPGs em grid)
10. Do/Dont com exemplos visuais
11. Tokens (4 tabs: CSS, JSON, Tailwind, Figma)
12. Integration (snippet pra @import em outro projeto)
13. Footer com link pro site

## Push do resultado

Repo privado `mikaelhadler/vivendodebordado-crm`, subpasta `design-system/`, commit direto em main. O usuário escolheu subpasta porque o repo é do CRM mas vão querer o design system disponível como referência ali.

## URLs e refs

- Sales page: https://www.vivendodebordado.com.br/
- Repo: https://github.com/mikaelhadler/vivendodebordado-crm/tree/main/design-system
