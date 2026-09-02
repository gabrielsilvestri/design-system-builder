# Maturidade do design system

Inspirado em boas práticas de design systems. Três níveis, pra você oferecer o nível certo a cada cliente, não empurrar todo cliente até o vault.

## Nível 1, design.md (entrega inicial)

O que o builder atual entrega. Funciona pra cliente novo, manual oficial, refinamento de design system existente, ou marca que precisa do primeiro brandbook formal.

Entregáveis:

- `DESIGN.md` (schema v2, machine-readable, fonte da verdade)
- `guia-marca.md` (PT, cliente-facing, com Pantone / CMYK / voz / banlist / prompt LLM)
- `tokens.css`, `tokens.json`, `tailwind.config.js` (derivados via export.mjs)
- `brandbook/` multi-página (apresentação navegável: index, guidelines, foundations, logo, e opcionais)
- `quality-score.json` (grade A-F com 7 categorias)

Custo: 30-60 min por cliente, depois do brainstorm. Manutenção: roda `drift.mjs` mensalmente, gera relatório, ajusta DESIGN.md se necessário.

Quando ofertar: 95% dos clientes deste workspace.

## Nível 2, Storybook (próxima fase)

Quando o cliente quer componentes interativos com isolamento e testes visuais reais.

Adições ao Nível 1:

- Cada átomo do `components:` do DESIGN.md vira uma story
- Variants e states viram controls do Storybook
- Cliente publica em `<cliente>.storybook.com` (Chromatic) ou self-hosted
- Designer e dev compartilham o mesmo source of truth e fazem regressão visual

Quando ofertar:
- Cliente tem time de produto >= 3 pessoas
- Múltiplos produtos digitais convergindo
- Exporta o design system pra parceiros (white-label)

Custo: +2-4h de setup, depois manutenção contínua de stories.

## Nível 3, vault tokenization layer (cliente enterprise)

Quando o cliente tem múltiplas marcas, múltiplos canais, ou regulamentação.

Adições ao Nível 2:

- Tokens em camadas (raw -> structured -> product -> intelligence)
- Vault central com versão semântica de tokens (semver)
- Approval gates por canal (mobile / web / impresso)
- Audit log de cada token consumido em prod
- Drift detectado automaticamente em CI por canal

Quando ofertar:
- Grupo de marcas (holding, conglomerado)
- Compliance (saúde, finanças, governo)
- Suporta dezenas de produtos com requisitos divergentes

Custo: 40-80h de setup, requer engenheiro dedicado.

## Quando NÃO subir o nível

- Cliente solo / freelancer / pequeno negócio
- Marca estável (não muda há anos)
- Não tem time pra manter
- Cliente quer "só um logo bonito" (rebrand, não design system)
- Subir nível tende a aumentar custo sem aumentar valor entregue

## Como apresentar pro cliente

A escada serve pra você posicionar o serviço. Cliente que pede "design system" geralmente quer Nível 1 e nem sabe que existe Nível 2. Mostra os 3 níveis num diagrama, indica em qual ele está hoje, mostra o que mudaria se subir.

Pricing sugerido:
- Nível 1: pacote fechado
- Nível 2: pacote fechado + retainer mensal
- Nível 3: retainer ou contrato anual com engenheiro alocado

## Drift como produto recorrente

Independente do nível, `drift.mjs` permite oferecer manutenção mensal: cliente paga pra você rodar `drift` no site dele todo mês, gerar relatório do que mudou, ajustar o DESIGN.md, regerar o brandbook. Cliente percebe valor recorrente e você cria stream de receita previsível.
