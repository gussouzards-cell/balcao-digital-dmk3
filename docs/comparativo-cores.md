# Comparativo: cores do print (Figma) vs sistema atual

## Tela de Início

| Elemento no print (Figma) | Cor descrita | Sistema atual (hex / variável) | Status |
|---------------------------|--------------|---------------------------------|--------|
| **Sidebar** (fundo) | Cinza-azulado claro | `#f1f3f9` (sidebar) | ✅ Alinhado |
| **Botão "Buscar"** | Azul escuro | `#1e3a5f` (primary), hover `#16304d` | ✅ Alinhado |
| **Item ativo (Início)** | Fundo branco, texto/ícone azul escuro | `bg-slate-100` + `text-slate-900` + ícone primary | ✅ Alinhado |
| **Barra – FINALIZADAS** | Verde | `#14b8a6` (finalized – teal) | ⚠️ Ver nota 1 |
| **Barra – EM ESPERA** | Amarelo | `#fbbf24` (warning-400) | ✅ Alinhado |
| **Barra – NOVAS** | Vermelho | `#e11d48` (error) | ✅ Alinhado |
| **Tag "10 NOVAS"** | Amarelo | `warningBg` + `warningText` (#fffbeb / #b45309) | ✅ Alinhado |
| **Card Cadastro – bolinha** | Vermelho | `#e11d48` (error) | ✅ Alinhado |
| **Card Renovação – bolinha** | Amarelo | `#fbbf24` (warning-400) | ✅ Alinhado |
| **DAMSP (Paga)** | Check verde | `#10b981` (success-bg) + texto success | ✅ Alinhado |
| **Botão "INICIAR ATENDIMENTO"** | Azul escuro | `#1e3a5f` (primary) | ✅ Alinhado |
| **Fundo da área de conteúdo** | Cinza claro | `#f1f5f9` (slate-100) | ✅ Alinhado |
| **Cards (fundo)** | Branco / cinza muito claro | Branco (totais), neutral-100 / warningBg (próximas) | ✅ Alinhado |

---

### Nota 1 – Barra “FINALIZADAS”

- **Atual:** `#14b8a6` (teal – verde-água), variável `finalized`.
- No print pode parecer um verde mais “sólido” (esmeralda).
- Se no Figma for um verde mais puro, dá para usar **success** (`#059669`) na barra e na legenda “FINALIZADAS” para ficar igual ao print.

---

## Referência rápida – variáveis no código

| Uso | CSS (style-guide / globals) | Tailwind | Theme (styled-components) |
|-----|-----------------------------|----------|----------------------------|
| Azul principal | `--color-primary` | `primary` | `theme.colors.primary` |
| Azul hover | `--color-primary-hover` | `primary-hover` | `theme.colors.primaryHover` |
| Verde finalizadas (barra) | `--color-finalized` | `finalized` | `theme.colors.finalized` |
| Verde sucesso / pago | `--color-success` | `success` | `theme.colors.success` |
| Amarelo espera / tag | `--color-warning-400`, `warningBg`, `warningText` | `warning-400`, etc. | `theme.colors.warning400`, `warningBg`, `warningText` |
| Vermelho novas / erro | `--color-error` | `error` | `theme.colors.error` |
