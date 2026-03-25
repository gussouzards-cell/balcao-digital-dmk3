"use client";

import Link from "next/link";
import { Fragment, useCallback, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ModalFilaAtendimento } from "@/components/atendimento/ModalFilaAtendimento";
import { ModalHistoricoAtendimento } from "@/components/atendimento/ModalHistoricoAtendimento";
import { RENOVACAO_STEP_LABELS } from "@/lib/renovacao-atendimento-steps";
import { renovacaoAtendimentoUrls } from "@/lib/renovacao-atendimento-nav";
import { ModalRecusarSolicitacao } from "@/components/atendimento/ModalRecusarSolicitacao";

interface AtendimentoShellProps {
  currentStep: number;
  serviceTitle?: string;
  flowType?: "renovacao" | "cadastramento";
  children: React.ReactNode;
  bottomQuestion: string;
  bottomInstruction: string;
  nextHref: string;
  nextLabel?: string;
  /**
   * Voltar fica só ao lado do stepper (Figma: Botão_VOLTAR), não no rodapé.
   * Etapa 1: fila; demais: etapa anterior.
   */
  stepperBackHref?: string;
  stepperBackLabel?: string;
  /** Exibe botão HISTÓRICO no cabeçalho do protocolo */
  showHistorico?: boolean;
  /** Botão secundário no rodapé: estilo Figma (RECUSAR = contorno) */
  rejectLabel?: string;
  rejectVariant?: "solid" | "outline";
  /** Etapa distribuição de ações: botão amarelo antes de RECUSAR (protótipo Figma) */
  juridicoHref?: string;
  juridicoLabel?: string;
  /**
   * Se informado, substitui `juridicoHref` e renderiza o botão amarelo como `button`
   * (útil quando a ação abre modal ao invés de navegar).
   */
  onJuridicoEnviar?: () => void;
  /**
   * Rodapé da Conclusão (Figma): só pergunta curta + 3 botões — SOLICITAR NOVOS DOCUMENTOS | RECUSAR | DEFERIR.
   * Sem "Voltar" no rodapé; RECUSAR vermelho sólido; DEFERIR verde.
   */
  footerLayout?: "default" | "conclusao";
  solicitarNovosDocumentosHref?: string;
  /** Abre modais Figma (Confirmar / Indeferir) em vez de navegar direto */
  onConclusaoDeferir?: () => void;
  onConclusaoRecusar?: () => void;
  onConclusaoSolicitarNovosDocs?: () => void;
}

