"use client";

import { Icon } from "@/components/icons/Icons";
import {
  SummaryCard as StyledCard,
  SummaryCardLabel,
  SummaryCardHeader,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardBadge,
  SummaryCardTotal,
  SummaryBar,
  SummaryBarSegment,
  SummaryLegend,
} from "@/components/styled/Inicio.styles";
import { useTheme } from "styled-components";

export interface SummaryCardData {
  title: string;
  total: number;
  novas: number;
  finalizadas: number;
  emEspera: number;
  icon: "person" | "document";
}

export function SummaryCard({
  title,
  total,
  novas,
  finalizadas,
  emEspera,
  icon,
}: SummaryCardData) {
  const theme = useTheme();
  const totalBar = finalizadas + emEspera + novas;
  const pctF = totalBar ? (finalizadas / totalBar) * 100 : 0;
  const pctE = totalBar ? (emEspera / totalBar) * 100 : 0;
  const pctN = totalBar ? (novas / totalBar) * 100 : 0;

  return (
    <StyledCard>
      <SummaryCardLabel>Total de solicitações</SummaryCardLabel>
      <SummaryCardHeader>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <SummaryCardIcon>
            <Icon name={icon} size={5} />
          </SummaryCardIcon>
          <SummaryCardTitle>{title}</SummaryCardTitle>
        </div>
        <SummaryCardBadge>{novas} NOVAS</SummaryCardBadge>
      </SummaryCardHeader>
      <SummaryCardTotal>
        {total}{" "}
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 500,
            color: theme.colors.neutral[600],
          }}
        >
          SOLICITAÇÕES
        </span>
      </SummaryCardTotal>
      <SummaryBar>
        <SummaryBarSegment $width={pctF} $color={theme.colors.finalized} />
        <SummaryBarSegment $width={pctE} $color={theme.colors.warning400} />
        <SummaryBarSegment $width={pctN} $color={theme.colors.error} />
      </SummaryBar>
      <SummaryLegend>
        <LegendItem color={theme.colors.finalized} label="FINALIZADAS" />
        <LegendItem color={theme.colors.warning400} label="EM ESPERA" />
        <LegendItem color={theme.colors.error} label="NOVAS" />
      </SummaryLegend>
    </StyledCard>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
      <span
        style={{
          height: "0.5rem",
          width: "0.5rem",
          borderRadius: "9999px",
          background: color,
        }}
      />
      {label}
    </span>
  );
}
