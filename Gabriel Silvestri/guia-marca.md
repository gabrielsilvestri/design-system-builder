# Gabriel Silvestri, guia de marca (PT)

> Tiro do manual o que já devia estar automático no negócio de quem já vende.

Versão 1.0.0 (2026-09-06).
Site oficial: https://bio.gabrielsilvestri.com.br

**Este é o guia complementar em português.** O artefato canônico, machine-readable, é o
`DESIGN.md` ao lado deste arquivo. Este guia adiciona o que não cabe no schema: RGB e CMYK
explícitos, a razão de contraste de cada par, voz em PT, anti-referências, o raciocínio de
por que a paleta é assim, e um prompt pronto para colar em qualquer IA.

Para IAs e agentes técnicos: leiam o `DESIGN.md`. Ele tem token references resolvíveis e
passa pelo linter do workspace.
Para humanos (designer, copywriter, o próprio dono): este guia é mais legível.

## 1. Identidade

Gabriel Silvestri vende implementação de IA e mentoria de orquestração de agentes para
infoprodutor que já fatura. O inimigo declarado da marca é o manual: o trabalho que já
devia estar automático e continua dependendo dele. Não é uma marca de ferramenta, é uma
marca de pessoa, e por isso o sistema de identidade é tipográfico: o nome dele composto em
Hanken Grotesk, sem logo desenhado.

A peça principal é lida no celular, dentro do navegador do Instagram, por alguém que estava
rolando o feed trinta segundos atrás. Todo o sistema é calibrado para esse momento:
superfície escura, cartões grandes e bem separados, uma cor só dizendo onde tocar, e nada
que peça um segundo de atenção a mais do que precisa.

Edição atual: **Esmeralda 2026**. Tema canônico: **dark**. A edição light existe e está
medida, mas o dark é o que manda.

## 2. Como uma IA deve usar este documento

1. **Paleta é canônica.** Use só os hex das seções 3 e 4. Nunca invente cor nova.
2. **Um acento só, travado.** O esmeralda `#4CC28F` é a única cor de ação da página inteira, do topo ao rodapé. O turquesa é família tonal, não é um segundo acento.
3. **Tipografia é canônica.** Hanken Grotesk em display e títulos, Geist em corpo. Hierarquia se faz por peso, tamanho e tinta, nunca por troca de família.
4. **Tema dominante: dark.** Grafite esverdeado, nunca preto puro, nunca cinza azulado.
5. **Português com acento.** `é`, `são`, `não`, `código`, `ação`. Sem exceções.
6. **Pontuação:** nunca usar en dash nem em dash. Substituir por parênteses, vírgula, dois-pontos ou frase separada.
7. **Rótulo de interface em caixa baixa.** Botão, aba, item de menu. Caixa alta só no rótulo técnico micro, com 0.1em de tracking.
8. **Espaçamento em rem**, pela escala de tokens, nunca valor arbitrário e nunca px.
9. **Quando faltar informação:** marcar `[a definir]` em vez de inventar.
10. **Contraste é calculado, não estimado.** Par novo passa por `_inputs/medir-contraste.mjs` antes de entrar.

## 3. Paleta, edição dark (canônica)

Pantone: não definido. Não existe manual impresso nem aplicação em papel, e atribuir um
Pantone sem prova seria inventar. CMYK abaixo é conversão direta de RGB, sem perfil de
impressão: serve de ponto de partida, não de especificação gráfica.

| Nome | Hex | Pantone | RGB | CMYK aprox. | Uso |
|---|---|---|---|---|---|
| esmeralda | `#4CC28F` | não definido | 76,194,143 | 61,0,26,24 | o acento único: ação, foco, estado |
| on-esmeralda | `#0E1A16` | não definido | 14,26,22 | 46,0,15,90 | a tinta sobre o esmeralda cheio |
| superfície | `#151C1B` | não definido | 21,28,27 | 25,0,4,89 | o canvas |
| superfície-cartão | `#1E2726` | não definido | 30,39,38 | 23,0,3,85 | o cartão em repouso |
| tinta | `#C7D0CF` | não definido | 199,208,207 | 4,0,0,18 | título e alta ênfase |

### O sistema completo, com o contraste medido

Piso WCAG 2.2 AA: 4,5:1 em texto de corpo, 3:1 em texto grande e em componente de
interface. As razões são sobre o canvas `#151C1B`.

**Superfícies**

