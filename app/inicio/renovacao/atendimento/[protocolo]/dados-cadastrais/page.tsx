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

        <div className="mt-4 grid gap-6 lg:grid-cols-1">
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
          </div>
        </div>
      </div>
    </AtendimentoShell>
  );
}
