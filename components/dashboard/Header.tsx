"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const breadcrumbConfig: Record<string, { href: string; label: string }[]> = {
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

const atendimentoStepLabels: Record<string, string> = {
  "dados-condutor": "Dados do Condutor",
  "dados-cadastrais": "Dados Cadastrais",
  cnh: "CNH",
  "distribuicao-acoes": "Distr. de Ações Criminais",
  conclusao: "Conclusão",
};

function getBreadcrumbs(pathname: string): { href: string; label: string }[] {
  const match = pathname.match(/^\/inicio\/renovacao\/atendimento\/([^/]+)(?:\/([^/]+))?/);
  if (match) {
    const protocolo = match[1];
    const step = match[2];
    const stepLabel = step ? atendimentoStepLabels[step] ?? step : "DAMSP";
    const label = step ? stepLabel : `Atendimento ${protocolo}`;
    return [
      { href: "/inicio", label: "Cadastro" },
      { href: "/inicio/renovacao", label: "Renovação" },
      { href: pathname, label },
    ];
  }
  return breadcrumbConfig[pathname] ?? [{ href: "/inicio", label: "Início" }];
}

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const breadcrumbs = getBreadcrumbs(pathname);
  const perfil = (searchParams?.get("perfil") ?? "").toLowerCase();
  const userShort = perfil === "admin" ? "Admin" : "João";

  const isHome = pathname === "/inicio";

  return (
    <header className="flex shrink-0 flex-col gap-3 bg-[#f6f6f6] px-4 py-3 lg:flex-row lg:items-center lg:gap-6">
      <div className="flex min-w-0 items-center gap-3 lg:max-w-[280px] lg:shrink-0">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 lg:hidden"
            aria-label="Abrir menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        {isHome ? (
          <div className="min-w-0">
            <p className="text-[12px] font-normal leading-[1.5]">
              <span className="text-[#7c90a0]">DTP Digital</span>
              <span className="text-[#2d3748]"> / Início</span>
            </p>
            <h1 className="text-[16px] font-bold leading-[1.4] text-[#2d3748]">Início</h1>
          </div>
        ) : (
          <nav className="flex min-w-0 flex-1 flex-wrap items-center gap-2 text-sm text-slate-600" aria-label="Breadcrumb">
            <Link
              href="/inicio"
              className="shrink-0 rounded hover:text-[#193758] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193758] focus-visible:ring-offset-2"
            >
              DTP Digital
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={`${b.href}-${i}`} className="flex min-w-0 shrink items-center gap-2">
                <span className="shrink-0 text-slate-400" aria-hidden>
                  /
                </span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="truncate font-medium text-slate-900" aria-current="page" title={b.label}>
                    {b.label}
                  </span>
                ) : (
                  <Link
                    href={b.href}
                    className="max-w-[120px] shrink-0 truncate rounded hover:text-[#193758] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193758] focus-visible:ring-offset-2 sm:max-w-none"
                  >
                    {b.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-2 lg:justify-center">
        <div className="flex h-[38px] min-w-0 w-full max-w-[360px] flex-1 items-center gap-2 rounded border border-[#b1afaf] bg-white pl-4 pr-2 sm:flex-initial">
          <svg className="h-4 w-4 shrink-0 text-[#b1afaf]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="Pesquisar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Pesquisar"
            className="min-w-0 flex-1 border-0 bg-transparent py-1 text-[14px] text-[#4d4d4d] placeholder:text-[#929090] focus:outline-none focus:ring-0"
          />
        </div>
        <button
          type="button"
          className="h-[38px] w-[84px] shrink-0 rounded-md bg-[#193758] text-[12px] font-bold text-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.05)] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193758] focus-visible:ring-offset-2"
          aria-label="Buscar"
        >
          Buscar
        </button>
      </div>

      <div className="flex shrink-0 justify-end lg:ml-0">
        <button
          type="button"
          className="relative flex items-center gap-1.5 text-left text-[12px] font-bold text-[#4d4d4d]"
          aria-label="Conta do usuário"
        >
          <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-600">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-[#f6f6f6]" aria-hidden />
          </span>
          <span>
            <span className="font-normal">Olá</span>, {userShort}
          </span>
          <svg className="h-3 w-3 text-[#193758]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
