# Estilos do Balcão Digital

Arquivos CSS para você editar sem depender do assistente.

**Guia de cores:** veja **[STYLE_GUIDE_CORES.md](./STYLE_GUIDE_CORES.md)** para a paleta completa e variáveis CSS.

## Onde editar o quê

| Arquivo | O que controla |
|---------|----------------|
| **variables.css** | Cores, espaçamentos, bordas, sombras de **todo o projeto**. Mude aqui para alterar o visual global. |
| **globals.css** | Estilos do `body`, imports do Tailwind e variáveis de tema. Contém também classes utilitárias (`.dtp-card`, `.dtp-btn-primary`, etc.). |
| **login.css** | Página de login (`/`): coluna da esquerda (branding), formulário à direita. |
| **dashboard.css** | Layout interno: sidebar, header e área principal (`/inicio` e todas as subpáginas). |
| **home.css** | Página inicial do dashboard: cards de “Total de solicitações” e “Próximas solicitações”. |
| **atendimento.css** | Telas de atendimento (passos 1 a 5): card de resumo, stepper, rodapé de validação e botões de documento. |

## Variáveis principais (variables.css)

- **Cores:** `--dtp-primary`, `--dtp-primary-hover`, `--dtp-tag-prioridade`, `--dtp-tag-idoso`, `--dtp-btn-approve`, `--dtp-btn-reject`
- **Neutros:** `--dtp-bg-page`, `--dtp-bg-card`, `--dtp-border`, `--dtp-text`, `--dtp-text-muted`
- **Espaçamentos:** `--dtp-space-1` a `--dtp-space-10`
- **Bordas:** `--dtp-radius-sm`, `--dtp-radius`, `--dtp-radius-lg`, `--dtp-radius-xl`

As páginas ainda usam muitas classes do **Tailwind** (`className="..."`). Para mudar só por CSS, use as classes que começam com `dtp-` ou as definidas nos arquivos desta pasta (ex.: `.login-page`, `.atendimento-header-card`). Para aplicar as variáveis em componentes, use `var(--dtp-primary)` etc. em um CSS customizado ou no Tailwind via `theme()`.
