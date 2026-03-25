"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";
import { renovacaoAtendimentoUrls } from "@/lib/renovacao-atendimento-nav";
import { ModalSolicitacaoDepartamentoJuridicoRenovacao } from "@/components/atendimento/CadastroConclusaoModais";

/** Preview da certidão — asset do frame Figma (expira em ~7 dias no MCP; substitua por URL estável em produção). */
const IMG_CERTIDAO =
  "https://www.figma.com/api/mcp/asset/90e1964f-b5c3-4976-b82d-c3e788f1ed26";

export default function DistribuicaoAcoesPage() {
  const params = useParams();
  const router = useRouter();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = renovacaoAtendimentoUrls(protocolo);
  const [modal, setModal] = useState<null | "juridicoEnviado">(null);

  const irParaFila = useCallback(() => {
    setModal(null);
    router.push(u.filaRenovacao);
  }, [router, u.filaRenovacao]);

  return (
    <>
      <AtendimentoShell
        currentStep={5}
        showHistorico
        stepperBackHref={u.cnh}
        bottomQuestion="Os dados de distribuição de ações criminais são válidos?"
        bottomInstruction="Clique em avançar para aprovar e avançar para finalização do atendimento."
        nextHref={u.conclusao}
        nextLabel="Avançar"
        rejectLabel="RECUSAR"
        rejectVariant="outline"
        juridicoLabel="ENVIAR P/ DPTO JURÍDICO"
        onJuridicoEnviar={() => setModal("juridicoEnviado")}
      >
        <div>
        <h2 className="text-base font-bold text-slate-900">Distribuição de Ações Criminais</h2>

        <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-800">Apontamento criminal:</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium text-emerald-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                INEXISTENTE
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Apontamento homônimo:</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium text-rose-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-white" aria-hidden>
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                EXISTENTE
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Certidão de Distribuição de Ações Criminais:</p>
              <button
                type="button"
                className="mt-2 flex w-full max-w-md items-center justify-between gap-2 rounded border border-sky-200 bg-sky-50 px-3 py-2.5 text-left text-sm text-[#193758] transition-colors hover:bg-sky-100"
              >
                <span className="truncate font-medium underline decoration-sky-300 underline-offset-2">certidaode....jpeg</span>
                <span className="shrink-0 text-slate-500">1000kb</span>
              </button>
            </div>
          </div>

          <div>
            <div className="relative aspect-[3/4] min-h-[280px] w-full overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Image
                src={IMG_CERTIDAO}
                alt="Certidão de distribuição de ações criminais"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 480px, 100vw"
                unoptimized
              />
              <button
                type="button"
                className="absolute right-2 top-2 rounded border border-slate-200 bg-white p-1.5 text-slate-500 shadow-sm hover:bg-slate-50"
                title="Maximizar"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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
            </div>
          </div>
        </div>
      </div>
      </AtendimentoShell>

      <ModalSolicitacaoDepartamentoJuridicoRenovacao
        open={modal === "juridicoEnviado"}
        onClose={() => setModal(null)}
        onProsseguir={irParaFila}
      />
    </>
  );
}
