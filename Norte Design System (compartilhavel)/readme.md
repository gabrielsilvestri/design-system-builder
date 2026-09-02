# Norte · Design System

Ghost in the Shell / cyberpunk **neon glass**. A linguagem visual do painel das finanças do casal (Pessoa A e Pessoa B). Tudo existe pra uma coisa: o casal abrir e ter **norte** em segundos, com calma, sem ansiedade. É a "wired" do casal: um instrumento de leitura (cockpit de mecha dos anos 90: GITS, Gundam), **não** uma planilha.

> Marca interna do projeto: **Mecha Design System** · produto: **Norte** (家計システム — sistema financeiro doméstico).

## Fontes deste sistema
Reconstruído a partir do codebase fornecido (read-only, montado via File System Access API):
- `design-system/DESIGN.md` — guia de identidade, regras de cor, proibições, princípios.
- `design-system/tokens.css` — variáveis (3 camadas: primitivo → semântico → componente).
- `design-system/norte.css` — componentes (`.nt-*`).
- `design-system/styleguide.html` — guia visual vivo.

Sem Figma, sem logos binários, sem decks. Os tokens e componentes aqui são porte fiel dos arquivos acima.

---

## CONTENT FUNDAMENTALS — como a cópia é escrita

- **Idioma:** Português do Brasil, **sempre com acentos**. Tom de quem fala com o casal, calmo e direto.
- **Pessoa:** fala do casal, no plural implícito — "o que temos", "o que devemos", "o que a vida custou". Pessoa individual (Pessoa A, Pessoa B) só aparece como **contexto**, nunca como o número principal.
- **Caixa:** títulos de card em **CAIXA ALTA** com tracking (`Saldo em conta`→ "SALDO EM CONTA"). Corpo e legendas em caixa normal.
- **Tom:** factual e tranquilizador, nunca alarmista. "atenção fria, não alarme". Datas explícitas ("venc 10/07", "fech 30/06") porque saldo e fatura são **informados**, nunca estimados.
- **Vocabulário fixo:** *temos* (entra/saldo) · *devemos* (sai/dívida) · *tanque* (reserva a encher) · *guardado* (aporte, não "gasto") · *quem fez* (receita por pessoa).
- **Pontuação:** **nunca travessão** (— ou –). Use "·" como separador inline e "/" em datas. Sinal de menos real "−" nos valores negativos.
- **Sem emoji.** Jamais. A textura vem de katakana, brackets e telemetria.
- **Selos katakana** acompanham cada leitura (rótulo de telemetria): 残高 saldo · 支払 pagamento · 燃料 combustível · 収入 receita · 生活費 custo de vida · 目標 objetivo · 負債 dívida · 月次 mensal.
- **Exemplos reais:** "o que temos agora" · "vence nos próximos 7 dias" · "separado do gasto do mês" · "toque pra definir a meta ativa do mês" · "quase empatados".

---

## VISUAL FOUNDATIONS

**Cor.** Paleta **azul + violeta** sobre base escura tintada de violeta-azul (paleta fria, nada quente). Azul ciano (`--color-accent`) = estrutura, "o que temos", Pessoa A, medidores. Violeta neon (`--color-accent-2`) = destaque, Pessoa B, "o que devemos". **Positivo = azul; atenção = violeta** (atenção fria, não alarme). Vermelho (`--color-danger`) é **reservado só pra insolvência real** — nunca decorativo.
**Proibido (gatilhos):** verde matrix/terminal · cursor piscando/blink · dourado/mostarda/marrom · glow nos números · branco puro aceso · navy+gold ou blue+green saturado de fintech genérica.

**Tipo.** Display = **Chakra Petch** (títulos de card, marca, rótulos de HUD). Mono = **IBM Plex Mono** (corpo + **todos os valores**, `tabular-nums`). Escala `--p-fs-2xs` (.66rem) a `--p-fs-2xl` (2rem); **piso de leitura `--p-fs-base` 1rem** — conteúdo nunca menor. Títulos em caixa alta com tracking `.13em` e glow sutil; valores limpos, sem glow.

**Espaço & raio.** Grade 4/8 (`--p-sp-1..6`, 4→24px). Raio **discreto** (`--p-r-sm` 2px, `--p-r-md` 3px) — cantos quase retos; os **brackets de canto** fazem a leitura de moldura.

**Fundos.** A superfície (`.nt-surface`) é seis camadas: scanline CRT sutil + grade vertical e horizontal de 48px + radial azul no topo-direito + radial violeta no rodapé-esquerdo, sobre o void. Telemetria, não gradiente decorativo de fundo cheio.

**Vidro & blur.** Cards usam `backdrop-filter: blur(11px)` sobre um gradiente sutil de acento. Transparência e blur servem pra dar profundidade de "vidro holográfico", não estética glassmorphism de loja.

