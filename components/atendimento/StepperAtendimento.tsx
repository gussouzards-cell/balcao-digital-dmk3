"use client";

import Link from "next/link";

export const STEP_LABELS_RENOVACAO = [
  "DAMSP",
  "Dados do Condutor",
  "Dados Cadastrais",
  "CNH",
  "Disrt. de Açoes Criminais",
  "Conclusão",
] as const;

export interface StepperAtendimentoProps {
  /** Rótulos das etapas (na ordem) */
  stepLabels: readonly string[];
  /** Passo atual (1-based) */
  currentStep: number;
  /** Link do botão VOLTAR; quando informado, exibe o botão à esquerda do stepper */
  prevHref?: string;
}

/**
 * Stepper + botão VOLTAR usado em todos os passos do atendimento.
 * Layout e estilos idênticos em todos os passos.
 */
export function StepperAtendimento({
  stepLabels,
  currentStep,
  prevHref,
}: StepperAtendimentoProps) {
  return (
    <div className="flex items-start gap-3 sm:gap-6">
      {prevHref && (
        <div className="flex h-8 shrink-0 items-center">
          <Link
            href={prevHref}
            className="flex h-8 min-h-[44px] items-center gap-1 text-xs font-medium uppercase leading-none text-primary translate-y-px hover:opacity-80"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            VOLTAR
          </Link>
        </div>
      )}
      <div className="min-w-0 flex-1 overflow-x-auto overflow-y-visible pb-2 -mx-1 px-1 sm:overflow-visible sm:mx-0 sm:px-0 [-webkit-overflow-scrolling:touch]">
        <div className="flex min-w-max items-start justify-center gap-0 sm:min-w-0 sm:flex-wrap">
          {stepLabels.map((label, i) => {
            const num = i + 1;
            const current = num === currentStep;
            const completed = num < currentStep;
            const isLast = num === stepLabels.length;
            const connectorSolid = completed || current;
            return (
              <div key={num} className="flex shrink-0 items-start">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold sm:h-8 sm:w-8 sm:text-xs ${
                      completed || current
                        ? "bg-primary text-white"
                        : "border border-primary bg-white text-primary"
                    }`}
                  >
                    {num}
                  </div>
                  <span
                    className={`mt-1 flex h-8 max-w-[3.5rem] items-start justify-center text-center text-[10px] leading-tight font-medium sm:max-w-[4.75rem] sm:text-[11px] ${
                      current || completed ? "text-primary" : "text-slate-500"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {!isLast && (
                  <div className="mx-0.5 mt-3.5 flex items-center sm:mx-2 sm:mt-4" aria-hidden>
                    <div className={`w-1 border-t sm:w-2 ${connectorSolid ? "border-dotted border-primary" : "border-dotted border-slate-300"}`} />
                    <div className={`w-6 border-t-2 sm:w-14 ${connectorSolid ? "border-solid border-primary" : "border-solid border-slate-300"}`} />
                    <div className={`w-1 border-t sm:w-2 ${connectorSolid ? "border-dotted border-primary" : "border-dotted border-slate-300"}`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
