"use client";

import { useParams } from "next/navigation";
import { CabecalhoAtendimento, BREADCRUMB_RENOVACAO } from "@/components/atendimento/CabecalhoAtendimento";
import { ConfirmacaoRodape } from "@/components/atendimento/ConfirmacaoRodape";
import { getReprovacaoConfigByStep } from "@/components/atendimento/reprovacao-config";
import { StepperAtendimento, STEP_LABELS_RENOVACAO } from "@/components/atendimento/StepperAtendimento";

export default function AtendimentoRenovacaoPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";

  return (
    <div className="page-atendimento min-w-0 space-y-4">
      <CabecalhoAtendimento
        protocolo={protocolo}
        breadcrumbSegments={BREADCRUMB_RENOVACAO}
        serviceTitle="Renovação Condutax"
      />

      <div className="atendimento-card rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
        <StepperAtendimento
          stepLabels={STEP_LABELS_RENOVACAO}
          currentStep={1}
          prevHref="/inicio"
        />

        {/* Área principal — Conferência DAMSP */}
        <div className="mt-4 border-t border-slate-200 pt-4 sm:mt-6 sm:pt-6">
          <h2 className="text-base font-bold text-slate-900">Conferência DAMSP</h2>

          <div className="mt-4 grid gap-6 sm:gap-6 lg:grid-cols-2">
            {/* Coluna esquerda: dados do pagamento */}
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">DAMSP:</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-success">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-success-bg text-white">
                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Paga
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Valor</p>
                <p className="mt-1 text-sm text-slate-700">R$ 888,88</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Pagamento efetuado em:</p>
                <p className="mt-1 text-sm text-slate-700">01/01/2026</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Validade:</p>
                <p className="mt-1 text-sm text-slate-700">12/12/2026</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Serviços:</p>
                <p className="mt-1 text-sm font-bold uppercase text-slate-800">RENOVAÇÃO DE CONDUTAX</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Comprovante de pagamento:</p>
                <p className="mt-1">
                  <a href="#" className="text-sm text-primary underline hover:no-underline">
                    comprovantede....jpeg
                  </a>
                  <span className="ml-2 text-sm text-slate-500">1000kb</span>
                </p>
              </div>
            </div>

            {/* Coluna direita: preview do comprovante */}
            <div>
              <div className="relative flex w-full aspect-[4/3] min-h-[220px] items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                <div className="text-center text-slate-400">
                  <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2 text-sm">Comprovante de pagamento</p>
                </div>
                <button
                  type="button"
                  className="absolute right-2 top-2 rounded border border-slate-200 bg-white p-1.5 text-slate-500 shadow-sm hover:bg-slate-50 hover:text-slate-700"
                  title="Maximizar"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  className="flex min-h-[44px] min-w-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-hover sm:min-h-0 sm:min-w-[120px]"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Baixar
                </button>
                <button
                  type="button"
                  className="flex min-h-[44px] min-w-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-hover sm:min-h-0 sm:min-w-[120px]"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 00-2 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Imprimir
                </button>
                <button
                  type="button"
                  className="flex min-h-[44px] min-w-0 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-hover sm:min-h-0"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Visualizar DAMSP
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <ConfirmacaoRodape
            pergunta="A DAMSP foi paga e o comprovante válido?"
            instrucao="Clique em avançar para aprovar e seguir para validação de dados do condutor."
            nextHref={`/inicio/renovacao/atendimento/${protocolo}/dados-condutor`}
            nextLabel="AVANÇAR"
            reprovacaoConfig={getReprovacaoConfigByStep(1)}
          />
        </div>
      </div>
    </div>
  );
}
