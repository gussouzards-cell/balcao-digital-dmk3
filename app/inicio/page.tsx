"use client";

import { SummaryCard } from "@/components/inicio/SummaryCard";
import { SolicitacaoCard } from "@/components/inicio/SolicitacaoCard";
import {
  PageInicio,
  PageTitle,
  SectionTitle,
  Grid2,
} from "@/components/styled/Inicio.styles";

const summaryCadastro: { title: string; total: number; novas: number; finalizadas: number; emEspera: number; icon: "person" | "document" } = {
  title: "Cadastro",
  total: 108,
  novas: 10,
  finalizadas: 70,
  emEspera: 28,
  icon: "person",
};
const summaryRenovacao = {
  ...summaryCadastro,
  title: "Renovação",
  icon: "document" as const,
};

export default function InicioPage() {
  return (
    <PageInicio>
      <PageTitle>Início</PageTitle>
      <Grid2>
        <SummaryCard {...summaryCadastro} />
        <SummaryCard {...summaryRenovacao} />
      </Grid2>
      <section aria-label="Próximas solicitações">
        <SectionTitle>Próximas solicitações</SectionTitle>
        <Grid2>
          <SolicitacaoCard
            tipo="Cadastro"
            titulo="Cadastro de Condutax"
            tempo="Há 52 horas"
            status="Aguardando análise"
            protocolo="T2500221-01"
            tempoDecorrido="Lorem ipsum"
            setor="Lorem ipsum"
            responsavel="João Silva"
            variant="neutral"
          />
          <SolicitacaoCard
            tipo="Renovação"
            titulo="Renovação de Condutax"
            tempo="Há 52 horas"
            status="Aguardando análise"
            protocolo="T2500221-01"
            tempoDecorrido="Lorem ipsum"
            setor="Lorem ipsum"
            responsavel="João Silva"
            variant="warning"
            hrefAtendimento="/inicio/renovacao/atendimento/T2500221-01"
          />
        </Grid2>
      </section>
    </PageInicio>
  );
}
