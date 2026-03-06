"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const STEP_LABELS = [
  "DAMSP",
  "Dados do Condutor",
  "Dados Cadastrais",
  "CNH",
  "Aprovação",
];

interface AtendimentoShellProps {
  currentStep: number;
  children: React.ReactNode;
  bottomQuestion: string;
  bottomInstruction: string;
  nextHref: string;
  nextLabel?: string;
  /** Link para o passo anterior; quando informado, exibe o botão Voltar */
  prevHref?: string;
}

export function AtendimentoShell({
  currentStep,
  children,
  bottomQuestion,
  bottomInstruction,
  nextHref,
  nextLabel = "Avançar",
  prevHref,
}: AtendimentoShellProps) {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";

  const steps = STEP_LABELS.map((label, i) => ({
    num: i + 1,
    label,
    current: i + 1 === currentStep,
    completed: i + 1 < currentStep,
  }));

  return (
    <div className="space-y-4">
      {/* Card: Renovação Condutax + tags + grid */}
      <div className="rounded-b-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-lg font-bold text-slate-800">Renovação Condutax</h1>
          <span className="rounded bg-rose-500 px-2.5 py-1 text-xs font-bold text-white">PRIORIDADE</span>
          <span className="rounded bg-sky-500 px-2.5 py-1 text-xs font-bold text-white">IDOSO</span>
          <span className="rounded bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800">
            POSIÇÃO NA FILA PRIORIZADA POR: CARLOS SILVA
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-slate-200 pt-4 sm:grid-cols-3 lg:grid-cols-6">
          <div className="border-r border-slate-200 pr-4">
            <p className="text-sm font-semibold text-slate-800">Status:</p>
            <p className="mt-1 flex items-center gap-1 text-sm font-bold text-[#1e3a5f]">→ Atendimento iniciado</p>
          </div>
          <div className="border-r border-slate-200 pr-4">
            <p className="text-sm font-semibold text-slate-800">Protocolo de atendimento:</p>
            <p className="mt-1 text-sm text-slate-700">{protocolo}</p>
          </div>
          <div className="border-r border-slate-200 pr-4">
            <p className="text-sm font-semibold text-slate-800">Tempo decorrido:</p>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum</p>
          </div>
          <div className="border-r border-slate-200 pr-4">
            <p className="text-sm font-semibold text-slate-800">Setor:</p>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum</p>
          </div>
          <div className="border-r border-slate-200 pr-4">
            <p className="text-sm font-semibold text-slate-800">Resp. atendimento no DTP:</p>
            <p className="mt-1 text-sm text-slate-700">João Silva</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">DAMSP:</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-700">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Paga
            </p>
          </div>
        </div>
      </div>

      {/* Seção branca: stepper + conteúdo + rodapé */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-center gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                    step.completed
                      ? "bg-[#1e3a5f] text-white"
                      : step.current
                        ? "bg-[#1e3a5f] text-white"
                        : "border-2 border-slate-300 bg-white text-slate-500"
                  }`}
                >
                  {step.completed ? (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.num
                  )}
                </div>
                <span className={`mt-1 text-xs font-medium ${step.current || step.completed ? "text-[#1e3a5f]" : "text-slate-500"}`}>
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`mx-1 h-0.5 w-6 min-w-0 border-t-2 sm:mx-2 sm:w-10 ${
                    step.completed || step.current ? "border-solid border-slate-400" : "border-dashed border-slate-300"
                  }`}
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-slate-200 pt-5">{children}</div>

        {/* Rodapé de ação */}
        <div className="mt-5 border-t border-slate-200 pt-4">
          <div className="w-full rounded-lg border border-slate-400 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-800">{bottomQuestion}</p>
                <p className="mt-0.5 text-sm font-normal text-slate-600">{bottomInstruction}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {prevHref && (
                  <Link
                    href={prevHref}
                    className="flex min-w-[120px] items-center justify-center gap-2 rounded-lg border-2 border-slate-400 bg-white px-6 py-2 text-sm font-semibold text-slate-700 hover:border-slate-500 hover:bg-slate-50"
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Voltar
                  </Link>
                )}
                <button
                  type="button"
                  className="flex min-w-[140px] items-center justify-center gap-2 rounded-lg border-2 border-rose-600 bg-white px-8 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  Reprovar
                </button>
                <Link
                  href={nextHref}
                  className="flex min-w-[140px] items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {nextLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
