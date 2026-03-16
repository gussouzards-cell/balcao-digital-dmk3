"use client";

import { useParams } from "next/navigation";
import { BreadcrumbItem, CabecalhoAtendimento, BREADCRUMB_RENOVACAO } from "@/components/atendimento/CabecalhoAtendimento";
import { ConfirmacaoRodape } from "@/components/atendimento/ConfirmacaoRodape";
import { getReprovacaoConfigByStep } from "@/components/atendimento/reprovacao-config";
import { StepperAtendimento, STEP_LABELS_RENOVACAO } from "@/components/atendimento/StepperAtendimento";

interface AtendimentoShellProps {
  currentStep: number;
  children: React.ReactNode;
  bottomQuestion: string;
  bottomInstruction: string;
  nextHref: string;
  nextLabel?: string;
  /** Link para o passo anterior; quando informado, exibe o botão Voltar */
  prevHref?: string;
  /** Breadcrumb (padrão: Renovação). Use para Cadastramento, Licença, etc. */
  breadcrumbSegments?: BreadcrumbItem[];
  /** Título do serviço no card (padrão: Renovação Condutax) */
  serviceTitle?: string;
}

export function AtendimentoShell({
  currentStep,
  children,
  bottomQuestion,
  bottomInstruction,
  nextHref,
  nextLabel = "Avançar",
  prevHref,
  breadcrumbSegments = BREADCRUMB_RENOVACAO,
  serviceTitle = "Renovação Condutax",
}: AtendimentoShellProps) {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";

  return (
    <div className="page-atendimento min-w-0 space-y-4">
      <CabecalhoAtendimento
        protocolo={protocolo}
        breadcrumbSegments={breadcrumbSegments}
        serviceTitle={serviceTitle}
      />

      <div className="atendimento-card rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
        <StepperAtendimento
          stepLabels={STEP_LABELS_RENOVACAO}
          currentStep={currentStep}
          prevHref={prevHref}
        />

        <div className="mt-4 border-t border-slate-200 pt-4 sm:mt-6 sm:pt-6">{children}</div>

        <div className="mt-4 sm:mt-6">
          <ConfirmacaoRodape
            pergunta={bottomQuestion}
            instrucao={bottomInstruction}
            nextHref={nextHref}
            nextLabel={nextLabel}
            reprovacaoConfig={getReprovacaoConfigByStep(currentStep)}
          />
        </div>
      </div>
    </div>
  );
}
