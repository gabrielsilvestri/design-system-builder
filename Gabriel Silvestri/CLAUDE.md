# CLAUDE.md · Gabriel Silvestri, design system de marca

## O que é

O design system pessoal de marca do Gabriel Silvestri, no schema v2 deste workspace.
É a base visual do link na bio e das próximas páginas do negócio de IA (implementação de
IA e mentoria de orquestração de agentes para infoprodutor que já fatura).

Edição **Esmeralda 2026**. Tema canônico **dark**, com edição light medida ao lado. Modo de
construção: `derived` (não existe manual de marca em PDF nem logo vetorial).

**Existe um "Norte Design System" separado neste mesmo workspace, e ele NÃO é substituído
por este.** O Norte é o sistema dos carrosséis de Instagram dele; este aqui é o sistema de
marca das páginas web. Os dois coexistem, com escopos diferentes, e mexer em um não mexe no
outro.

**Primeiro consumidor deste sistema:** a versão 4 do `bio-gabriel`, em
`D:\AI\Lain\Business de IA\Funil Produtos IA Biel\bio-gabriel`.

## Estado

Entregue em 06/09/2026. Lint limpo (0 erro, 0 warning), quality score gerado, 88 pares de
contraste medidos com zero reprovações. Ainda não consumido por nenhuma página: a v4 do
bio-gabriel é a primeira que vai usar.

## Arquivos

- `DESIGN.md` canônico e machine-readable. **É o único arquivo de token que se edita.**
- `guia-marca.md` o guia humano em PT: paleta com contraste, tipografia, voz, do e don't, e o prompt pronto para colar em outra IA.
- `tokens.css`, `tokens.json`, `tailwind.config.js` derivados por `_scripts/export.mjs`. Nunca editar à mão.
- `fonts.css` e `fonts/` as duas famílias locais em woff2 (Hanken Grotesk 34,7 KB e Geist 29,4 KB).
- `brandbook/` cinco páginas geradas: index, guidelines, foundations, logo, estrategia.
- `brandbook/_shared/marca.css` a camada da marca sobre os stubs genéricos. É aqui que mora o remapeamento da edição light.
- `_inputs/briefing.md` o escopo dado pelo dono.
- `_inputs/discovery-site.md` as duas fontes capturadas e os conflitos detectados.
- `_inputs/tokens-decisions.md` cada decisão, conflito e inferência, mais a escada de confiança auditável.
- `_inputs/contraste.json` os 88 pares medidos, e `_inputs/medir-contraste.mjs` o script que os mede.
- `_inputs/gerar-brandbook.mjs` o gerador das cinco páginas a partir do DESIGN.md.
- `_inputs/shot.mjs` captura de conferência das páginas nas duas edições (o `verify.mjs` só fotografa o `index`). Precisa do `serve.mjs` rodando na porta 3117.
- `_inputs/.screenshots/` as capturas Playwright das duas URLs de discovery.

## Decisões

Cada uma é escolha datada com o custo ao lado, não lei. Se o custo virar problema, a
decisão se reabre. O registro completo, com origem e conflito de cada token, está em
`_inputs/tokens-decisions.md`.

**06/09/2026, o esmeralda é o acento único e o turquesa é a família tonal.** Pedido do
dono: "tons de esmeralda e turquesa que não seja genérico IA". Resolvido com hierarquia em
vez de duas cores fortes: o esmeralda `#4CC28F` é a única cor de ação (a mesma que já
estava no ar na v3 do link na bio), e o turquesa mora na matiz dos neutros, na superfície
tingida e no sinal informativo. Nenhuma página deste sistema ganha um botão de outra
família de cor em nenhuma seção. Custo: não há cor sobrando para um segundo nível de
destaque, então hierarquia se faz por peso, superfície e respiro.

**06/09/2026, todos os neutros foram rotacionados de matiz 192-204 para 166-178.** A v3
tinha os cinzas azulados, que é o cinza de qualquer tela de login. A rotação preserva a
luminosidade (que já estava calibrada para o celular do dono) e muda só a temperatura.
Custo: quase nenhum hex do sistema é idêntico ao da v3, o que derruba a razão de confiança
alta do quality score. Foi assumido de propósito em vez de inflar a contagem.