export function AtendimentoShell({
  currentStep,
  serviceTitle = "Renovação Condutax",
  flowType = "renovacao",
  children,
  bottomQuestion,
  bottomInstruction,
  nextHref,
  nextLabel = "Avançar",
  stepperBackHref,
  stepperBackLabel = "VOLTAR",
  showHistorico = false,
  rejectLabel = "Reprovar",
  rejectVariant = "solid",
  juridicoHref,
  juridicoLabel = "ENVIAR P/ DPTO JURÍDICO",
  onJuridicoEnviar,
  footerLayout = "default",
  solicitarNovosDocumentosHref = "#",
  onConclusaoDeferir,
  onConclusaoRecusar,
  onConclusaoSolicitarNovosDocs,
}: AtendimentoShellProps) {
  const params = useParams();
  const router = useRouter();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = renovacaoAtendimentoUrls(protocolo);
  const [historicoOpen, setHistoricoOpen] = useState(false);
  const [filaOpen, setFilaOpen] = useState(false);
  const [recusarSolicitacaoOpen, setRecusarSolicitacaoOpen] = useState(false);

  const steps = RENOVACAO_STEP_LABELS.map((label, i) => ({
    num: i + 1,
    label,
    current: i + 1 === currentStep,
    completed: i + 1 < currentStep,
  }));

  const filaModalTitle =
    flowType === "renovacao"
      ? "Fila de Atendimento Renovação- ao vivo"
      : "Fila de Atendimento Cadastramento - ao vivo";

  const filaTipo = flowType === "renovacao" ? "Renovação" : "Cadastro";

  const rejectClasses =
    rejectVariant === "outline"
      ? "flex min-w-0 flex-1 basis-0 items-center justify-center gap-2 rounded-lg border-2 border-[#193758] bg-white px-4 py-2 text-sm font-semibold text-[#193758] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193758] focus-visible:ring-offset-2 sm:min-w-[140px] sm:flex-initial sm:px-8"
      : "dtp-btn-reject flex min-w-0 flex-1 basis-0 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dtp-primary focus-visible:ring-offset-2 sm:min-w-[140px] sm:flex-initial sm:px-8";

  const irParaFila = useCallback(() => {
    router.push(u.filaRenovacao);
  }, [router, u.filaRenovacao]);

  const recusasTitlePorEtapa: Record<number, string> = {
    1: "DAMSP",
    2: "Identificação do Condutor",
    3: "Dados Cadastrais",
    4: "CNH",
    5: "Certidão de Distribuição de Ações Criminais",
  };

  // Motivos extraídos diretamente dos modais do Figma:
  // passo 1: node 58827:1395
  // passo 2: node 58828:1620
  // passo 3: node 58828:1704
  // passo 4: node 58828:1788
  // passo 5: node 58888:18424
  const recusasMotivosCadastramento: Record<number, string[]> = {
    1: [
      "Comprovante de pagamento ilegível.",
      "Pagamento após vencimento da guia.",
      "Valor de pagamento incorreto.",
      "Guia de pagamento inválida.",
      "Informações ausentes.",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    2: [
      "Documento de Identificação inválido.",
      "Título de Eleitor inválido.",
      "Certidão de Nascimento inválida.",
      "Dados de documentos incongruentes.",
      "Documentos ilegíveis",
      "Informações ausentes.",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    3: [
      "Comprovante de Endereço inválido.",
      "Documentos ilegíveis.",
      "Dados de cadastro incongruentes.",
      "Endereço inválido.",
      "Telefone Inválido.",
      "Informações ausentes.",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    4: [
      "CNH Inválida.",
      "Documento ilegível.",
      "Dados incongruentes.",
      "CNH vencida",
      "Categoria de CNH inválida.",
      "Informações ausentes.",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    5: [
      "Certidão inválida.",
      "Documento ilegível.",
      "Homônimo não verificado.",
      "Usuário não indicou ações criminais existentes.",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
  };
  const recusasMotivosRenovacao: Record<number, string[]> = {
    1: [
      "Comprovante de pagamento ilegível.",
      "Pagamento após vencimento da guia.",
      "Valor de pagamento incorreto.",
      "Guia de pagamento inválida.",
      "Informações ausentes.",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    2: [
      "Documento de Identificação inválido.",
      "Título de Eleitor inválido.",
      "Certidão de Nascimento inválida.",
      "Dados de documentos incongruentes.",
      "Documentos ilegíveis",
      "Informações ausentes.",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    3: [
      "Comprovante de Endereço inválido.",
      "Documentos ilegíveis.",
      "Dados de cadastro incongruentes.",
      "Endereço inválido.",
      "Telefone Inválido.",
      "Informações ausentes.",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    4: [
      "CNH Inválida.",
      "Documento ilegível.",
      "Dados incongruentes.",
      "CNH vencida",
      "Categoria de CNH inválida.",
      "Informações ausentes.",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    5: [
      "Certidão inválida.",
      "Documento ilegível.",
      "Homônimo não verificado.",
      "Usuário não indicou ações criminais existentes.",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
  };
  const recusasMotivosPorEtapa = flowType === "cadastramento" ? recusasMotivosCadastramento : recusasMotivosRenovacao;

  return (
    <div className="space-y-4">
      <ModalFilaAtendimento
        open={filaOpen}
        onClose={() => setFilaOpen(false)}
        highlightProtocolo={protocolo}
        title={filaModalTitle}
        tipo={filaTipo}
      />
      {showHistorico && (
        <ModalHistoricoAtendimento open={historicoOpen} onClose={() => setHistoricoOpen(false)} />
      )}
      {footerLayout === "default" && (
        <ModalRecusarSolicitacao
          open={recusarSolicitacaoOpen}
          stepTitle={recusasTitlePorEtapa[currentStep] ?? RENOVACAO_STEP_LABELS[currentStep - 1] ?? "Etapa"}
          motivos={recusasMotivosPorEtapa[currentStep] ?? []}
          solicitacaoLabel={flowType === "cadastramento" ? "Cadastramento" : "Renovação"}
          onClose={() => setRecusarSolicitacaoOpen(false)}
          onSalvar={() => {
            setRecusarSolicitacaoOpen(false);
            irParaFila();
          }}
        />
      )}
      <div className="overflow-hidden rounded-b-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-bold leading-tight text-[#4d4d4d] sm:text-2xl">{serviceTitle}</h1>
            <span className="rounded border border-[#b00020] bg-[rgba(176,0,32,0.3)] px-1 py-0.5 text-[10px] font-medium text-[#b00020]">
              PRIORIDADE
            </span>
            <span className="rounded border border-[#53a5ff] bg-[rgba(83,165,255,0.3)] px-1 py-0.5 text-[10px] font-medium text-[#2469b5]">
              IDOSO
            </span>
            <button
              type="button"
              onClick={() => setFilaOpen(true)}
              className="max-w-full cursor-pointer rounded border border-[#535353] bg-[rgba(141,141,141,0.3)] px-1 py-0.5 text-left text-[10px] font-medium text-[#535353] transition hover:bg-[rgba(141,141,141,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#535353] focus-visible:ring-offset-2 sm:max-w-[280px]"
              aria-haspopup="dialog"
              aria-expanded={filaOpen}
              aria-controls="modal-fila-atendimento"
            >
              POSIÇÃO NA FILA PRIORIZADA POR: CARLOS SILVA
            </button>
          </div>
          {showHistorico && (
            <button
              type="button"
              onClick={() => setHistoricoOpen(true)}
              className="inline-flex h-6 items-center gap-1 rounded border border-[#0f2e4b] bg-white px-2 py-1 text-[10px] font-medium text-[#0f2e4b] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2e4b] focus-visible:ring-offset-2"
              aria-haspopup="dialog"
              aria-expanded={historicoOpen}
              aria-controls="modal-historico-atendimento"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              HISTÓRICO
            </button>
          )}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-slate-200 pt-4 sm:grid-cols-3 lg:grid-cols-6">
          <div className="border-r border-slate-200 pr-3 last:border-r-0 sm:pr-4">
            <p className="text-xs font-semibold text-slate-800 sm:text-sm">Status:</p>
            <p className="mt-1 flex items-center gap-1 text-sm font-bold text-[#193758]">
              <span aria-hidden>→</span> Atendimento iniciado
            </p>
          </div>
          <div className="border-r border-slate-200 pr-3 sm:pr-4">
            <p className="text-xs font-semibold text-slate-800 sm:text-sm">Protocolo de atendimento:</p>
            <p className="mt-1 text-sm text-slate-700">{protocolo}</p>
          </div>
          <div className="border-r border-slate-200 pr-3 sm:pr-4">
            <p className="text-xs font-semibold text-slate-800 sm:text-sm">Tempo decorrido:</p>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum</p>
          </div>
          <div className="border-r border-slate-200 pr-3 sm:pr-4">
            <p className="text-xs font-semibold text-slate-800 sm:text-sm">Setor:</p>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum</p>
          </div>
          <div className="border-r border-slate-200 pr-3 sm:pr-4">
            <p className="text-xs font-semibold text-slate-800 sm:text-sm">Resp. atendimento no DTP:</p>
            <p className="mt-1 text-sm text-slate-700">João Silva</p>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-slate-800 sm:text-sm">DAMSP:</p>
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

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4">
          {/* Stepper alinhado ao Figma: VOLTAR à esquerda; círculos + linha no eixo médio; rótulos 10px abaixo */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            {stepperBackHref && (
              <Link
                href={stepperBackHref}
                className="inline-flex shrink-0 items-center gap-1 text-xs font-normal text-[#0f2e4b] hover:underline"
              >
                <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                {stepperBackLabel}
              </Link>
            )}
            <div className="min-w-0 flex-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex min-w-min items-start justify-center px-0 sm:px-1">
                {steps.map((step, i) => (
                  <Fragment key={step.num}>
                    <div className="flex w-[4.5rem] shrink-0 flex-col items-center sm:w-[5.75rem]">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          step.completed || step.current
                            ? "bg-[#0f2e4b] text-white"
                            : "border-2 border-[#cfd4d9] bg-white text-[#a0aec0]"
                        }`}
                      >
                        {step.completed ? (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          step.num
                        )}
                      </div>
                      <span
                        className={`mt-2 max-w-[5.5rem] text-center text-[10px] font-medium leading-tight sm:max-w-[6.5rem] ${
                          step.current || step.completed ? "text-[#0f2e4b]" : "text-[#a0aec0]"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className={`mt-[17px] h-0.5 min-w-[14px] flex-1 max-w-[101px] border-t-2 sm:min-w-[20px] ${
                          step.completed ? "border-solid border-[#0f2e4b]" : "border-dashed border-[#cbd5e1]"
                        }`}
                        aria-hidden
                      />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-slate-200 pt-5">{children}</div>

        <div className="mt-5 border-t border-slate-200 pt-4">
          {footerLayout === "conclusao" ? (
            <div className="w-full min-h-[95px] rounded-[6px] border-[1.5px] border-[#0f2e4b] bg-white px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <p className="shrink-0 text-base font-semibold leading-normal text-[#3f444d]">{bottomQuestion}</p>
                <div className="flex min-w-0 flex-wrap items-center justify-end gap-2">
                  {onConclusaoSolicitarNovosDocs ? (
                    <button
                      type="button"
                      onClick={onConclusaoSolicitarNovosDocs}
                      className="inline-flex h-8 w-full min-w-0 max-w-[288px] flex-1 items-center justify-center rounded px-2 text-sm font-medium text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2e4b] focus-visible:ring-offset-2 sm:flex-initial"
                      style={{ backgroundColor: "#0f2e4b" }}
                    >
                      SOLICITAR NOVOS DOCUMENTOS
                    </button>
                  ) : (
                    <Link
                      href={solicitarNovosDocumentosHref}
                      className="inline-flex h-8 w-full min-w-0 max-w-[288px] flex-1 items-center justify-center rounded px-2 text-sm font-medium text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2e4b] focus-visible:ring-offset-2 sm:flex-initial"
                      style={{ backgroundColor: "#0f2e4b" }}
                    >
                      SOLICITAR NOVOS DOCUMENTOS
                    </Link>
                  )}
                  <button
                    type="button"
                    onClick={() => onConclusaoRecusar?.()}
                    className="inline-flex h-8 w-full min-w-0 max-w-[200px] flex-1 items-center justify-center gap-2 rounded px-2 text-sm font-medium text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:flex-initial"
                    style={{ backgroundColor: "#be0000" }}
                    aria-label="Recusar solicitação"
                  >
                    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9l-6 6M9 9l6 6" />
                    </svg>
                    RECUSAR
                  </button>
                  {onConclusaoDeferir ? (
                    <button
                      type="button"
                      onClick={onConclusaoDeferir}
                      className="inline-flex h-8 w-full min-w-0 max-w-[269px] flex-1 items-center justify-center gap-2 rounded px-2 text-sm font-medium text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:flex-initial"
                      style={{ backgroundColor: "#408955" }}
                      aria-label="Deferir solicitação"
                    >
                      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12.5l2.5 2.5 5-5.5" />
                      </svg>
                      {nextLabel}
                    </button>
                  ) : (
                    <Link
                      href={nextHref}
                      className="inline-flex h-8 w-full min-w-0 max-w-[269px] flex-1 items-center justify-center gap-2 rounded px-2 text-sm font-medium text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:flex-initial"
                      style={{ backgroundColor: "#408955" }}
                      aria-label="Deferir solicitação"
                    >
                      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12.5l2.5 2.5 5-5.5" />
                      </svg>
                      {nextLabel}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full rounded-lg border border-slate-400 bg-white p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-800">{bottomQuestion}</p>
                  <p className="mt-0.5 text-sm font-normal text-slate-600">{bottomInstruction}</p>
                </div>
                <div className="flex min-w-0 flex-wrap items-stretch gap-2 sm:flex-initial">
                  {(juridicoHref || onJuridicoEnviar) && (
                    <>
                      {onJuridicoEnviar ? (
                        <button
                          type="button"
                          onClick={onJuridicoEnviar}
                          className="flex min-w-0 flex-1 basis-0 items-center justify-center gap-2 rounded-lg border border-amber-600/40 bg-amber-300 px-3 py-2 text-center text-xs font-bold uppercase leading-tight text-[#3d2e00] shadow-sm hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:min-w-[160px] sm:flex-initial sm:px-4 sm:text-[11px]"
                        >
                          {juridicoLabel}
                        </button>
                      ) : (
                        juridicoHref && (
                          <Link
                            href={juridicoHref}
                            className="flex min-w-0 flex-1 basis-0 items-center justify-center gap-2 rounded-lg border border-amber-600/40 bg-amber-300 px-3 py-2 text-center text-xs font-bold uppercase leading-tight text-[#3d2e00] shadow-sm hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:min-w-[160px] sm:flex-initial sm:px-4 sm:text-[11px]"
                          >
                            {juridicoLabel}
                          </Link>
                        )
                      )}
                    </>
                  )}
                  <button
                    type="button"
                    className={rejectClasses}
                    aria-label={rejectLabel}
                    onClick={() => setRecusarSolicitacaoOpen(true)}
                  >
                    {rejectVariant === "outline" ? (
                      rejectLabel
                    ) : (
                      <>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-dtp-btn-reject text-white" aria-hidden>
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                        {rejectLabel}
                      </>
                    )}
                  </button>
                  <Link
                    href={nextHref}
                    className="dtp-btn-approve flex min-w-0 flex-1 basis-0 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dtp-primary focus-visible:ring-offset-2 sm:min-w-[140px] sm:flex-initial sm:px-8"
                    aria-label={nextLabel === "Avançar" ? "Avançar para próxima etapa" : nextLabel}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white" aria-hidden>
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {nextLabel}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
