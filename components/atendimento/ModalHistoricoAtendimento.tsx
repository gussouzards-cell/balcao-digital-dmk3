"use client";

import { useEffect } from "react";

/** Dados espelhando o frame Modal_Historico (Figma 58935:5285) — substituir por API quando existir. */
const HISTORICO_ROWS = [
  {
    data: "01/03/2026",
    situacao: "Renovação solicitada",
    prioridade: "SIM",
    dataEntrada: "01/03/2026\n00:00",
    ultimaMov: "01/03/2026\n00:00",
    responsavel: "—",
  },
  {
    data: "07/03/2026",
    situacao: "Atendimento iniciado",
    prioridade: "SIM",
    dataEntrada: "07/03/2026\n00:00",
    ultimaMov: "07/03/2026\n00:00",
    responsavel: "José Carlos Silva",
  },
  {
    data: "07/03/2026",
    situacao: "Enviado para análise jurídica",
    prioridade: "SIM",
    dataEntrada: "07/03/2026\n00:00",
    ultimaMov: "07/03/2026\n00:00",
    responsavel: "José Carlos Silva",
  },
  {
    data: "07/03/2026",
    situacao: "Aguardando análise jurídica",
    prioridade: "SIM",
    dataEntrada: "07/03/2026\n00:00",
    ultimaMov: "07/03/2026\n00:00",
    responsavel: "—",
  },
  {
    data: "08/03/2026",
    situacao: "Revisado pelo jurídico",
    prioridade: "SIM",
    dataEntrada: "08/03/2026\n00:00",
    ultimaMov: "08/03/2026\n00:00",
    responsavel: "Alexandre Costa",
  },
  {
    data: "08/03/2026",
    situacao: "Aguardando atendimento",
    prioridade: "SIM",
    dataEntrada: "08/03/2026\n00:00",
    ultimaMov: "08/03/2026\n00:00",
    responsavel: "—",
  },
  {
    data: "09/03/2026",
    situacao: "Atendimento retomado",
    prioridade: "SIM",
    dataEntrada: "09/03/2026\n00:00",
    ultimaMov: "09/03/2026\n00:00",
    responsavel: "João Silva",
  },
] as const;

const COLS = [
  { key: "data", label: "DATA", className: "w-[12%] min-w-[4.5rem]" },
  { key: "situacao", label: "SITUAÇÃO", className: "w-[18%] min-w-[7rem]" },
  { key: "prioridade", label: "PRIORIDADE", className: "w-[12%] min-w-[4.5rem]" },
  { key: "dataEntrada", label: "DATA ENTRADA", className: "w-[14%] min-w-[5.5rem]" },
  { key: "ultimaMov", label: "ÚLTIMA MOVIMENTAÇÃO", className: "w-[14%] min-w-[5.5rem]" },
  { key: "responsavel", label: "RESPONSÁVEL", className: "w-[22%] min-w-[7rem]" },
] as const;

export function ModalHistoricoAtendimento({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-[1px]"
      role="presentation"
      onClick={onClose}
    >
      <div
        id="modal-historico-atendimento"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-historico-titulo"
        className="relative flex max-h-[90vh] w-full max-w-[1000px] flex-col rounded-[6px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-start gap-3 border-b border-transparent px-5 pb-2 pt-5 pr-14 sm:px-6">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-[#0f2e4b]" aria-hidden>
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h2 id="modal-historico-titulo" className="text-2xl font-bold leading-normal text-[#0f2e4b]">
            Histórico atendimento
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 flex size-6 items-center justify-center text-[#0f2e4b] hover:opacity-80"
            aria-label="Fechar"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto px-4 pb-2 pt-2 sm:px-6">
          <div className="overflow-hidden rounded-t border-2 border-[#eaeaea]">
            <table className="w-full border-collapse text-center text-[10px]">
              <thead>
                <tr>
                  {COLS.map((col) => (
                    <th
                      key={col.key}
                      scope="col"
                      className={`border-b border-[#d9d9d9] px-2 py-4 font-medium text-[#0f2e4b] ${col.className}`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {HISTORICO_ROWS.map((row, i) => (
                  <tr key={i}>
                    <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#3f444d]">{row.data}</td>
                    <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#4d4d4d]">{row.situacao}</td>
                    <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#3f444d]">{row.prioridade}</td>
                    <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium whitespace-pre-line text-[#3f444d]">
                      {row.dataEntrada}
                    </td>
                    <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium whitespace-pre-line text-[#3f444d]">
                      {row.ultimaMov}
                    </td>
                    <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#3f444d]">{row.responsavel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-0 flex flex-wrap items-center justify-between gap-3 border-t border-[#eaeaea] bg-white px-2 py-4 text-sm text-black">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-normal">Exibir</span>
              <div className="flex h-8 items-center rounded border border-slate-300 bg-white px-2">
                <span className="min-w-[1.5rem] text-center text-[17px] font-medium">10</span>
                <span className="sr-only">itens por página</span>
              </div>
              <span className="h-8 w-px bg-[#ccc]" aria-hidden />
              <span className="text-sm font-normal">1-7 de 7 itens</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-normal">Página</span>
              <div className="flex h-8 items-center rounded border border-slate-300 bg-white px-2">
                <span className="min-w-[1.5rem] text-center text-[17px] font-medium">1</span>
              </div>
              <div className="flex gap-1">
                <button
                  type="button"
                  disabled
                  className="flex size-8 items-center justify-center rounded border border-slate-200 text-slate-400"
                  aria-label="Página anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  disabled
                  className="flex size-8 items-center justify-center rounded border border-slate-200 text-slate-400"
                  aria-label="Próxima página"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
