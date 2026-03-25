"use client";

import { useParams } from "next/navigation";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";
import { cadastramentoAtendimentoUrls } from "@/lib/cadastramento-atendimento-nav";

export default function AtendimentoCadastramentoDamspPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = cadastramentoAtendimentoUrls(protocolo);

  return (
    <AtendimentoShell
      currentStep={1}
      flowType="cadastramento"
      serviceTitle="Cadastramento Condutax"
      showHistorico
      stepperBackHref={u.filaCadastramento}
      bottomQuestion="A DAMSP foi paga e o comprovante válido?"
      bottomInstruction="Clique em avançar para aprovar e seguir para validação de dados do condutor."
      nextHref={u.dadosCondutor}
      nextLabel="Avançar"
      rejectLabel="RECUSAR"
      rejectVariant="outline"
    >
      <div>
        <h2 className="text-base font-bold text-slate-900">Conferência DAMSP</h2>
      </div>
    </AtendimentoShell>
  );
}