**06/09/2026, `warning` é coral `#EF8F80` e não âmbar.** Âmbar, dourado, ocre, bege, marrom
e terroso estão vetados pelo dono desde 21/08/2026, em qualquer papel. Custo declarado:
coral e vermelho ficam na mesma vizinhança de matiz, então atenção e erro não podem ser
distinguidos só por cor. O sistema compensa com rótulo escrito e com mensagem de erro
sempre presente, o que a WCAG 1.4.1 exige de qualquer forma.

**06/09/2026, o par Hanken Grotesk mais Geist foi mantido.** Já roda na v3, self-hosted,
62,6 KB somados, nenhuma das duas na lista de fontes vetadas da casa. O motivo escrito
(x-height alta e aberturas abertas no display, desenho para tela no corpo, um arquivo
variável por família) está na seção 3 do `DESIGN.md`. A família foi renomeada de `Hanken`
para `Hanken Grotesk`, que é o nome real da fonte; o arquivo woff2 é o mesmo.

**06/09/2026, a edição light vive dentro do `colors.named` com prefixo `light-`.** É a
única forma de entregar dois temas sem quebrar a regra de que `tokens.css` é sempre
derivado. O `export.mjs` emite `--color-light-*`, e o `brandbook/_shared/marca.css`
remapeia sob `[data-theme="light"]`. Não existe `tokens-light.css` escrito à mão.

**06/09/2026, o site legado `gabrielsilvestri.com.br` não entrou como fonte.** É o
WordPress do posicionamento antigo de UX/UI, em Montserrat, Open Sans e Lato, três fontes
vetadas. Fica registrado em `discovery-site.md` para não ser redescoberto depois.

## Como rodar

```bash
# do diretório do workspace (Criador Design System)
node _scripts/serve.mjs "Gabriel Silvestri" 3000     # e abrir http://localhost:3000/brandbook/
node _scripts/export.mjs "Gabriel Silvestri"         # regerar os derivados
node _scripts/lint.mjs "Gabriel Silvestri"
node _scripts/score.mjs "Gabriel Silvestri"
node _scripts/verify.mjs "Gabriel Silvestri" 3000    # com o serve rodando
node "Gabriel Silvestri/_inputs/gerar-brandbook.mjs" # regerar as cinco páginas
cd "Gabriel Silvestri/_inputs" && node medir-contraste.mjs
```

## Armadilhas

- **Cor nova não entra no olho.** Roda `_inputs/medir-contraste.mjs` primeiro. Abaixo de 4,5:1 em corpo ou 3:1 em componente, o par não entra.
- **`_scripts/lint.mjs`, `score.mjs` e `verify.mjs` casam `^---\n`, sem `\r`.** Se o `DESIGN.md` for reescrito com CRLF ou com BOM (por exemplo por `Out-File` do PowerShell), o frontmatter deixa de ser encontrado e os três falham em silêncio ou com erro obscuro. Escrever sempre em LF, sem BOM.
- **`_scripts/static-extract.mjs` não foi usado.** Ele roda a skill irmã por dentro do `claude-cli`, que é uma armadilha conhecida desta máquina. A fonte usada foi o código-fonte da v3 no disco, que tem as CSS vars declaradas e é de fidelidade maior que raspar o render. Está declarado em `discovery-site.md`; não existe `_inputs/static/` aqui.
- **A razão de confiança alta é 23%, abaixo do piso de 60% do `verify.mjs`.** O aviso é esperado, e o motivo está escrito em `tokens-decisions.md`. Não inflar a contagem para calar o aviso.
- **`brandbook/_shared/base.css` e `components.css` são cópia literal dos stubs do workspace.** O que é específico da marca mora em `marca.css`, importado depois. Editar os dois primeiros quebra a comparação com os outros clientes.

## Pendências

- A v4 do `bio-gabriel` ainda não consome estes tokens. Quando consumir, vale rodar o `drift.mjs` contra a nova URL para confirmar que o que está no ar bate com o `DESIGN.md`.
- Não existe `assets/logo/` nem `assets/materiais/`: a identidade é tipográfica e ainda não há peça de aplicação fotografada. Quando houver, entra em `assets/materiais/` e o brandbook se regenera.
- Pantone não foi definido em nenhuma cor. Só faz sentido quando houver aplicação impressa, e atribuir sem prova seria inventar.