| Token | Hex | Matiz | Papel |
|---|---|---|---|
| superfície | `#151C1B` | 171 | o canvas |
| superfície-cartão | `#1E2726` | 173 | o cartão em repouso |
| superfície-alta | `#252F2E` | 174 | o cartão sob o dedo, cabeçalho de caixa |
| pílula | `#283332` | 175 | a pílula de ação secundária |
| superfície-tinta | `#1C2926` | 166 | aviso, callout, faixa de destaque calmo |

**Tinta**

| Token | Hex | Contraste | Papel |
|---|---|---|---|
| tinta | `#C7D0CF` | 11,00:1 | título e alta ênfase (este é o teto do sistema) |
| tinta-corpo | `#A9B4B3` | 8,13:1 | corpo de texto longo |
| tinta-meta | `#929E9D` | 6,26:1 | metadado, rótulo, legenda |

**O acento, em três papéis**

| Token | Hex | Contraste | Papel |
|---|---|---|---|
| esmeralda | `#4CC28F` | 7,76:1 | preenchimento de ação, marcador de estado |
| esmeralda-texto | `#67CBA0` | 8,75:1 | o esmeralda quando vira TEXTO ou anel de foco |
| esmeralda-fundo | `#358D67` | 4,25:1 | só preenchimento decorativo. Proibido como texto |

**Linhas**

| Token | Hex | Contraste | Papel |
|---|---|---|---|
| fio | `#2F3A38` | 1,47:1 | decorativa: fecha o cartão |
| fio-alto | `#3D4A49` | 1,87:1 | decorativa: divisor interno de lista |
| contorno | `#6A7E7C` | 3,75:1 | a fronteira que carrega significado (campo, controle) |

**Status**

| Token | Hex | Contraste | Papel |
|---|---|---|---|
| erro | `#E77987` | 6,16:1 | erro |
| atenção | `#EF8F80` | 7,34:1 | atenção, em coral (âmbar é vetado) |
| informativo | `#6CC6C3` | 8,65:1 | turquesa de sinal. Nunca vira botão |
| sucesso | `#4CC28F` | 7,76:1 | o próprio esmeralda: a marca já é verde |

## 4. Paleta, edição light

O dark é o canônico. A edição light existe para documento longo, PDF e página impressa, e
está medida com os mesmos pisos. Ela vive dentro do mesmo `tokens.css`, com o prefixo
`--color-light-*`, gerada pelo mesmo `export.mjs`.

| Token | Hex | Contraste sobre `#F9FBFB` | Papel |
|---|---|---|---|
| light-surface | `#F9FBFB` | | o canvas claro |
| light-surface-variant | `#F1F6F5` | | o cartão em repouso |
| light-superfície-alta | `#E8EFEF` | | o cartão sob o dedo |
| light-superfície-tinta | `#E7F3EF` | | callout e faixa de destaque |
| light-tinta | `#1B2826` | 14,67:1 | título e alta ênfase |
| light-tinta-corpo | `#435654` | 7,49:1 | corpo |
| light-tinta-meta | `#576B69` | 5,45:1 | metadado e legenda |
| light-esmeralda | `#4CC28F` | 2,15:1 | SÓ preenchimento, com tinta escura em cima |
| light-esmeralda-texto | `#1C7853` | 5,24:1 | o esmeralda quando vira texto |
| light-outline | `#6F8B88` | 3,53:1 | fronteira de controle |
| light-erro | `#B02145` | 6,42:1 | erro |
| light-atenção | `#BE3927` | 5,32:1 | atenção |
| light-informativo | `#226D6D` | 5,82:1 | informativo |

Atenção ao único par que muda de comportamento: no dark o esmeralda funciona como texto; no
light ele **não** funciona (2,15:1 sobre o canvas claro). Na edição light, esmeralda é
preenchimento e o texto verde é `#1C7853`.

## 5. Por que esta paleta não parece IA genérica

Vale escrever, porque é a pergunta que o dono fez e é o que se perde primeiro quando outra
pessoa (ou outra IA) mexe no sistema.

**Os neutros carregam a temperatura da marca.** A versão anterior do link na bio tinha os
cinzas em matiz 192 a 204, cinza azulado, o mesmo cinza de qualquer tela de login e de
qualquer produto de IA lançado no ano passado. Todos foram rotacionados para a faixa 166 a
178, preservando a luminosidade que já funcionava. O sistema inteiro ficou levemente
esverdeado sem que nenhuma superfície virasse colorida. A identidade mora nos neutros: se
alguém trocar só o acento e deixar os cinzas azuis, a página volta a parecer template.

