"use client";

import Link from "next/link";
import { useState } from "react";
import { ModalFilaAtendimento } from "@/components/atendimento/ModalFilaAtendimento";
import { type Protocol, useProtocols } from "@/lib/useProtocolos";

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
    <div className={`flex flex-1 flex-col rounded-[4px] border-2 bg-white px-6 py-4 ${borderClass}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-[31px] font-bold leading-tight text-[#2d3748]">{label}</span>
      </div>
      <p className={`ml-auto -mt-11 text-[40px] font-bold leading-none tabular-nums ${valueClass}`}>{value}</p>
    </div>
  );
}

type QueueVariant = "active" | "muted" | "extra";

function FilaCard({ variant, protocol }: { variant: QueueVariant; protocol?: Protocol }) {
  const isActive = variant === "active";
  const base = "relative h-[596px] w-[322px] shrink-0 rounded-[6px] border-2 px-6 pb-6 pt-5";
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

  const atendimentoHref = protocol?.protocolo ? `/inicio/cadastramento/atendimento/${protocol.protocolo}` : undefined;

  return (
    <div className={`${base} ${style}`}>
      {isActive && <div className="absolute left-[2px] top-[2px] h-[592px] w-[10px] rounded-bl-[4px] rounded-tl-[4px] bg-[#53a5ff]" />}

      <div className="flex gap-2">
        <span className={`mt-1 h-3 w-3 shrink-0 rounded-full bg-rose-600 ${!isActive ? "opacity-70" : ""}`} aria-hidden />
        <div>
          <h3 className={`text-[31px] font-bold leading-tight ${isActive ? "text-[#193758]" : "text-[#193758]"}`}>{protocol?.titulo ?? "—"}</h3>
          <p className={`mt-1 text-xs ${isActive ? "text-[#4d4d4d]" : "text-[#4d4d4d]"}`}>{protocol?.tempo ? `Há ${protocol.tempo}` : "—"}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1">
        <span className="rounded border border-[#b00020]/60 bg-[rgba(176,0,32,0.15)] px-1 py-0.5 text-[10px] font-medium text-[#5e0000]">
          PRIORIDADE
        </span>
        <span className="rounded border border-[#53a5ff] bg-[rgba(83,165,255,0.3)] px-1 py-0.5 text-[10px] font-medium text-[#002f63]">
          IDOSO
        </span>
        {variant === "muted" && (
          <span className="rounded border border-[#f80] bg-[rgba(255,136,0,0.3)] px-1 py-0.5 text-[10px] font-medium text-[#512b00]">
            REVISADO PELO JURÍDICO
          </span>
        )}
        <span className="rounded border border-[#535353] bg-[rgba(141,141,141,0.3)] px-1 py-0.5 text-[10px] font-medium text-[#2f2f2f]">
          POSIÇÃO NA FILA PRIORIZADA MANUALMENTE
        </span>
      </div>

      <div className={`mt-6 space-y-5 text-sm ${!isActive ? "text-[#4d4d4d]" : ""}`}>
        <p>
          <span className="font-bold text-[#4d4d4d]">Status:</span>{" "}
          <span className={isActive ? "text-[#947d01]" : "text-amber-700/80"}>{status}</span>
        </p>
        <p>
          <span className="font-bold text-[#4d4d4d]">Protocolo de atendimento:</span>{" "}
          <span>{protocol?.protocolo ?? "—"}</span>
        </p>
        <p>
          <span className="font-bold text-[#4d4d4d]">Tempo decorrido:</span>{" "}
          <span>{protocol?.tempo ?? "—"}</span>
        </p>
        <p>
          <span className="font-bold text-[#4d4d4d]">Setor:</span>{" "}
          <span>{protocol?.responsavel ?? "—"}</span>
        </p>
        <p>
          <span className="font-bold text-[#4d4d4d]">DAMSP:</span>{" "}
          <span>—</span>
        </p>
      </div>

      {isActive && atendimentoHref ? (
        <Link
          href={atendimentoHref}
          className="absolute bottom-6 left-6 right-6 flex h-[38px] items-center justify-center rounded-[4px] bg-[#193758] text-[12px] font-bold text-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.05)] hover:opacity-95"
        >
          INICIAR ATENDIMENTO
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className="absolute bottom-6 left-6 right-6 flex h-[38px] cursor-not-allowed items-center justify-center rounded-[4px] bg-slate-200 text-[12px] font-bold text-slate-400"
        >
          INICIAR ATENDIMENTO
        </button>
      )}
    </div>
  );
}

export default function CadastramentoPage() {
  const [filaOpen, setFilaOpen] = useState(false);
  const { protocolos, isLoading } = useProtocols();

  if (isLoading) {
    return <div className="home-page space-y-6" aria-busy="true" aria-live="polite" />;
  }

  const cadProtocols = protocolos.filter((p) => p.tipo === "Cadastro");
  const counts = {
    finalizadas: cadProtocols.filter((p) => p.status === "finalizada").length,
    emEspera: cadProtocols.filter((p) => p.status === "emEspera").length,
    novas: cadProtocols.filter((p) => p.status === "nova").length,
  };
  const filaCards = cadProtocols.slice(0, 3);
  const highlightProtocolo = filaCards[0]?.protocolo;

  if (!isLoading && cadProtocols.length === 0) {
    return (
      <div className="home-page space-y-6">
        <div className="rounded-[4px] bg-white p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
          <h2 className="text-[18px] font-bold leading-tight text-[#193758]">Cadastramentos</h2>
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
          title="Fila de Atendimento Cadastramento - ao vivo"
        tipo="Cadastro"
      />
      <div className="rounded-[4px] bg-white p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
        <h2 className="text-[40px] font-bold leading-tight text-[#193758]">Cadastramentos</h2>
        <p className="-mt-1 text-sm uppercase text-[#4d4d4d]">TOTAL NO MÊS</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <StatCard
            label="Finalizadas"
            value={String(counts.finalizadas)}
            borderClass="border-emerald-500"
            valueClass="text-emerald-700"
            icon={<span className="text-emerald-700">✓</span>}
          />
          <StatCard
            label="Em Espera"
            value={String(counts.emEspera)}
            borderClass="border-amber-400"
            valueClass="text-amber-700"
            icon={<span className="text-amber-700">⌛</span>}
          />
          <StatCard
            label="Em Aberto"
            value={String(counts.novas)}
            borderClass="border-rose-600"
            valueClass="text-rose-700"
            icon={<span className="text-rose-700">◷</span>}
          />
        </div>
      </div>

      <div className="rounded-[4px] bg-white p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[24px] font-bold leading-[1.5] text-[#4d4d4d]">Fila de Atendimento - Cadastramento</h2>
          <button
            type="button"
            onClick={() => setFilaOpen(true)}
            className="inline-flex h-8 items-center gap-2 rounded-[4px] border border-[#193758] bg-white px-4 text-[11px] font-medium text-[#193758] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193758] focus-visible:ring-offset-2"
            aria-haspopup="dialog"
            aria-expanded={filaOpen}
            aria-controls="modal-fila-atendimento"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-rose-600" aria-hidden />
            FILA DE ATENDIMENTO AO VIVO
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-2">
          <FilaCard variant="active" protocol={filaCards[0]} />
          <FilaCard variant="muted" protocol={filaCards[1]} />
          <FilaCard variant="extra" protocol={filaCards[2]} />
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-[#ccc] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#2d3748]">
            <span>Exibir</span>
            <span className="inline-flex h-8 items-center gap-1 rounded border border-slate-200 bg-white px-3 font-medium">10</span>
            <span className="mx-1 text-slate-300">|</span>
            <span className="text-slate-600">1-3 de {String(cadProtocols.length)} itens</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#2d3748]">
            <span>Página</span>
            <span className="inline-flex h-8 items-center gap-1 rounded border border-slate-200 bg-white px-3 font-medium">1</span>
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
