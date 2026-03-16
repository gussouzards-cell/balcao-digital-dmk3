"use client";

import { useState } from "react";
import Link from "next/link";
import { ReprovacaoConfig } from "@/components/atendimento/reprovacao-config";

export interface ConfirmacaoRodapeProps {
  /** Pergunta principal exibida à esquerda */
  pergunta: string;
  /** Instrução secundária abaixo da pergunta */
  instrucao: string;
  /** Link do botão primário (Avançar/Aprovar) */
  nextHref: string;
  /** Rótulo do botão primário (ex: "AVANÇAR", "Aprovar") */
  nextLabel: string;
  /** Conteúdo contextual do modal de recusa */
  reprovacaoConfig: ReprovacaoConfig;
  /** Classe opcional no container para variar fundo/borda (ex: passo 1) */
  className?: string;
}

/**
 * Rodapé de confirmação usado em todos os passos do atendimento.
 * Layout: texto (pergunta + instrução) à esquerda; botões RECUSAR e Avançar à direita.
 * O botão Voltar fica apenas ao lado do stepper, não no rodapé.
 */
export function ConfirmacaoRodape({
  pergunta,
  instrucao,
  nextHref,
  nextLabel,
  reprovacaoConfig,
  className = "",
}: ConfirmacaoRodapeProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [justificativa, setJustificativa] = useState("");

  const toggleMotivo = (motivo: string) => {
    setSelected((prev) =>
      prev.includes(motivo) ? prev.filter((item) => item !== motivo) : [...prev, motivo],
    );
  };

  return (
    <>
      <div
        className={
          `rounded-lg border border-slate-400 bg-white p-3 sm:p-4 ${className}`.trim()
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-800">{pergunta}</p>
            <p className="mt-0.5 text-sm font-normal text-slate-600">{instrucao}</p>
          </div>
          <div className="flex min-h-[44px] flex-col gap-3 sm:min-h-0 sm:flex-row sm:shrink-0 sm:items-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg border-2 border-error-border bg-white px-6 py-2.5 text-sm font-semibold uppercase text-error hover:bg-error-bg sm:min-h-0 sm:w-auto sm:min-w-[120px]"
            >
              RECUSAR
            </button>
            <Link
              href={nextHref}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-success px-8 py-2.5 text-sm font-semibold uppercase text-white hover:bg-success-hover sm:min-h-0 sm:w-auto sm:min-w-[120px]"
            >
              {nextLabel}
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/45 p-3 py-6 sm:p-4">
          <div className="relative my-auto w-full max-w-3xl shrink-0 rounded-lg border border-slate-200 bg-white shadow-xl sm:max-w-4xl lg:max-w-5xl">
            <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 sm:pt-5">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold leading-tight text-primary sm:text-xl lg:text-2xl">
                  Recusar Solicitação - {reprovacaoConfig.etapaLabel}
                </h3>
                <p className="mt-2 text-sm text-slate-700 sm:text-base">
                  {reprovacaoConfig.subtitulo}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 rounded p-1.5 text-slate-700 hover:bg-slate-100 sm:relative sm:right-0 sm:top-0"
                aria-label="Fechar modal de recusa"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="max-h-[calc(100vh-12rem)] overflow-y-auto px-4 pb-4 pt-0 sm:px-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4">
                {reprovacaoConfig.motivos.map((motivo) => (
                  <label key={motivo} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                    <input
                      type="checkbox"
                      checked={selected.includes(motivo)}
                      onChange={() => toggleMotivo(motivo)}
                      className="mt-0.5 h-5 w-5 shrink-0 accent-primary"
                    />
                    <span>{motivo}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6">
                <p className="mb-2 text-base font-semibold text-slate-800 sm:text-lg">Justificativa:</p>
                <textarea
                  value={justificativa}
                  onChange={(e) => setJustificativa(e.target.value)}
                  placeholder={reprovacaoConfig.justificativaPlaceholder}
                  className="min-h-[120px] w-full rounded-md border-2 border-primary/80 p-3 text-base text-slate-700 outline-none placeholder:text-slate-400 focus:border-primary sm:min-h-[160px] sm:text-base"
                />
              </div>

              <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex w-full min-w-0 items-center justify-center gap-2 rounded-md border border-slate-400 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:w-auto sm:min-w-[140px] sm:px-6 sm:py-2.5 sm:text-base"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  RETORNAR
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex w-full min-w-0 items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover sm:w-auto sm:min-w-[140px] sm:px-6 sm:text-base"
                >
                  SALVAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
