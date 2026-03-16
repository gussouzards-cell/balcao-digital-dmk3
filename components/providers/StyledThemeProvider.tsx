"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "@/app/theme";

export function StyledThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
