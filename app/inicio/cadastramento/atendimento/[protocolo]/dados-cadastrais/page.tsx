"use client";

import { useParams } from "next/navigation";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";
import { cadastramentoAtendimentoUrls } from "@/lib/cadastramento-atendimento-nav";

export default function CadastramentoDadosCadastraisPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = cadastramentoAtendimentoUrls(protocolo);

  return (
    <AtendimentoShell
      currentStep={3}
      flowType="cadastramento"
      serviceTitle="Cadastramento Condutax"
      showHistorico
      stepperBackHref={u.dadosCondutor}
      bottomQuestion="Os dados cadastrais de endereço e telefone são válidos?"
      bottomInstruction="Clique em avançar para aprovar e seguir para validação da CNH do condutor."
      nextHref={u.cnh}
      nextLabel="Avançar"
      rejectLabel="RECUSAR"
      rejectVariant="outline"
    >
      <h2 className="text-base font-bold text-slate-900">Dados Cadastrais</h2>
    </AtendimentoShell>
  );
}

