"use client";

import { useParams } from "next/navigation";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";
import { cadastramentoAtendimentoUrls } from "@/lib/cadastramento-atendimento-nav";

export default function CadastramentoCnhPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = cadastramentoAtendimentoUrls(protocolo);

  return (
    <AtendimentoShell
      currentStep={4}
      flowType="cadastramento"
      serviceTitle="Cadastramento Condutax"
      showHistorico
      stepperBackHref={u.dadosCadastrais}
      bottomQuestion="Os dados da CNH e comprovante são válidos?"
      bottomInstruction="Clique em avançar para seguir para a distribuição de ações criminais."
      nextHref={u.distribuicaoAcoes}
      nextLabel="Avançar"
      rejectLabel="RECUSAR"
      rejectVariant="outline"
      >
      <h2 className="text-base font-bold text-slate-900">Dados CNH</h2>
    </AtendimentoShell>
  );
}

