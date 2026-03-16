"use client";

import Link from "next/link";
import { Icon } from "@/components/icons/Icons";
import {
  SolicitacaoCard as StyledCard,
  BtnPrimary,
} from "@/components/styled/Inicio.styles";

export interface SolicitacaoCardData {
  tipo: string;
  titulo: string;
  tempo: string;
  status: string;
  protocolo: string;
  tempoDecorrido?: string;
  setor?: string;
  responsavel: string;
  variant?: "neutral" | "warning";
  hrefAtendimento?: string;
}

export function SolicitacaoCard({
  tipo,
  titulo,
  tempo,
  status,
  protocolo,
  tempoDecorrido,
  setor,
  responsavel,
  variant,
  hrefAtendimento,
}: SolicitacaoCardData) {
  const href = hrefAtendimento ?? "#";
  const dotColor = variant === "warning" ? "var(--color-warning-400)" : "var(--color-error)";

  return (
    <StyledCard $variant={variant}>
      <p
        style={{
          marginBottom: "0.75rem",
          fontSize: "0.875rem",
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--color-neutral-800)",
        }}
      >
        {tipo}
      </p>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
        <span
          style={{
            marginTop: "0.375rem",
            height: "0.5rem",
            width: "0.5rem",
            flexShrink: 0,
            borderRadius: "9999px",
            background: dotColor,
          }}
        />
        <div>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-neutral-900)",
            }}
          >
            {titulo}
          </h3>
          <p
            style={{
              marginTop: "0.25rem",
              fontSize: "0.875rem",
              color: "var(--color-neutral-600)",
            }}
          >
            {tempo}
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "0.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <InfoRow label="Status:" value={status} icon="clock" valueClassName="text-warning-text" />
        <InfoRow label="Protocolo de atendimento:" value={protocolo} />
        {tempoDecorrido != null && <InfoRow label="Tempo decorrido:" value={tempoDecorrido} />}
        {setor != null && <InfoRow label="Setor:" value={setor} />}
        <InfoRow label="Responsável pelo atendimento no DTP:" value={responsavel} />
        <InfoRow
          label="DAMSP:"
          value="Paga"
          icon="check"
          valueClassName="text-success font-medium"
          iconBg="bg-success-bg text-white"
        />
      </div>
      <BtnPrimary as={Link} href={href}>
        INICIAR ATENDIMENTO
      </BtnPrimary>
    </StyledCard>
  );
}

function InfoRow({
  label,
  value,
  icon,
  valueClassName = "",
  iconBg = "bg-slate-200",
}: {
  label: string;
  value: string;
  icon?: "clock" | "check";
  valueClassName?: string;
  iconBg?: string;
}) {
  return (
    <div>
      <p
        style={{
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "var(--color-neutral-800)",
        }}
      >
        {label}
      </p>
      <p
        className={`mt-1 flex items-center gap-1.5 text-sm ${valueClassName}`}
        style={!valueClassName ? { color: "var(--color-neutral-700)" } : undefined}
      >
        {icon && (
          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white ${iconBg}`}
          >
            <Icon name={icon} size={4} />
          </span>
        )}
        {value}
      </p>
    </div>
  );
}