**A profundidade vem de camada e de borda de 1px, não de sombra colorida.** Um sistema que
constrói profundidade com glow precisa de cor onde não há informação nenhuma, e é
exatamente aí que a estética de IA genérica mora. Aqui o cartão se separa da página por
degrau de fundo (`#151C1B` para `#1E2726` para `#252F2E`) mais um fio de 1px, e nada mais.

**O acento aparece pouco, em pouca área, com contraste alto.** O esmeralda ocupa menos de
10% da tela em qualquer página deste sistema. Cor de marca que cobre metade da tela deixa
de ser âncora e vira fundo.

**E a hierarquia entre as duas cores do pedido é explícita:** o esmeralda é o acento, o
turquesa é a família. Turquesa não disputa o mesmo trabalho. Ele é o que dá temperatura ao
cinza, o que tinge a superfície de callout e o que sinaliza estado informativo. Consequência
prática, e ela é lei: **nenhuma página deste sistema ganha um botão de outra família de cor
em nenhuma seção.**

## 6. Tipografia

### Display e títulos: Hanken Grotesk

Peso usado: 600. O arquivo é variável (100 a 900), subset latin, 34,7 KB, self-hosted em
woff2. x-height alta e aberturas abertas, então ela segura tamanho grande com tracking
negativo forte sem fechar o contraforma. É o que faz um título de 40px caber numa tela de
390px e continuar legível.

### Corpo: Geist

Pesos usados: 400, 500 e 600. Arquivo variável, subset latin, 29,4 KB, self-hosted. Foi
desenhada para tela: `l`, `1` e `I` não se confundem, os numerais são tabulares e o desenho
é otimizado para alta densidade de pixels. É o que segura descrição de cartão em 15px no
celular.

Os dois arquivos somam 62,6 KB. Nenhuma das duas está na lista de fontes vetadas da casa, e
o sistema não usa serifada em lugar nenhum.

### Escala completa

Tracking é específico por tamanho (nunca um valor só para tudo) e leading afrouxa conforme o
tamanho cai. Tudo em rem, para escalar junto com a preferência de tamanho de texto do
usuário.

| Nome | Tamanho | Peso | Leading | Tracking | Família |
|---|---|---|---|---|---|
| display-hero | 3.5rem (56px) | 600 | 1.02 | -0.035em | Hanken Grotesk |
| display-large | 2.5rem (40px) | 600 | 1.06 | -0.03em | Hanken Grotesk |
| section-heading | 1.75rem (28px) | 600 | 1.14 | -0.025em | Hanken Grotesk |
| subheading-large | 1.3125rem (21px) | 600 | 1.22 | -0.02em | Hanken Grotesk |
| subheading | 1.1875rem (19px) | 600 | 1.25 | -0.018em | Hanken Grotesk |
| body-large | 1.0625rem (17px) | 400 | 1.55 | -0.002em | Geist |
| body | 1rem (16px) | 400 | 1.5 | 0 | Geist |
| body-small | 0.9375rem (15px) | 400 | 1.55 | 0.002em | Geist |
| button | 0.9375rem (15px) | 600 | 1.2 | 0.005em | Geist |
| button-small | 0.875rem (14px) | 600 | 1.3 | 0.01em | Geist |
| link | 1rem (16px) | 500 | 1.5 | 0 | Geist |
| caption | 0.875rem (14px) | 500 | 1.4 | 0.01em | Geist |
| caption-small | 0.8125rem (13px) | 500 | 1.4 | 0.02em | Geist |
| micro | 0.75rem (12px) | 600 | 1.25 | 0.1em | Geist, CAIXA ALTA |

**Piso de tamanho:** 12px só existe em caixa alta com 0.1em de tracking, porque a altura de
caixa alta faz o micro ler como um 14px em caixa baixa. Fora desse caso, o piso é 13px.

**Measure:** 66 caracteres por linha, com piso de 45 e teto de 75. O token é
`--space-measure` e ele se aplica no elemento de texto (`<p>`, `<li>`, legenda), **nunca no
container**. Container com teto em `ch` quebra a grade e deixa de proteger a linha quando o
texto divide espaço com outra coluna. Fontes da faixa: Bringhurst, Baymard e WCAG 2.2 SC
1.4.8.

