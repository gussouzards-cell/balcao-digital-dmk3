"use client";

import { useParams } from "next/navigation";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";

export default function CnhPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";

  return (
    <AtendimentoShell
      currentStep={4}
      bottomQuestion="Os dados da CNH e comprovante são válidos?"
      bottomInstruction="Clique em avançar para aprovar e seguir para aprovação final da solicitação."
      nextHref={`/inicio/renovacao/atendimento/${protocolo}/distribuicao`}
      nextLabel="Avançar"
      prevHref={`/inicio/renovacao/atendimento/${protocolo}/dados-cadastrais`}
    >
      <div>
        <h2 className="text-base font-bold text-slate-900">Confirmação de Dados</h2>

        <div className="mt-4 grid gap-6 sm:gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Nome completo:</span> Carlos Oliveira Siqueira</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">CPF:</span> 888.888.888-88</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">RG/RNM / Órgão Emissor/ UF:</span> 888.888 SSP SP</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">N° Registro:</span> 88888888888</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Categoria Habilitação:</span> AB</p>
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-slate-800">Comprovante CNH:</span>{" "}
              <span className="inline-flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-sm">
                comprovantede....jpeg <span className="text-slate-500">1000kb</span>
              </span>
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">1ª Habilitação:</span> 01/01/1990</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Data de Nascimento:</span> 01/01/1988</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Local e UF Nascimento:</span> São Paulo - SP</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Nacionalidade:</span> Brasileiro</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Validade Habilitação:</span> 01/01/2030</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2" />
          <div>
            <div className="relative flex w-full aspect-[3/2] min-h-[200px] items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
              <div className="text-center text-slate-400">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <p className="mt-2 text-sm">CNH</p>
              </div>
              <button
                type="button"
                className="absolute right-2 top-2 rounded border border-slate-200 bg-white p-1.5 text-slate-500 shadow-sm hover:bg-slate-50"
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
                className="btn-primary flex min-h-[44px] min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-8 py-2.5 text-sm font-medium text-white hover:bg-primary-hover sm:min-h-0 sm:min-w-[140px]"
              >
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Baixar
              </button>
              <button
                type="button"
                className="btn-primary flex min-h-[44px] min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-8 py-2.5 text-sm font-medium text-white hover:bg-primary-hover sm:min-h-0 sm:min-w-[140px]"
              >
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 00-2 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Imprimir
              </button>
            </div>
          </div>
        </div>
      </div>
    </AtendimentoShell>
  );
}
