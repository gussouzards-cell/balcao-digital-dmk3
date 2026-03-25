"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";
import {
  ModalConfirmarAprovacaoInicial,
  ModalConfirmarAprovacao,
  ModalEfetivarSolicitacao,
  ModalConclusaoDeferida,
  ModalConclusaoReprovada,
  ModalConclusaoSolicitacao,
  ModalGerarDocumento,
  ModalIndeferir,
} from "@/components/atendimento/ConclusaoModais";
import { renovacaoAtendimentoUrls } from "@/lib/renovacao-atendimento-nav";

type ModalConclusao =
  | null
  | "confirmar"
  | "protocolar"
  | "efetivarSolicitacao"
  | "gerarDocumento"
  | "indeferir"
  | "sucessoDeferida"
  | "sucessoReprovada"
  | "sucessoSolicitacao";

const JUSTIFICATIVAS = [
  "CNH Inválida.",
  "Documento ilegível.",
  "Dados incongruentes.",
  "CNH vencida",
] as const;

const ARQUIVOS = [
  { nome: "comprovantedepagamentoDAMSP.jpeg", tamanho: "1000kb" },
  { nome: "certidãoaçõesjudiciais.jpeg", tamanho: "1000kb" },
] as const;

function CheckRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 px-4 py-1.5">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="h-5 w-5 rounded border-slate-300 text-[#0f2e4b] focus:ring-[#0f2e4b]" />
      <span className="text-sm text-[#3f444d]">{label}</span>
    </label>
  );
}

