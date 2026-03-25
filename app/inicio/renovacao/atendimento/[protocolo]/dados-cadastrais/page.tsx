"use client";

import { useParams } from "next/navigation";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";
import { renovacaoAtendimentoUrls } from "@/lib/renovacao-atendimento-nav";

export default function DadosCadastraisPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = renovacaoAtendimentoUrls(protocolo);

  return (
    <AtendimentoShell
      currentStep={3}
      showHistorico
      stepperBackHref={u.dadosCondutor}
      bottomQuestion="Os dados cadastrais de endereço e telefone são válidos?"
      bottomInstruction="Clique em avançar para aprovar e seguir para validação da CNH do condutor."
      nextHref={u.cnh}
      nextLabel="Avançar"
      rejectLabel="RECUSAR"
      rejectVariant="outline"
    >
      <div>
        <h2 className="text-base font-bold text-slate-900">Dados Cadastrais</h2>

        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">CEP:</span> 11.111-111</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Cidade:</span> São Paulo</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Endereço:</span> Rua Vitória</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">UF:</span> SP</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Número:</span> 33</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Telefone:</span> (11) 99999-9999</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Complemento:</span> -</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Telefone Residencial:</span> (11) 2222-2222</p>
            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Bairro:</span> Lorem Ipsum</p>
            <div className="pt-2">
              <p className="text-sm font-semibold text-slate-800">Comprovante endereço:</p>
              <p className="mt-1">
                <span className="inline-flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700">
                  comprovantede....jpeg <span className="text-slate-500">1000kb</span>
                </span>
              </p>
            </div>
          </div>

          <div>
            <div className="relative flex w-full aspect-[4/3] min-h-[220px] items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
              <div className="text-center text-slate-400">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="mt-2 text-sm">Comprovante de endereço</p>
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
            <div className="mt-3 flex flex-wrap gap-4">
              <button
                type="button"
                className="dtp-btn-primary flex min-w-[140px] flex-1 basis-0 items-center justify-center gap-2 rounded-lg px-8 py-2.5 text-sm font-medium"
                aria-label="Baixar comprovante de endereço"
              >
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Baixar
              </button>
              <button
                type="button"
                className="dtp-btn-primary flex min-w-[140px] flex-1 basis-0 items-center justify-center gap-2 rounded-lg px-8 py-2.5 text-sm font-medium"
                aria-label="Imprimir"
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
  );
}
