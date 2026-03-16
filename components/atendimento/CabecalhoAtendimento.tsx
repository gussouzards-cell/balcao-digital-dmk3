"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface CabecalhoAtendimentoProps {
  /** Protocolo do atendimento (ex: T2500221-01) */
  protocolo: string;
  /** Itens do breadcrumb: DTP Digital, Cadastro, Renovação, etc. */
  breadcrumbSegments: BreadcrumbItem[];
  /** Título do serviço no card (ex: "Renovação Condutax") */
  serviceTitle: string;
}

const BREADCRUMB_RENOVACAO: BreadcrumbItem[] = [
  { label: "DTP Digital", href: "/inicio" },
  { label: "Cadastro", href: "/inicio" },
  { label: "Renovação", href: "/inicio/renovacao" },
];

/**
 * Cabeçalho padrão de todas as telas de atendimento: breadcrumb, título "Atendimento {protocolo}",
 * card com nome do serviço, badges, grid de informações e botão HISTÓRICO.
 */
export function CabecalhoAtendimento({
  protocolo,
  breadcrumbSegments,
  serviceTitle,
}: CabecalhoAtendimentoProps) {
  return (
    <>
      <div>
        <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-600 sm:text-sm">
          {breadcrumbSegments.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-slate-400">/</span>}
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            </span>
          ))}
        </nav>
        <h1 className="mt-1 text-xl font-bold text-slate-900 sm:text-xl">Atendimento {protocolo}</h1>
      </div>

      <div className="atendimento-card rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-bold text-slate-800 sm:text-lg">{serviceTitle}</h2>
              <span className="rounded bg-error px-2 py-0.5 text-xs font-bold text-white sm:px-2.5 sm:py-1">PRIORIDADE</span>
              <span className="rounded bg-info px-2 py-0.5 text-xs font-bold text-white sm:px-2.5 sm:py-1">IDOSO</span>
              <span className="rounded bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-800 sm:px-3 sm:py-1 sm:text-xs">
                POSIÇÃO NA FILA PRIORIZADA POR: CARLOS SILVA
              </span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 border-t border-slate-200 pt-4 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2 md:grid-cols-3 lg:grid-cols-6">
              <div className="border-b border-slate-200 pb-4 sm:border-b-0 sm:border-r sm:border-slate-200 sm:pr-4 sm:pb-0">
                <p className="text-sm font-semibold text-slate-800">Status:</p>
                <p className="atendimento-status-text mt-1 flex items-center gap-1 text-sm font-bold text-primary">
                  <span>→</span> Atendimento iniciado
                </p>
              </div>
              <div className="border-b border-slate-200 pb-4 sm:border-b-0 sm:border-r sm:border-slate-200 sm:pr-4 sm:pb-0">
                <p className="text-sm font-semibold text-slate-800">Protocolo de atendimento:</p>
                <p className="mt-1 text-sm text-slate-700">{protocolo}</p>
              </div>
              <div className="border-b border-slate-200 pb-4 sm:border-b-0 sm:border-r sm:border-slate-200 sm:pr-4 sm:pb-0">
                <p className="text-sm font-semibold text-slate-800">Tempo decorrido:</p>
                <p className="mt-1 text-sm text-slate-700">Lorem ipsum</p>
              </div>
              <div className="border-b border-slate-200 pb-4 sm:border-b-0 sm:border-r sm:border-slate-200 sm:pr-4 sm:pb-0">
                <p className="text-sm font-semibold text-slate-800">Setor:</p>
                <p className="mt-1 text-sm text-slate-700">Lorem ipsum</p>
              </div>
              <div className="border-b border-slate-200 pb-4 sm:border-b-0 sm:border-r sm:border-slate-200 sm:pr-4 sm:pb-0">
                <p className="text-sm font-semibold text-slate-800">Resp. atendimento no DTP:</p>
                <p className="mt-1 text-sm text-slate-700">João Silva</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">DAMSP:</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success-bg text-white">
                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Paga
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 sm:min-h-0"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            HISTÓRICO
          </button>
        </div>
      </div>
    </>
  );
}

/** Breadcrumb para fluxo de Renovação (Cadastro / Renovação) */
export { BREADCRUMB_RENOVACAO };
