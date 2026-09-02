# UI Kit · Norte — painel das finanças do casal

Recriação fiel do produto real: o painel que o casal abre pra ter *norte* em segundos. Disposição **03** (sidebar grid) — a escolhida no projeto.

## Arquivos
- `index.html` — monta o painel interativo (toque num objetivo pra defini-lo como meta ativa).
- `Panel.jsx` — a tela completa, composta só dos componentes do sistema (`Card`, `Value`, `Row`, `Group`, `Meter`, `Split`, `Crown`, `Tile`, `Chip`, `Hud`, `Surface`).

## Princípios respeitados
- **Total grande no topo + detalhe abaixo.** Um número dominante por card.
- **Dinheiro combinado do casal:** o número de topo é do casal; por pessoa só como contexto.
- **Dívida separada do gasto;** aporte é "guardado", não gasto.
- **Pet é protegida** (Pet nunca entra em lista de corte).
- Valores sempre em mono tabular, **sem glow nos dígitos**. Glow só em molduras, barras, títulos, ícones.
- Português com acentos; nunca travessão.

## Layout (grid-template-areas)
```
hud hud hud
sal pag tnk
sal cst qfz
div cst obj
div cst obj
mes mes mes
```
sal=Saldo · pag=Contas a pagar · tnk=Tanque · cst=Custo de vida · qfz=Quem fez · div=Dívidas · obj=Objetivos · mes=Histórico mensal.

## Interação
- Clicar num `Tile` de objetivo o torna a meta **ATIVA** (borda + glow + badge). Estado único por vez.