**Órfãs:** `text-wrap: balance` no display e no título, `pretty` no corpo. Título de duas
linhas com uma palavra sozinha na segunda é o erro mais visível da marca no celular.

## 7. Espaçamento, raio, sombra e movimento

**Espaçamento**, tudo em rem: 0.25, 0.5, 0.875 (margem da página), 1.25 (padding do
cartão), 1.625 (quebra de seção), 2.5, 4, 6, 8. Mais `gutter` de 0.625rem entre cartões
irmãos. O respiro entre seções é sempre maior que o respiro entre itens da mesma seção, sem
exceção: é o que faz cada grupo ler como uma coisa só.

**Raio:** 0.5rem em elemento pequeno, 0.75rem em campo e botão fantasma, 1.125rem em todo
cartão (é o raio da marca), raio total na pílula de ação.

**Sombra:** praticamente nenhuma. Nenhum valor do sistema passa de 0,05 de opacidade, e o
padrão de todo componente é `flat`. Sombra só entra em elemento que flutua de verdade sobre
conteúdo (menu aberto, toast). Elevação de cartão é degrau de superfície mais fio.

**Movimento:** o pressionar é `transform: scale(.985)` em alvo grande, entrando em 120ms na
curva `cubic-bezier(.22,.61,.36,1)` e voltando em 260ms na curva espelhada
`cubic-bezier(.64,0,.78,.39)`. O que entra por um caminho sai pelo mesmo caminho. Painel que
entra pela direita sai pela direita; popover ancora o `transform-origin` no elemento que o
abriu. Tudo respeita `prefers-reduced-motion`.

**Foco:** anel de 2px em `#67CBA0` com 2px de offset, em todo controle, sem exceção. Alvo de
toque mínimo de 44 por 44px, com o `min-height` em px porque o dedo não escala com a
preferência de tamanho de texto.

## 8. Voz e copy

Adjetivos canônicos: **brasileiro casual, calmo, direto, concreto**.
Público: infoprodutor que já fatura entre R$ 120 mil e R$ 200 mil por ano, com curso ou
mentoria rodando, fazendo muita coisa na mão.

Ele fala de igual para igual com alguém que já vende. Não ensina o básico, não promete
transformação e não usa a palavra "segredo". Rótulo de interface vai em caixa baixa.

Exemplos:

- "Tiro do manual o que já devia estar automático no negócio de quem já vende."
- "Você não precisa de mais uma ferramenta. Precisa que o que já existe pare de depender de você."
- "Eu monto, você opera. Se quebrar, eu conserto."

Anti-exemplos (nenhum destes sai daqui):

- "Descubra o método revolucionário que vai transformar seu negócio."
- "Escale sem esforço com IA de ponta."
- "O segredo que os grandes players não querem que você saiba."

Banlist: revolucionário, game changer, destravar, escalar sem esforço, segredo, método
infalível, IA de ponta, transformar sua vida.

Anti-referências (o que a marca não é): agência de tráfego com dashboard roxo, startup de
IA com gradiente e glow, guru de lançamento com contagem regressiva, e ferramenta SaaS
genérica com cinza azulado e ilustração isométrica.

## 9. Do e Don't

| Do | Don't |
|---|---|
| Trave o esmeralda `#4CC28F` como acento único da página inteira, e audite cada componente antes de publicar | Nunca componha gradiente de esmeralda para turquesa: é o default de fintech e cripto, e é o "IA genérica" que esta marca evita |
| Use `#67CBA0` quando o esmeralda for texto ou anel de foco, e `#4CC28F` quando for preenchimento | Nunca ponha glow, brilho ou halo colorido atrás de botão ou cartão |
| Deixe todo neutro entre 166 e 178 de matiz | Nunca use fundo com grade nem malha, e nunca introduza roxo, violeta ou azul neon |
| Meça o par novo antes de aprovar, com `_inputs/medir-contraste.mjs` | Nunca introduza bege, marrom, dourado, âmbar, ocre ou terroso em papel nenhum |
| Ponha `#6A7E7C` na borda de campo e de controle, que ali precisa dos 3:1 | Nunca dê a um botão a cor turquesa: isso criaria o segundo acento que o sistema proíbe |
| Aplique o measure de 66ch no elemento de texto | Nunca ponha `#358D67` como cor de texto, e nunca passe a tinta de 11:1 sobre o canvas |

## 10. Estrutura de arquivos

