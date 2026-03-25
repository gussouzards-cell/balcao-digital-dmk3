"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";
import { cadastramentoAtendimentoUrls } from "@/lib/cadastramento-atendimento-nav";
import {
  ModalConfirmarAprovacaoCadastroInicial,
  ModalConfirmarAprovacaoCadastro,
  ModalEfetivarSolicitacaoCadastro,
  ModalConclusaoDeferidaCadastro,
  ModalGerarDocumentoCadastro,
  ModalConclusaoSolicitacaoCadastro,
  ModalConclusaoReprovadaCadastro,
  ModalIndeferirCadastro,
} from "@/components/atendimento/CadastroConclusaoModais";

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

export default function CadastramentoConclusaoPage() {
  const params = useParams();
  const router = useRouter();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";
  const u = cadastramentoAtendimentoUrls(protocolo);
  const [modal, setModal] = useState<ModalConclusao>(null);

  const irParaFila = useCallback(() => {
    setModal(null);
    router.push(u.filaCadastramento);
  }, [router, u.filaCadastramento]);

  return (
    <>
      <AtendimentoShell
        currentStep={6}
        flowType="cadastramento"
        serviceTitle="Cadastramento Condutax"
        showHistorico
        stepperBackHref={u.distribuicaoAcoes}
        footerLayout="conclusao"
        bottomQuestion="Concluir solicitação?"
        bottomInstruction=""
        nextHref={u.filaCadastramento}
        nextLabel="DEFERIR"
        solicitarNovosDocumentosHref="#"
        onConclusaoDeferir={() => setModal("confirmar")}
        onConclusaoRecusar={() => setModal("indeferir")}
      onConclusaoSolicitarNovosDocs={() => setModal("sucessoSolicitacao")}
      >
        <h2 className="text-2xl font-bold leading-normal text-[#0f2e4b]">Aprovação de solicitação</h2>
      </AtendimentoShell>

      <ModalConfirmarAprovacaoCadastroInicial
        open={modal === "confirmar"}
        onClose={() => setModal(null)}
        onRetornar={() => setModal(null)}
        onProtocolar={() => setModal("protocolar")}
      />
      <ModalConfirmarAprovacaoCadastro
        open={modal === "protocolar"}
        onClose={() => setModal(null)}
        onRetornar={() => setModal("confirmar")}
        onProtocolar={() => setModal("efetivarSolicitacao")}
      />
      <ModalEfetivarSolicitacaoCadastro
        open={modal === "efetivarSolicitacao"}
        onClose={() => setModal(null)}
        onRetornar={() => setModal("protocolar")}
        onGerarDocumento={() => setModal("gerarDocumento")}
      />
      <ModalGerarDocumentoCadastro
        open={modal === "gerarDocumento"}
        onClose={() => setModal(null)}
        onRetornar={() => setModal("efetivarSolicitacao")}
        onDeferirSolicitacao={() => setModal("sucessoDeferida")}
      />
      <ModalIndeferirCadastro
        open={modal === "indeferir"}
        onClose={() => setModal(null)}
        onRetornar={() => setModal(null)}
        onSolicitarNovosDocumentos={() => setModal("sucessoSolicitacao")}
        onIndeferir={() => setModal("sucessoReprovada")}
      />
      <ModalConclusaoDeferidaCadastro
        open={modal === "sucessoDeferida"}
        onClose={() => setModal(null)}
        onProsseguir={irParaFila}
      />
      <ModalConclusaoReprovadaCadastro
        open={modal === "sucessoReprovada"}
        onClose={() => setModal(null)}
        onProsseguir={irParaFila}
      />
      <ModalConclusaoSolicitacaoCadastro
        open={modal === "sucessoSolicitacao"}
        onClose={() => setModal(null)}
        onProsseguir={irParaFila}
      />
    </>
  );
}

