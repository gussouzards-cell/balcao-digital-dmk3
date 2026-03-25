"use client";

import { useEffect } from "react";
import { useProtocols } from "@/lib/useProtocolos";

/** Dados espelhando o modal de fila no Figma (mesma base de Modal_Historico) — substituir por API quando existir. */
const COLS = [
  { key: "posicao", label: "POSIÇÃO", className: "w-[10%] min-w-[3.5rem]" },
  { key: "protocolo", label: "PROTOCOLO", className: "w-[16%] min-w-[6.5rem]" },
  { key: "servico", label: "SERVIÇO", className: "w-[18%] min-w-[7rem]" },
  { key: "status", label: "STATUS", className: "w-[20%] min-w-[7rem]" },
  { key: "tempo", label: "TEMPO NA FILA", className: "w-[14%] min-w-[5rem]" },
  { key: "prioridade", label: "PRIORIDADE", className: "w-[12%] min-w-[4.5rem]" },
] as const;

export function ModalFilaAtendimento({
  open,
  onClose,
  highlightProtocolo,
  title = "Fila de atendimento",
  tipo,
}: {
  open: boolean;
  onClose: () => void;
  /** Protocolo atual (URL) — destaca a linha na tabela */
  highlightProtocolo?: string;
  /** Título do modal (Figma varia por fluxo) */
  title?: string;
  tipo?: "Cadastro" | "Renovação";
}) {
  const { protocolos, isLoading } = useProtocols();

  const filaRows = (tipo ? protocolos.filter((p) => p.tipo === tipo) : protocolos)
    .slice(0, 5)
    .map((p, idx) => {
      const status =
        p.status === "nova"
          ? "Aguardando análise"
          : p.status === "emEspera"
            ? "Aguardando documentos"
            : "Concluído";

      return {
        posicao: String(idx + 1),
        protocolo: p.protocolo,
        servico: p.titulo,
        status,
        tempo: p.tempo,
        // Backend ainda não retorna essas flags de forma tipada.
        prioridade: "N/A",
      };
    });

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
        id="modal-fila-atendimento"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-fila-titulo"
        className="relative flex max-h-[90vh] w-full max-w-[1000px] flex-col rounded-[6px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-start gap-3 border-b border-transparent px-5 pb-2 pt-5 pr-14 sm:px-6">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-[#0f2e4b]" aria-hidden>
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16M4 14h10M4 18h14"
              />
            </svg>
          </span>
          <h2 id="modal-fila-titulo" className="text-2xl font-bold leading-normal text-[#0f2e4b]">
            {title}
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
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={`sk-${i}`}>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#3f444d]">—</td>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#0f2e4b]">—</td>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#4d4d4d]">—</td>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#4d4d4d]">—</td>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#3f444d]">—</td>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#3f444d]">—</td>
                    </tr>
                  ))
                ) : (
                  filaRows.map((row, i) => {
                    const isCurrent = highlightProtocolo != null && row.protocolo === highlightProtocolo;
                  return (
                      <tr key={i} className={isCurrent ? "bg-[rgba(15,46,75,0.06)]" : undefined}>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#3f444d]">{row.posicao}</td>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#0f2e4b]">{row.protocolo}</td>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#4d4d4d]">{row.servico}</td>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#4d4d4d]">{row.status}</td>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#3f444d]">{row.tempo}</td>
                      <td className="border-b border-[#d9d9d9] px-2 py-3 font-medium text-[#3f444d]">{row.prioridade}</td>
                      </tr>
                    );
                  })
                )}
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
              <span className="text-sm font-normal">1-5 de 5 itens</span>
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