**Bordas.** 1px em `--surface-line` (acento a 80% transparente) para divisores; `--surface-line-str` (62%) para bordas de card. Brackets de canto em 2px de acento sólido (topo-esquerdo + inferior-direito de todo módulo).

**Sombras / glow.** Sombra de card = glow externo sutil de acento + glow interno (`inset`). Glow (`--glow` = mix do acento a 45%) vive em molduras, barras de medidor, títulos e ícones — **nunca nos dígitos** (`--value-glow: none`, decisão absoluta).

**Cantos / cards.** Card = gradiente diagonal sutil de acento sobre painel, borda fina, brackets luminosos, blur. Raio mínimo. Tile e chip seguem o mesmo, mais discretos (`--tile-bg` = acento a 93% transparente).

**Estados.** Hover de tile/chip: borda mais forte (`--surface-line` → `--surface-line-str`), transição `.15s`. Ativo: borda de acento sólida + glow + badge "ATIVA" (tile) ou cor de acento (chip "agora"). Press: sem encolher; a mudança é de cor/glow, fiel ao instrumento. **Nunca blink.**

**Animação.** Mínima e funcional — transições curtas de cor/borda em hover/ativo. Sem bounce, sem loop decorativo, sem cursor piscando.

**Layout.** Disposição 03 (sidebar grid): coluna de status alta (Saldo / Dívidas) + grade de leituras, HUD no topo, histórico em faixa no rodapé. Padrão de card **não-negociável: total grande no topo + detalhe abaixo, um número dominante por card.**

**Vibe da imagem.** Não há fotografia. A "imagem" é a própria telemetria: grade, scanline, radiais frias azul/violeta, katakana. Frio, escuro, holográfico.

---

## ICONOGRAPHY

O codebase **não tem fonte de ícone, sprite, nem arquivos PNG/SVG** — toda iconografia é **inline e vetorial**, herdando cor + glow do acento. Aborde assim:

- **Ícones de objetivo** (`Tile`): `<svg>` inline, traçado (`stroke="currentColor"`, `fill="none"`), peso **1.7**, cantos arredondados (`stroke-linecap/linejoin: round`), 17px dentro de uma caixa de 30px com borda de acento e `drop-shadow` de glow. Ex.: escudo (reserva), pata (pet), avião (viagem), casa (apê).
- **Crown** (`Crown`): único ícone **preenchido** (violeta) — marca quem contribuiu mais; leva `drop-shadow` violeta.
- **Marcas unicode:** `◢` (mark do título de card), `▸` (marcador de chave de linha). Glyphs, não imagens.
- **Selos katakana:** texto, não ícone — rótulo de telemetria por leitura (ver lista acima).
- **Logo:** o hexágono "N" não é arquivo — é CSS (`clip-path: polygon(...)` com gradiente azul→violeta). Veja `guidelines/brand-mark.html` e o componente `Hud`.
- **Emoji:** **nunca.**

Ao criar telas novas, **mantenha o padrão de traçado** (currentColor, 1.7, round) para qualquer ícone adicional — combine com Lucide/Feather (mesmo peso) se precisar de um conjunto maior, e sinalize a substituição. Não desenhe ícones fora desse padrão.

---

## ÍNDICE / manifesto do sistema

**Entrada global:** `styles.css` (só `@import`s).

**Tokens** (`tokens/`): `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`. Três camadas — primitivo (`--p-*`) → semântico (papéis) → componente (`--card-*`, `--meter-*`, `--tile-*`, `--hud-*`).

**Componentes** (`components/`, namespace `window.NorteDesignSystem_23eb33`):
- `surface/` — **Surface** (fundo cockpit), **Hud** (barra de status).
- `card/` — **Card** (módulo glass), **Value** + **Sub** (número dominante + legenda), **Row** + **Rows** (linha de detalhe), **Group** (subtotal).
- `data/` — **Meter** (tanque), **Split** (proporção de dois), **Crown** (marca quem fez).
- `goals/` — **Tile** (objetivo, com estado ativo), **Chip** (mês do histórico).
- `instruments/` — **Radar** (scope de busca com varredura giratória, blips e target lock). *Em expansão: Gauge, Horizon, Waveform, Schematic + grupo `system/` (Light, Toggle, Readout) — para o painel-cockpit da unidade.*

**UI kit** (`ui_kits/norte/`): `index.html` + `Panel.jsx` — recriação interativa do painel real (disposição 03).

**Specimens** (`guidelines/`): cards de fundação para a aba Design System — Colors, Type, Spacing, Brand.

**Skill:** `SKILL.md` — torna este sistema utilizável como Agent Skill.

### Caveat de fontes
Chakra Petch e IBM Plex Mono carregam do Google Fonts (são as faces reais da marca; não há binários no codebase). Consumidores offline precisam baixar os `.ttf` e trocar `tokens/fonts.css` por `@font-face` locais.
