"use client";

import { useParams } from "next/navigation";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";

const ARQUIVOS = [
  "comprovantede pagamentoDAMSP.jpeg",
  "comprovantede identidade.jpeg",
  "comprovantede endereco.jpeg",
  "comprovantede CNH.jpeg",
  "comprovantede....jpeg",
  "comprovantede....jpeg",
  "comprovantede....jpeg",
];

export default function AprovacaoPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";

  return (
    <AtendimentoShell
      currentStep={5}
      bottomQuestion="Aprovar a Solicitação de Renovação de CONDUTAX?"
      bottomInstruction="Clique em Aprovar para concluir o atendimento."
      nextHref="/inicio"
      nextLabel="Aprovar"
      prevHref={`/inicio/renovacao/atendimento/${protocolo}/cnh`}
    >
      <div>
        <h2 className="text-base font-bold text-slate-900">Aprovação de solicitação</h2>

        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">Nome completo</p>
              <p className="mt-0.5 text-sm text-slate-700">Carlos Oliveira Siqueira</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Data de Nascimento</p>
              <p className="mt-0.5 text-sm text-slate-700">01/01/1988</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">DAMSP</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-emerald-600">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Paga
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Dados Cadastrais</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-emerald-600">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Aprovado
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">CPF</p>
              <p className="mt-0.5 text-sm text-slate-700">888.888.888-88</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Local e UF Nascimento</p>
              <p className="mt-0.5 text-sm text-slate-700">São Paulo - SP</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Identificação do Condutor</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-emerald-600">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Aprovado
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Dados CNH</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-emerald-600">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Aprovado
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800">Lista de arquivos enviados</h3>
            <div className="mt-2 max-h-48 overflow-y-auto rounded-lg border border-slate-200 bg-slate-50 p-3">
              <ul className="space-y-1.5">
                {ARQUIVOS.map((nome, i) => (
                  <li key={i}>
                    <span className="inline-flex items-center gap-2 rounded border border-sky-200 bg-sky-50 px-2 py-1 text-sm text-slate-700">
                      {nome} <span className="text-slate-500">1000kb</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm font-medium text-slate-600">{ARQUIVOS.length} arquivos enviados</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-4">
              <button type="button" className="flex min-w-[140px] flex-1 basis-0 items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-8 py-2.5 text-sm font-medium text-white hover:bg-[#16304d]">
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Baixar
              </button>
              <button type="button" className="flex min-w-[140px] flex-1 basis-0 items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-8 py-2.5 text-sm font-medium text-white hover:bg-[#16304d]">
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
