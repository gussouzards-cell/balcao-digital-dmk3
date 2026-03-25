# Guia de cores – Balcão Digital (DTP)

Referência das cores do projeto. Todas as variáveis estão em **`app/styles/variables.css`**.

---

## 1. Cores principais (identidade DTP)

| Nome        | Variável CSS        | Hex       | Uso |
|-------------|---------------------|-----------|-----|
| **Primary** | `--dtp-primary`     | `#1e3a5f` | Botões principais, links, ícones ativos, sidebar, títulos em destaque. |
| **Primary hover** | `--dtp-primary-hover` | `#16304d` | Estado hover dos botões e links primary. |
| **Primary light** | `--dtp-primary-light` | `rgba(30, 58, 95, 0.08)` | Fundo de foco (focus ring), destaques suaves. |

---

## 2. Cores de estado (feedback)

| Nome    | Variável CSS      | Hex       | Uso |
|---------|-------------------|-----------|-----|
| **Success** | `--dtp-success`   | `#059669` | Aprovação, “Paga”, “Aprovado”, checkmarks. |
| **Success bg** | `--dtp-success-bg` | `#d1fae5` | Fundo de mensagens/estados de sucesso. |
| **Error** | `--dtp-error`     | `#dc2626` | Reprovar, erro, prioridade, alertas. |
| **Error bg** | `--dtp-error-bg` | `#fee2e2` | Fundo de botão Reprovar (hover), alertas. |
| **Warning** | `--dtp-warning`   | `#d97706` | Avisos, “em espera”. |
| **Warning bg** | `--dtp-warning-bg` | `#fef3c7` | Fundo de avisos. |

---

## 3. Tags / badges (atendimento)

| Nome      | Variável CSS           | Hex       | Uso |
|-----------|-------------------------|-----------|-----|
| **Prioridade** | `--dtp-tag-prioridade` | `#e11d48` | Tag “PRIORIDADE” no cabeçalho do atendimento. |
| **Idoso** | `--dtp-tag-idoso`       | `#0ea5e9` | Tag “IDOSO”. |
| **Fila**  | `--dtp-tag-fila`        | `#94a3b8` | Tag “POSIÇÃO NA FILA PRIORIZADA POR: …”. |

---

## 4. Neutros (superfícies e texto)

| Nome          | Variável CSS        | Hex       | Uso |
|---------------|---------------------|-----------|-----|
| **Bg página** | `--dtp-bg-page`     | `#f1f5f9` | Fundo da área de conteúdo (dashboard). |
| **Bg card**   | `--dtp-bg-card`     | `#ffffff` | Cards, modais, inputs. |
| **Borda**     | `--dtp-border`      | `#e2e8f0` | Bordas leves (cards, inputs, divisórias). |
| **Borda forte** | `--dtp-border-strong` | `#94a3b8` | Bordas de destaque (ex.: rodapé de validação). |
| **Texto**     | `--dtp-text`       | `#334155` | Texto padrão. |
| **Texto muted** | `--dtp-text-muted` | `#64748b` | Texto secundário, legendas. |
| **Texto heading** | `--dtp-text-heading` | `#0f172a` | Títulos e labels em negrito. |

---

## 5. Texto sobre fundos escuros (botões, tags, sidebar)

| Nome     | Variável CSS            | Valor     | Uso |
|----------|-------------------------|-----------|-----|
| **Texto on primary** | `--dtp-text-on-primary` | `#ffffff` | Texto em botões primary/verde, tags, stepper ativo. |

## 6. Sidebar

| Nome       | Variável CSS               | Valor     | Uso |
|------------|----------------------------|-----------|-----|
| **Bg**     | `--dtp-sidebar-bg`         | `#1e3a5f` | Fundo do menu lateral. |
| **Texto**  | `--dtp-sidebar-text`       | `#ffffff` | Texto e ícones do menu. |
| **Texto muted** | `--dtp-sidebar-text-muted` | `rgba(255,255,255,0.8)` | Rodapé da sidebar. |
| **Borda**  | `--dtp-sidebar-border`     | `rgba(255,255,255,0.1)` | Borda superior do rodapé. |
| **Ativo**  | `--dtp-sidebar-active`     | `rgba(255,255,255,0.15)` | Fundo do item ativo/hover. |

## 7. Login (coluna branding)

| Nome    | Variável CSS             | Valor     | Uso |
|---------|---------------------------|-----------|-----|
| **Overlay** | `--dtp-brand-overlay`   | `rgba(30,58,95,0.8)` | Máscara sobre a imagem. |
| **Logo bg** | `--dtp-brand-logo-bg`  | `rgba(255,255,255,0.2)` | Fundo do placeholder do logo. |

## 8. Botões de ação (rodapé de validação)

| Nome        | Variável CSS            | Hex       | Uso |
|-------------|-------------------------|-----------|-----|
| **Aprovar** | `--dtp-btn-approve`     | `#059669` | Botão Avançar / Aprovar (verde). |
| **Aprovar hover** | `--dtp-btn-approve-hover` | `#047857` | Hover do botão Aprovar. |
| **Reprovar**| `--dtp-btn-reject`      | `#dc2626` | Borda e texto do botão Reprovar. |
| **Reprovar hover** | `--dtp-btn-reject-hover` | `#b91c1c` | Hover do botão Reprovar. |
| **Voltar borda** | `--dtp-btn-back-border` | `#94a3b8` | Borda do botão Voltar. |
| **Voltar hover** | `--dtp-btn-back-hover`  | `#f8fafc` | Fundo hover do botão Voltar. |

---

## Uso no código

- **CSS:** use a variável, por exemplo: `color: var(--dtp-primary);` ou `background: var(--dtp-bg-card);`
- **Tailwind:** as classes atuais usam cores fixas (ex.: `#1e3a5f`). Para padronizar, você pode definir no `tailwind.config` cores que referenciem essas variáveis ou continuar usando `var(--dtp-*)` em CSS customizado.

Para alterar qualquer cor do sistema, edite **`app/styles/variables.css`**.
