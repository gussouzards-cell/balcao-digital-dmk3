/**
 * Tema - Balcão Digital DTP
 * Fonte única para styled-components (espelho do style-guide.css para Tailwind).
 */

export const theme = {
  colors: {
    primary: "#1e3a5f",
    primaryHover: "#16304d",
    primaryMuted: "rgba(30, 58, 95, 0.2)",
    primaryOverlay: "rgba(30, 58, 95, 0.8)",
    background: "#ffffff",
    foreground: "#171717",
    success: "#059669",
    successBg: "#10b981",
    successHover: "#047857",
    error: "#e11d48",
    error500: "#f43f5e",
    errorBorder: "#be123c",
    errorBg: "#fff1f2",
    warning: "#f59e0b",
    warning400: "#fbbf24",
    warningBg: "#fffbeb",
    warningText: "#b45309",
    info: "#0ea5e9",
    infoBg: "#e0f2fe",
    finalized: "#14b8a6",
    link: "#2563eb",
    neutral: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
} as const;

export type AppTheme = typeof theme;