function StatusCheck({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-base font-bold text-[#4d4d4d]">{label}</p>
      <p className="flex items-center gap-2 text-base font-normal text-[#4d4d4d]">
        <span className="flex h-4 w-4 shrink-0 items-center justify-center text-emerald-600" aria-hidden>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        {value}
      </p>
    </div>
  );
}

export default function ConclusaoPage() {
  const params = useParams();
  const router = useRouter();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = renovacaoAtendimentoUrls(protocolo);
  const [checks, setChecks] = useState(() => JUSTIFICATIVAS.map(() => false));
  const [modal, setModal] = useState<ModalConclusao>(null);

  const irParaFila = useCallback(() => {
    setModal(null);
    router.push(u.filaRenovacao);
  }, [router, u.filaRenovacao]);

  return (
    <>
    <AtendimentoShell
      currentStep={6}
      showHistorico
      stepperBackHref={u.distribuicaoAcoes}
      footerLayout="conclusao"
      bottomQuestion="Concluir solicitação?"
      bottomInstruction=""
      nextHref={u.filaRenovacao}
      nextLabel="DEFERIR"
      solicitarNovosDocumentosHref="#"
      onConclusaoDeferir={() => setModal("confirmar")}
      onConclusaoRecusar={() => setModal("indeferir")}
      onConclusaoSolicitarNovosDocs={() => setModal("sucessoSolicitacao")}
    >
      <div>
        <h2 className="text-2xl font-bold leading-normal text-[#0f2e4b]">Aprovação de solicitação</h2>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
              <div>
                <p className="text-base font-bold text-[#4d4d4d]">Nome completo</p>
                <p className="mt-2 text-base font-normal text-[#4d4d4d]">Carlos Oliveira Siqueira</p>
              </div>
              <div>
                <p className="text-base font-bold text-[#4d4d4d]">CPF:</p>
                <p className="mt-2 text-base font-normal text-[#4d4d4d]">888.888.888-88</p>
              </div>
              <div>
                <p className="text-base font-bold text-[#4d4d4d]">Data de Nascimento</p>
                <p className="mt-2 text-base font-normal text-[#4d4d4d]">01/01/1988</p>
              </div>
              <div>
                <p className="text-base font-bold text-[#4d4d4d]">Local e UF Nascimento:</p>
                <p className="mt-2 text-base font-normal text-[#4d4d4d]">São Paulo - SP</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
              <StatusCheck label="DAMSP:" value="Paga" />
              <StatusCheck label="Identificação do Condutor:" value="Aprovado" />
              <StatusCheck label="Dados Cadastrais:" value="Aprovado" />
              <StatusCheck label="Distr. Ações Criminais" value="Aprovado" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-base font-bold text-[#4d4d4d]">Justificativas para recusa da solicitação</p>
              <div className="mt-3 max-h-[200px] overflow-y-auto rounded border-2 border-[#eaeaea] bg-white py-2">
                {JUSTIFICATIVAS.map((j, i) => (
                  <CheckRow
                    key={j}
                    label={j}
                    checked={checks[i] ?? false}
                    onChange={(v) => setChecks((c) => c.map((x, k) => (k === i ? v : x)))}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:flex-nowrap">
                <p className="text-base font-bold text-[#4d4d4d]">Dados CNH</p>
                <p className="flex items-center gap-2 text-base font-normal text-[#4d4d4d]">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center text-emerald-600" aria-hidden>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Aprovado
                </p>
              </div>

              <p className="mt-4 text-base font-bold text-[#4d4d4d]">Lista de arquivos enviados:</p>
              <div className="mt-3 min-h-[169px] space-y-2 rounded border-2 border-[#eaeaea] bg-white p-3">
                {ARQUIVOS.map((a) => (
                  <div key={a.nome} className="flex h-[30px] items-center justify-between rounded bg-[#f1f3f9] px-3 text-xs shadow-[0px_2px_2px_rgba(0,0,0,0.02)]">
                    <span className="truncate font-light text-[#0b326e]">{a.nome}</span>
                    <span className="shrink-0 text-[#4d4d4d]">{a.tamanho}</span>
                  </div>
                ))}
                <p className="pt-2 text-right text-xs font-semibold italic leading-normal text-[#4d4d4d]">
                  {String(ARQUIVOS.length).padStart(2, "0")} arquivos enviados
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex h-9 w-full max-w-[242px] flex-1 items-center justify-center gap-2 rounded bg-[#193758] px-2 text-sm font-medium text-white hover:opacity-95"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Baixar
                </button>
                <button
                  type="button"
                  className="inline-flex h-9 w-full max-w-[242px] flex-1 items-center justify-center gap-2 rounded bg-[#193758] px-2 text-sm font-medium text-white hover:opacity-95"
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
      </div>
    </AtendimentoShell>

    <ModalConfirmarAprovacaoInicial
      open={modal === "confirmar"}
      onClose={() => setModal(null)}
      onRetornar={() => setModal(null)}
      onProtocolar={() => setModal("protocolar")}
    />
    <ModalConfirmarAprovacao
      open={modal === "protocolar"}
      onClose={() => setModal(null)}
      onRetornar={() => setModal("confirmar")}
      onProtocolar={() => setModal("efetivarSolicitacao")}
    />
    <ModalEfetivarSolicitacao
      open={modal === "efetivarSolicitacao"}
      onClose={() => setModal(null)}
      onRetornar={() => setModal("protocolar")}
      onGerarDocumento={() => setModal("gerarDocumento")}
    />
    <ModalGerarDocumento
      open={modal === "gerarDocumento"}
      onClose={() => setModal(null)}
      onRetornar={() => setModal("efetivarSolicitacao")}
      onDeferirSolicitacao={() => setModal("sucessoDeferida")}
    />
    <ModalIndeferir
      open={modal === "indeferir"}
      onClose={() => setModal(null)}
      onRetornar={() => setModal(null)}
      onSolicitarNovosDocumentos={() => setModal("sucessoSolicitacao")}
      onIndeferir={() => setModal("sucessoReprovada")}
    />
    <ModalConclusaoDeferida open={modal === "sucessoDeferida"} onClose={() => setModal(null)} onProsseguir={irParaFila} />
    <ModalConclusaoReprovada open={modal === "sucessoReprovada"} onClose={() => setModal(null)} onProsseguir={irParaFila} />
    <ModalConclusaoSolicitacao open={modal === "sucessoSolicitacao"} onClose={() => setModal(null)} onProsseguir={irParaFila} />
    </>
  );
}
