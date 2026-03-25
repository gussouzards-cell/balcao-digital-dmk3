"use client";

import { useEffect, useState } from "react";

const NAVY = "#0f2e4b";

function splitIntoTwoColumns<T>(items: readonly T[]) {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)] as const;
}

export function ModalRecusarSolicitacao({
  open,
  stepTitle,
  motivos,
  solicitacaoLabel = "Renovação",
  onClose,
  onSalvar,
}: {
  open: boolean;
  /** Ex: "DAMSP", "CNH", etc. */
  stepTitle: string;
  motivos: string[];
  solicitacaoLabel?: "Renovação" | "Cadastramento";
  onClose: () => void;
  onSalvar: (payload: { motivos: string[]; justificativa: string }) => void;
}) {
  const [justificativa, setJustificativa] = useState("");
  const [motivosSelecionados, setMotivosSelecionados] = useState<string[]>([]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    // Resetar estados ao abrir o modal, evitando setState síncrono no body do effect.
    const id = window.requestAnimationFrame(() => {
      setJustificativa("");
      setMotivosSelecionados([]);
    });
    return () => window.cancelAnimationFrame(id);
  }, [open]);

  const [colA, colB] = splitIntoTwoColumns(motivos);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-[1px]"
      role="presentation"
      onClick={onClose}
    >
      <div
        id="modal-recusar-solicitacao"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-recusar-titulo"
        className="relative flex w-full max-w-[1000px] flex-col rounded-[6px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b border-transparent px-6 pt-6">
          <div className="flex min-w-0 flex-col gap-4">
            <h2 id="modal-recusar-titulo" className="text-[24px] font-bold leading-[1.5] text-[#0f2e4b]">
              Recusar Solicitação - {stepTitle}
            </h2>
            <p className="text-[14px] leading-[1.5] text-[#3f444d]">
              Selecione um ou mais motivos para reprovar de solicitação de {solicitacaoLabel} de CONDUTAX:
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex size-[24px] items-center justify-center text-[#0f2e4b] hover:opacity-80"
            aria-label="Fechar"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-8 pt-8">
          <div className="flex gap-[48px]">
            <div className="flex flex-col gap-[16px]">
              {colA.map((m) => {
                const checked = motivosSelecionados.includes(m);
                return (
                  <label key={m} className="flex cursor-pointer items-center gap-2 px-[16px]">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        const v = e.target.checked;
                        setMotivosSelecionados((prev) => {
                          if (v) return prev.includes(m) ? prev : [...prev, m];
                          return prev.filter((x) => x !== m);
                        });
                      }}
                      className="h-5 w-5 cursor-pointer appearance-none rounded border-2 border-[#0b326e] bg-white checked:bg-[#0f2e4b]"
                    />
                    <span className="whitespace-nowrap text-[14px] leading-[1.5] text-[#3f444d]">{m}</span>
                  </label>
                );
              })}
            </div>
            <div className="flex flex-col gap-[16px]">
              {colB.map((m) => {
                const checked = motivosSelecionados.includes(m);
                return (
                  <label key={m} className="flex cursor-pointer items-center gap-2 px-[16px]">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        const v = e.target.checked;
                        setMotivosSelecionados((prev) => {
                          if (v) return prev.includes(m) ? prev : [...prev, m];
                          return prev.filter((x) => x !== m);
                        });
                      }}
                      className="h-5 w-5 cursor-pointer appearance-none rounded border-2 border-[#0b326e] bg-white checked:bg-[#0f2e4b]"
                    />
                    <span className="whitespace-nowrap text-[14px] leading-[1.5] text-[#3f444d]">{m}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="mt-[48px]">
            <p className="text-[14px] font-semibold text-[#3f444d]">Justificativa:</p>
            <div className="mt-[12px] rounded-[4px] border-2 border-[#0b326e]">
              <textarea
                value={justificativa}
                onChange={(e) => setJustificativa(e.target.value)}
                placeholder="Escreva aqui a justificativa para reprovação da solicitação..."
                className="h-[172px] w-full resize-none rounded-[4px] bg-white px-[16px] py-[14px] text-[14px] leading-[1.5] text-[#3f444d] outline-none placeholder:text-[#929090]"
              />
            </div>
          </div>

          <div className="mt-[25px] flex flex-wrap items-center justify-center gap-[25px]">
            <button
              type="button"
              onClick={onClose}
              className="flex h-[48px] w-full max-w-[258px] items-center justify-center gap-2 rounded-[4px] border border-[#0f2e4b] bg-white px-[8px] text-[16px] font-medium text-[#0f2e4b] hover:bg-slate-50"
            >
              <svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              RETORNAR
            </button>

            <button
              type="button"
              onClick={() => onSalvar({ motivos: motivosSelecionados, justificativa })}
              className="flex h-[48px] w-full max-w-[416px] items-center justify-center gap-2 rounded-[4px] bg-[#0f2e4b] px-[8px] text-[16px] font-medium text-white hover:opacity-95"
              style={{ backgroundColor: NAVY }}
            >
              SALVAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

