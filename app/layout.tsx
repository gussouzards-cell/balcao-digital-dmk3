import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StyledThemeProvider } from "@/components/providers/StyledThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balcão Digital | DTP",
  description: "Balcão Digital - Departamento de Transportes Públicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledThemeProvider>{children}</StyledThemeProvider>
      </body>
    </html>
  );
}
