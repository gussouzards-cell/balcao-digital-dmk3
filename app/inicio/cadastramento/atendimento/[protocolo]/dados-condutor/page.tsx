"use client";

import { useParams } from "next/navigation";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";
import { cadastramentoAtendimentoUrls } from "@/lib/cadastramento-atendimento-nav";

export default function CadastramentoDadosCondutorPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = cadastramentoAtendimentoUrls(protocolo);

  return (
    <AtendimentoShell
      currentStep={2}
      flowType="cadastramento"
      serviceTitle="Cadastramento Condutax"
      showHistorico
      stepperBackHref={u.damsp}
      bottomQuestion="Os dados de identificação e comprovantes são válidos?"
      bottomInstruction="Clique em avançar para aprovar e seguir para validação de dados cadastrais."
      nextHref={u.dadosCadastrais}
      nextLabel="Avançar"
      rejectLabel="RECUSAR"
      rejectVariant="outline"
    >
      <h2 className="text-base font-bold text-slate-900">Identificação do Condutor</h2>
    </AtendimentoShell>
  );
}

