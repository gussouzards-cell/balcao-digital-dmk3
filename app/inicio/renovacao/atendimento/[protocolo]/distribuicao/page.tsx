"use client";

import { useParams } from "next/navigation";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";

export default function DistribuicaoPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";

  return (
    <AtendimentoShell
      currentStep={5}
      bottomQuestion="A distribuição de ações criminais foi conferida?"
      bottomInstruction="Clique em avançar para seguir para conclusão do atendimento."
      nextHref={`/inicio/renovacao/atendimento/${protocolo}/aprovacao`}
      nextLabel="Avançar"
      prevHref={`/inicio/renovacao/atendimento/${protocolo}/cnh`}
    >
      <div>
        <h2 className="text-base font-bold text-slate-900">Distribuição de Ações Criminais</h2>
        <p className="mt-2 text-sm text-slate-600">
          Conteúdo desta etapa (em desenvolvimento).
        </p>
      </div>
    </AtendimentoShell>
  );
}
