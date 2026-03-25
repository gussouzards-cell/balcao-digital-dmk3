"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";
import { renovacaoAtendimentoUrls } from "@/lib/renovacao-atendimento-nav";

const IMG_COMPROVANTE_DAMSP =
  "https://www.figma.com/api/mcp/asset/90e1964f-b5c3-4976-b82d-c3e788f1ed26";

export default function AtendimentoRenovacaoDamspPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = renovacaoAtendimentoUrls(protocolo);

  return (
    <AtendimentoShell
      currentStep={1}
      showHistorico
      stepperBackHref={u.filaRenovacao}
      bottomQuestion="A DAMSP foi paga e o comprovante válido?"
      bottomInstruction="Clique em avançar para aprovar e seguir para validação de dados do condutor."
      nextHref={u.dadosCondutor}
      nextLabel="Avançar"
      rejectLabel="RECUSAR"
      rejectVariant="outline"
    >
      <div>
        <h2 className="text-base font-bold text-slate-900">Conferência DAMSP</h2>

        <div className="mt-4 grid gap-5 lg:grid-cols-2">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">DAMSP:</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
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
              <p className="mt-1 text-sm font-bold uppercase text-[#193758]">Renovação de Condutax</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Comprovante de pagamento:</p>
              <p className="mt-1">
                <a href="#" className="text-sm text-[#193758] underline hover:no-underline">
                  comprovantede....jpeg
                </a>
                <span className="ml-2 text-sm text-slate-500">1000kb</span>
              </p>
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
              <Image
                src={IMG_COMPROVANTE_DAMSP}
                alt="Comprovante de pagamento DAMSP"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 480px, 100vw"
                unoptimized
                priority
              />
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
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex min-w-[140px] flex-1 items-center justify-center gap-2 rounded bg-[#193758] px-6 py-2.5 text-sm font-medium text-white hover:opacity-95"
              >
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Baixar
              </button>
              <button
                type="button"
                className="inline-flex min-w-[140px] flex-1 items-center justify-center gap-2 rounded bg-[#193758] px-6 py-2.5 text-sm font-medium text-white hover:opacity-95"
              >
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 00-2 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Imprimir
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded bg-[#193758] px-5 py-2 text-sm font-medium text-white hover:opacity-95"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Visualizar DAMSP
              </button>
            </div>
          </div>
        </div>
      </div>
    </AtendimentoShell>
  );
}
