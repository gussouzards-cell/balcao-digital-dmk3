"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";
import { cadastramentoAtendimentoUrls } from "@/lib/cadastramento-atendimento-nav";
import { ModalSolicitacaoDepartamentoJuridicoCadastro } from "@/components/atendimento/CadastroConclusaoModais";

export default function CadastramentoDistribuicaoAcoesPage() {
  const params = useParams();
  const router = useRouter();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = cadastramentoAtendimentoUrls(protocolo);
  const [modal, setModal] = useState<null | "juridicoEnviado">(null);

  const irParaFila = useCallback(() => {
    setModal(null);
    router.push(u.filaCadastramento);
  }, [router, u.filaCadastramento]);

  return (
    <>
      <AtendimentoShell
        currentStep={5}
        flowType="cadastramento"
        serviceTitle="Cadastramento Condutax"
        showHistorico
        stepperBackHref={u.cnh}
        bottomQuestion="Os dados de distribuição de ações criminais são válidos?"
        bottomInstruction="Clique em avançar para aprovar e avançar para finalização do atendimento."
        nextHref={u.conclusao}
        nextLabel="Avançar"
        rejectLabel="RECUSAR"
        rejectVariant="outline"
        juridicoLabel="ENVIAR P/ DPTO JURÍDICO"
        onJuridicoEnviar={() => setModal("juridicoEnviado")}
      >
        <h2 className="text-base font-bold text-slate-900">Distribuição de Ações Criminais</h2>
      </AtendimentoShell>

      <ModalSolicitacaoDepartamentoJuridicoCadastro
        open={modal === "juridicoEnviado"}
        onClose={() => setModal(null)}
        onProsseguir={irParaFila}
      />
    </>
  );
}

