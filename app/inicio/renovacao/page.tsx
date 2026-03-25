"use client";

import Link from "next/link";
import { useState } from "react";
import { ModalFilaAtendimento } from "@/components/atendimento/ModalFilaAtendimento";
import { type Protocol, useProtocols } from "@/lib/useProtocolos";

function LivePill({ onClick, expanded }: { onClick: () => void; expanded: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-8 w-full items-center justify-center gap-2 rounded-[4px] border border-[#193758] bg-white px-4 text-[11px] font-medium text-[#193758] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193758] focus-visible:ring-offset-2 sm:w-auto sm:justify-start"
      aria-haspopup="dialog"
      aria-expanded={expanded}
      aria-controls="modal-fila-atendimento"
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-rose-600" aria-hidden />
      FILA DE ATENDIMENTO AO VIVO
    </button>
  );
}

function StatCard({
  label,
  value,
  borderClass,
  valueClass,
  icon,
}: {
  label: string;
  value: string;
  borderClass: string;
  valueClass: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={`flex flex-1 flex-col rounded-[4px] border-2 bg-white px-4 py-3 sm:px-6 sm:py-4 ${borderClass}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          {icon}
          <span className="text-2xl font-bold leading-tight text-[#2d3748] sm:text-[31px]">{label}</span>
        </div>
        <p className={`shrink-0 text-5xl font-bold leading-none tabular-nums sm:text-[40px] ${valueClass}`}>{value}</p>
      </div>
    </div>
  );
}

type QueueVariant = "active" | "muted" | "extra";

function FilaCard({
  variant,
  protocol,
}: {
  variant: QueueVariant;
  protocol?: Protocol;
}) {
  const isActive = variant === "active";
  const base = "relative h-[520px] w-[292px] shrink-0 rounded-[6px] border-2 px-4 pb-4 pt-4 sm:h-[596px] sm:w-[322px] sm:px-6 sm:pb-6 sm:pt-5";
  const style = isActive
    ? "border-[#947d01] bg-[#fffae2]"
    : "border-[#947d01] bg-[#fffae2] opacity-50";

  const status =
    protocol?.status === "nova"
      ? "Aguardando análise"
      : protocol?.status === "emEspera"
        ? "Aguardando documentos"
        : protocol?.status === "finalizada"
          ? "Concluído"
          : "—";

  const inner = (
    <>
      {isActive && <div className="absolute left-[2px] top-[2px] h-[516px] w-[8px] rounded-bl-[4px] rounded-tl-[4px] bg-[#ff8d00] sm:h-[592px] sm:w-[10px]" />}

      <div className="flex gap-2">
        <span className={`mt-1 h-3 w-3 shrink-0 rounded-full bg-rose-600 ${!isActive ? "opacity-70" : ""}`} aria-hidden />
        <div>
          <h3 className="text-xl font-bold leading-tight text-[#193758] sm:text-[31px]">{protocol?.titulo ?? "—"}</h3>
          <p className="mt-1 text-xs text-[#4d4d4d]">{protocol?.tempo ? `Há ${protocol.tempo}` : "—"}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1">
        <span className="rounded border border-[#b00020]/60 bg-[rgba(176,0,32,0.15)] px-1 py-0.5 text-[10px] font-medium text-[#5e0000]">
          PRIORIDADE
        </span>
        {(variant === "muted" || variant === "extra") && (
          <span className="rounded border border-[#53a5ff] bg-[rgba(83,165,255,0.3)] px-1 py-0.5 text-[10px] font-medium text-[#002f63]">
            IDOSO
          </span>
        )}
        {(variant === "active" || variant === "muted") && (
          <span className="rounded border border-[#f80] bg-[rgba(255,136,0,0.3)] px-1 py-0.5 text-[10px] font-medium text-[#512b00]">
            REVISADO PELO JURÍDICO
          </span>
        )}
        <span className="rounded border border-[#535353] bg-[rgba(141,141,141,0.3)] px-1 py-0.5 text-[10px] font-medium text-[#2f2f2f]">
          POSIÇÃO NA FILA PRIORIZADA MANUALMENTE
        </span>
      </div>

      <div className={`mt-4 space-y-3 text-xs sm:mt-6 sm:space-y-5 sm:text-sm ${!isActive ? "text-[#4d4d4d]" : ""}`}>
        <div>
          <p className="font-bold text-[#4d4d4d]">Status:</p>
          <div className="mt-1 flex items-center gap-2">
            <svg className={`h-4 w-4 ${isActive ? "text-amber-600" : "text-amber-700/80"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={isActive ? "font-medium text-[#6c4a02]" : "font-medium text-[#6c4a02]/80"}>{status}</span>
          </div>
        </div>
        <p>
          <span className="font-bold text-[#4d4d4d]">Protocolo de atendimento:</span>{" "}
          <span>{protocol?.protocolo ?? "—"}</span>
        </p>
        <p>
          <span className="font-bold text-[#4d4d4d]">Tempo decorrido:</span>{" "}
          <span>{protocol?.tempo ?? "—"}</span>
        </p>
        <p>
          <span className="font-bold text-[#4d4d4d]">Setor:</span> <span>{protocol?.responsavel ?? "—"}</span>
        </p>
        <p>
          <span className="font-bold text-[#4d4d4d]">DAMSP:</span>{" "}
          <span className="inline-flex items-center gap-1 text-[#4d4d4d]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
              <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            —
          </span>
        </p>
      </div>
      {isActive && protocol?.protocolo ? (
        <Link
          href={`/inicio/renovacao/atendimento/${protocol.protocolo}`}
          className="absolute bottom-4 left-4 right-4 flex h-[36px] items-center justify-center rounded-[4px] bg-[#193758] text-[11px] font-bold text-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.05)] hover:opacity-95 sm:bottom-6 sm:left-6 sm:right-6 sm:h-[38px] sm:text-[12px]"
        >
          INICIAR ATENDIMENTO
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className="absolute bottom-4 left-4 right-4 flex h-[36px] cursor-not-allowed items-center justify-center rounded-[4px] bg-slate-200 text-[11px] font-bold text-slate-400 sm:bottom-6 sm:left-6 sm:right-6 sm:h-[38px] sm:text-[12px]"
        >
          INICIAR ATENDIMENTO
        </button>
      )}
    </>
  );

  return <div className={`${base} ${style}`}>{inner}</div>;
}

export default function RenovacaoPage() {
  const [pageSize] = useState(10);
  const [filaOpen, setFilaOpen] = useState(false);
  const { protocolos, isLoading } = useProtocols();

  if (isLoading) {
    return <div className="home-page space-y-6" aria-busy="true" aria-live="polite" />;
  }

  const renovProtocols = protocolos.filter((p) => p.tipo === "Renovação");
  const counts = {
    finalizadas: renovProtocols.filter((p) => p.status === "finalizada").length,
    emEspera: renovProtocols.filter((p) => p.status === "emEspera").length,
    novas: renovProtocols.filter((p) => p.status === "nova").length,
  };
  const filaCards = renovProtocols.slice(0, 3);
  const highlightProtocolo = filaCards[0]?.protocolo;

  if (!isLoading && renovProtocols.length === 0) {
    return (
      <div className="home-page space-y-6">
        <div className="rounded-[4px] bg-white p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
          <h2 className="text-[18px] font-bold leading-tight text-[#193758]">Renovações</h2>
          <p className="mt-2 text-sm leading-[1.5] text-[#3f444d]">Ainda não há serviços solicitados.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ModalFilaAtendimento
        open={filaOpen}
        onClose={() => setFilaOpen(false)}
        highlightProtocolo={highlightProtocolo}
        title="Fila de Atendimento Renovação- ao vivo"
        tipo="Renovação"
      />
      <div className="rounded-[4px] bg-white p-4 shadow-[0px_2px_4px_rgba(0,0,0,0.05)] sm:p-6">
        <h2 className="text-3xl font-bold leading-tight text-[#193758] sm:text-[40px]">Renovações</h2>
        <p className="-mt-1 text-sm uppercase text-[#4d4d4d]">TOTAL NO MÊS</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <StatCard
            label="Finalizadas"
            value={String(counts.finalizadas)}
            borderClass="border-emerald-500"
            valueClass="text-emerald-700"
            icon={<span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>}
          />
          <StatCard
            label="Em Espera"
            value={String(counts.emEspera)}
            borderClass="border-amber-400"
            valueClass="text-amber-700"
            icon={
              <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard
            label="Em Aberto"
            value={String(counts.novas)}
            borderClass="border-rose-600"
            valueClass="text-rose-700"
            icon={
              <svg className="h-6 w-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>
      </div>

      <div className="rounded-[4px] bg-white p-4 shadow-[0px_2px_4px_rgba(0,0,0,0.05)] sm:p-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-bold leading-[1.5] text-[#4d4d4d] sm:text-[24px]">Fila de Atendimento - Renovação</h2>
          <LivePill onClick={() => setFilaOpen(true)} expanded={filaOpen} />
        </div>

        <div className="flex gap-5 overflow-x-auto pb-2">
          <FilaCard variant="active" protocol={filaCards[0]} />
          <FilaCard variant="muted" protocol={filaCards[1]} />
          <FilaCard variant="extra" protocol={filaCards[2]} />
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-[#ccc] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#2d3748]">
            <span>Exibir</span>
            <span className="inline-flex h-8 items-center rounded border border-slate-200 bg-white px-3 font-medium">{pageSize}</span>
            <span className="mx-1 text-slate-300">|</span>
            <span className="text-slate-600">1-3 de {String(renovProtocols.length)} itens</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#2d3748]">
            <span>Página</span>
            <span className="inline-flex h-8 items-center rounded border border-slate-200 bg-white px-3 font-medium">1</span>
            <span className="mx-1 text-slate-300">|</span>
            <button type="button" className="rounded border border-slate-200 px-2 py-1 text-slate-600 hover:bg-slate-50" aria-label="Página anterior">
              ‹
            </button>
            <button type="button" className="rounded border border-slate-200 px-2 py-1 text-slate-600 hover:bg-slate-50" aria-label="Próxima página">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