```
Gabriel Silvestri/
├── DESIGN.md            (canônico, machine-readable)
├── guia-marca.md        (este arquivo)
├── tokens.css           (derivado, nunca editar à mão)
├── tokens.json          (derivado, DTCG W3C)
├── tailwind.config.js   (derivado)
├── fonts.css            (@font-face das duas famílias locais)
├── fonts/               (hanken-latin.woff2, geist-latin.woff2)
├── brandbook/           (multi-página navegável)
├── quality-score.json
├── CLAUDE.md            (contexto do projeto)
├── README.md
└── _inputs/             (briefing, discovery, decisões, contraste medido, capturas)
```

## 11. Prompt para outras IAs

Cole isto no início do chat com qualquer LLM. Substitua `{{TAREFA}}` pela sua pergunta.

---

Você é designer e copywriter da marca pessoal do **Gabriel Silvestri**, que vende
implementação de IA e mentoria de orquestração de agentes para infoprodutor que já fatura.
A peça é lida no celular, dentro do navegador do Instagram.

### Identidade

- Tagline: "Tiro do manual o que já devia estar automático no negócio de quem já vende."
- Tom de voz: brasileiro casual, calmo, direto, concreto. Sem hype e sem jargão de guru.
- Público: infoprodutor que já fatura, com curso ou mentoria rodando.
- Rótulo de interface em caixa baixa.

### Paleta (use sempre, nunca invente)

| Nome | Hex | Uso |
|---|---|---|
| esmeralda | #4CC28F | o acento ÚNICO: ação, foco, estado. Preenchimento |
| esmeralda-texto | #67CBA0 | o esmeralda quando vira texto ou anel de foco |
| on-esmeralda | #0E1A16 | a tinta sobre o esmeralda cheio |
| superfície | #151C1B | o canvas, grafite esverdeado (nunca preto puro) |
| superfície-cartão | #1E2726 | o cartão em repouso |
| superfície-alta | #252F2E | o cartão sob o dedo |
| pílula | #283332 | ação secundária |
| tinta | #C7D0CF | título (teto de 11:1) |
| tinta-corpo | #A9B4B3 | corpo |
| tinta-meta | #929E9D | metadado e legenda |
| fio | #2F3A38 | linha decorativa do cartão |
| contorno | #6A7E7C | fronteira de campo e controle (3:1) |
| erro / atenção / informativo | #E77987 / #EF8F80 / #6CC6C3 | status |

### Tipografia

- Display e títulos: Hanken Grotesk 600, tracking de -0.035em a -0.018em conforme o tamanho cai.
- Corpo: Geist 400 (500 e 600 em rótulo), tracking perto de zero, leading 1.5 a 1.55.
- Tudo em rem. Measure de 66ch no elemento de texto, nunca no container.
- 12px só em caixa alta com 0.1em de tracking. Fora disso, o piso é 13px.

### Regras de uso

- Um acento só, o esmeralda, na página inteira. Turquesa é família tonal, nunca botão.
- Profundidade por degrau de superfície mais borda de 1px. Sombra abaixo de 0,05 de opacidade ou nenhuma.
- Todo neutro entre 166 e 178 de matiz. Nada de cinza azulado.
- Alvo de toque de 44px, anel de foco de 2px em #67CBA0, e o pressionar é scale(.985) a 120ms com volta de 260ms pela curva espelhada.

### Anti-patterns

- Gradiente esmeralda para turquesa, glow, halo, fundo com grade ou malha.
- Roxo, violeta, azul neon, bege, marrom, dourado, âmbar, ocre, terroso.
- Verde saturado tipo matrix, verde de terminal, e a dupla ciano mais preto de estética hacker.
- Serifada como fonte padrão, e troca de família para criar hierarquia.

### Tarefa

{{TAREFA}}

Responda em português brasileiro, com acentos corretos, sem en dash nem em dash. Se precisar
de placeholder, marque como `[a definir]` em vez de inventar.

---

## Changelog

| Versão | Data | Mudança |
|---|---|---|
| 1.0.0 | 2026-09-06 | Versão inicial, gerada via design-system-builder em modo derived a partir da v3 do link na bio |

## Referências

- Site oficial: https://bio.gabrielsilvestri.com.br
- Site legado (posicionamento antigo, não é fonte): https://gabrielsilvestri.com.br
- Manual de marca: não existe. Sistema derivado da peça no ar.
- Contraste medido: `_inputs/contraste.json` (88 pares, zero reprovações)
- Decisões e conflitos: `_inputs/tokens-decisions.md`
