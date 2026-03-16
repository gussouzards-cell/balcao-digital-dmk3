import type { BreadcrumbItem } from "./Breadcrumbs";

export const breadcrumbConfig: Record<string, BreadcrumbItem[]> = {
  "/inicio": [{ href: "/inicio", label: "Início" }],
  "/inicio/cadastramento": [
    { href: "/inicio", label: "Cadastro" },
    { href: "/inicio/cadastramento", label: "Cadastramento" },
  ],
  "/inicio/renovacao": [
    { href: "/inicio", label: "Cadastro" },
    { href: "/inicio/renovacao", label: "Renovação" },
  ],
  "/inicio/alvara": [
    { href: "/inicio", label: "Licença" },
    { href: "/inicio/alvara", label: "Alvará de Estacionamento" },
  ],
  "/inicio/configuracoes": [{ href: "/inicio/configuracoes", label: "Configurações" }],
};

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const match = pathname.match(/^\/inicio\/renovacao\/atendimento\/([^/]+)/);
  if (match) {
    const protocolo = match[1];
    return [
      { href: "/inicio", label: "Cadastro" },
      { href: "/inicio/renovacao", label: "Renovação" },
      { href: pathname, label: `Atendimento ${protocolo}` },
    ];
  }
  return breadcrumbConfig[pathname] ?? [{ href: "/inicio", label: "Início" }];
}
