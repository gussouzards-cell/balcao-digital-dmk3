"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const breadcrumbConfig: Record<string, { href: string; label: string }[]> = {
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

function getBreadcrumbs(pathname: string): { href: string; label: string }[] {
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

export function Header() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 py-3">
      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-2 text-sm text-slate-600">
          <Link href="/inicio" className="hover:text-[#1e3a5f]">
            DTP Digital
          </Link>
          {breadcrumbs.map((b, i) => (
            <span key={b.href} className="flex items-center gap-2">
              <span className="text-slate-400">/</span>
              {i === breadcrumbs.length - 1 ? (
                <span className="font-medium text-slate-900">{b.label}</span>
              ) : (
                <Link href={b.href} className="hover:text-[#1e3a5f]">
                  {b.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      <div className="flex flex-1 items-center justify-center gap-2 max-w-md">
        <svg className="h-5 w-5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm placeholder:text-slate-400 focus:border-[#1e3a5f] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1e3a5f]"
        />
        <button
          type="button"
          className="rounded-lg bg-[#1e3a5f] px-4 py-2 text-sm font-medium text-white hover:bg-[#16304d]"
        >
          Buscar
        </button>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-600">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <button type="button" className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
          Olá, João
          <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
