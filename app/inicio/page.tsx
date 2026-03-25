"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "../styles/home.css";
import { useProtocols, type Protocol } from "@/lib/useProtocolos";
import { Suspense } from "react";

function EmptyBox({ title }: { title: string }) {
  return (
    <div className="rounded bg-white p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
      <h3 className="text-[18px] font-bold leading-tight text-[#193758]">{title}</h3>
      <p className="mt-2 text-sm leading-[1.5] text-[#3f444d]">Ainda não há serviços solicitados.</p>
    </div>
  );
}

const IMG_VIEW_DASHBOARD_OUTLINE =
  "https://www.figma.com/api/mcp/asset/691e9c84-afad-4a61-a1a7-47533de0c258";
const IMG_LOCK_OPEN = "https://www.figma.com/api/mcp/asset/dda43f9a-2d65-4a12-9285-8b44519d041b";
const IMG_ACCOUNT_GROUP_OUTLINE =
  "https://www.figma.com/api/mcp/asset/eba856e3-4bd9-4d53-afb4-59a6ac8655fe";
const IMG_ACCOUNT_ALERT_OUTLINE =
  "https://www.figma.com/api/mcp/asset/9c2455a5-9f47-4262-a673-364c17bc287d";

function AdminPortalHome() {
  return (
    <div className="space-y-6">
      <div className="pt-2 text-center">
        <h2 className="text-[24px] font-bold leading-tight text-[#0f2e4b]">Painel do Administrador</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Link
          href="/inicio/dashboard?perfil=admin"
          className="flex h-[273px] flex-col items-center justify-center rounded-[4px] bg-[#f5f5f5] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]"
        >
          <img src={IMG_VIEW_DASHBOARD_OUTLINE} alt="" className="h-[50px] w-[50px]" />
          <p className="mt-4 text-[20px] font-bold leading-tight text-[#0f2e4b]">Dashboard</p>
        </Link>

        <div className="flex h-[273px] flex-col items-center justify-center rounded-[4px] bg-[#f5f5f5] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]">
          <img src={IMG_ACCOUNT_GROUP_OUTLINE} alt="" className="h-[50px] w-[50px]" />
          <p className="mt-4 text-[20px] font-bold leading-tight text-[#0f2e4b]">Gestão do Atendimento</p>
        </div>

        <div className="flex h-[273px] flex-col items-center justify-center rounded-[4px] bg-[#f5f5f5] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]">
          <img src={IMG_LOCK_OPEN} alt="" className="h-[50px] w-[50px]" />
          <p className="mt-4 text-[20px] font-bold leading-tight text-[#0f2e4b]">Controle de Acesso</p>
        </div>

        <div className="flex h-[273px] flex-col items-center justify-center rounded-[4px] bg-[#f5f5f5] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]">
          <img src={IMG_ACCOUNT_ALERT_OUTLINE} alt="" className="h-[50px] w-[50px]" />
          <p className="mt-4 text-[20px] font-bold leading-tight text-[#0f2e4b]">Gestão de Usuários</p>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  title,
  icon,
  total,
  novas,
  finalizadas,
  emEspera,
}: {
  title: "Cadastro" | "Renovação";
  icon: React.ReactNode;
  total: number;
  novas: number;
  finalizadas: number;
  emEspera: number;
}) {
  const pctFinalizadas = total ? (finalizadas / total) * 100 : 0;
  const pctEmEspera = total ? (emEspera / total) * 100 : 0;
  const pctNovas = total ? (novas / total) * 100 : 0;

  return (
    <div className="rounded bg-white p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
      <div className="flex items-end justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[10px] font-normal uppercase leading-[1.5] text-[#4d4d4d]">TOTAL DE SOLICITAÇÕES</p>
          <div className="mt-1 flex items-center gap-3">
            <span className="flex h-[18px] w-6 shrink-0 items-center justify-center text-[#193758]">{icon}</span>
            <p className="text-[18px] font-bold leading-[1.5] text-[#193758]">{title}</p>
          </div>
        </div>
        {novas > 0 ? (
          <span className="inline-flex rounded-[2px] border border-[#836e00] bg-[rgba(255,214,0,0.3)] px-1 py-0.5 text-[10px] font-medium leading-normal text-[#503600]">
            {novas} NOVAS
          </span>
        ) : null}
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-[32px] font-black leading-[1.5] text-[#4d4d4d]">{total}</span>
        <span className="text-[10px] font-normal leading-[1.5] text-[#4d4d4d]">SOLICITAÇÕES</span>
      </div>
      <div className="mt-3">
        <div className="flex h-[7px] w-full overflow-hidden rounded-sm">
          <div className="h-full bg-[#408955] rounded-bl-[6px]" style={{ width: `${pctFinalizadas}%` }} />
          <div className="h-full bg-[#ffd600]" style={{ width: `${pctEmEspera}%` }} />
          <div className="h-full bg-[#b00020] rounded-br-[6px]" style={{ width: `${pctNovas}%` }} />
        </div>
        <div className="mt-1 flex justify-between text-[10px] font-normal text-[#4d4d4d]">
          <span>{finalizadas}</span>
          <span>{emEspera}</span>
          <span>{novas}</span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-6 text-[8px] font-normal text-[#4d4d4d]">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#408955]" aria-hidden />
          FINALIZADAS
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#ffd600]" aria-hidden />
          EM ESPERA
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#b00020]" aria-hidden />
          NOVAS
        </span>
      </div>
    </div>
  );
}

function SolicitacaoCard({
  variant,
  title,
  protocol,
}: {
  variant: "cadastro" | "renovacao";
  title: string;
  protocol: Protocol;
}) {
  const bg = variant === "cadastro" ? "bg-[#f5f7fa] border-[#f5f7fa]" : "bg-[#fffae2] border-[#f5f7fa]";
  const status =
    protocol.status === "nova"
      ? "Aguardando análise"
      : protocol.status === "emEspera"
        ? "Aguardando documentos"
        : protocol.status === "finalizada"
          ? "Concluído"
          : "—";

  const href =
    protocol.tipo === "Renovação"
      ? `/inicio/renovacao/atendimento/${protocol.protocolo}`
      : `/inicio/cadastramento/atendimento/${protocol.protocolo}`;

  const tempoLabel = protocol.tempo === "agora" ? "Agora" : `Há ${protocol.tempo}`;

  return (
    <div className={`rounded-md border ${bg} p-6 shadow-sm`}>
      <div className="flex gap-2">
        <img src="/img/dashboard-tag-priority.png" alt="" width={12} height={12} className="mt-1 h-3 w-3 shrink-0" />
        <div>
          <h3 className="text-[18px] font-bold leading-normal text-[#193758]">{title}</h3>
          <p className="mt-1 text-[12px] font-normal text-[#4d4d4d]">{tempoLabel}</p>
        </div>
      </div>

      <div className="mt-4 space-y-4 text-[14px]">
        <div>
          <p className="font-bold text-[#4d4d4d]">Status:</p>
          <div className="mt-1 flex items-center gap-2">
            <img src="/img/dashboard-icon-hourglass.png" alt="" width={17} height={18} className="h-[18px] w-[17px] shrink-0" />
            <span className="font-medium text-[#947d01]">{status}</span>
          </div>
        </div>

        <div>
          <p className="font-bold text-[#4d4d4d]">Protocolo de atendimento:</p>
          <p className="mt-1 font-normal text-[#4d4d4d]">{protocol.protocolo}</p>
        </div>

        <div>
          <p className="font-bold text-[#4d4d4d]">Tempo decorrido:</p>
          <p className="mt-1 font-normal text-[#4d4d4d]">{protocol.tempo}</p>
        </div>

        <div>
          <p className="font-bold text-[#4d4d4d]">Setor:</p>
          <p className="mt-1 font-normal text-[#4d4d4d]">{protocol.responsavel || "—"}</p>
        </div>

        <div>
          <p className="font-bold leading-snug text-[#4d4d4d]">Responsável pelo atendimento no DTP:</p>
          <p className="mt-1 font-normal text-[#4d4d4d]">{protocol.responsavel || "—"}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-[#4d4d4d]">DAMSP:</span>
          <span className="inline-flex h-[15px] w-[15px] items-center justify-center rounded-full bg-emerald-500 text-white">
            <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="font-normal text-[#4d4d4d]">Paga</span>
        </div>
      </div>

      <Link
        href={href}
        className="mt-8 flex h-[38px] w-full items-center justify-center rounded-md bg-[#193758] text-[12px] font-bold text-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.05)] hover:opacity-95"
      >
        INICIAR ATENDIMENTO
      </Link>
    </div>
  );
}

function InicioPageContent() {
  const { protocolos, isLoading } = useProtocols();
  const searchParams = useSearchParams();
  const perfil = (searchParams?.get("perfil") ?? "").toLowerCase();

  if (isLoading) {
    // Evita o "piscar" de cards com 0/— enquanto os protocolos ainda não foram carregados.
    return <div className="home-page space-y-6" aria-busy="true" aria-live="polite" />;
  }
  const cadProtocols = protocolos.filter((p) => p.tipo === "Cadastro");
  const renovProtocols = protocolos.filter((p) => p.tipo === "Renovação");

  const cadHas = cadProtocols.length > 0;
  const renovHas = renovProtocols.length > 0;

  const cadCounts = {
    total: cadProtocols.length,
    novas: cadProtocols.filter((p) => p.status === "nova").length,
    finalizadas: cadProtocols.filter((p) => p.status === "finalizada").length,
    emEspera: cadProtocols.filter((p) => p.status === "emEspera").length,
  };

  const renovCounts = {
    total: renovProtocols.length,
    novas: renovProtocols.filter((p) => p.status === "nova").length,
    finalizadas: renovProtocols.filter((p) => p.status === "finalizada").length,
    emEspera: renovProtocols.filter((p) => p.status === "emEspera").length,
  };

  if (perfil === "admin") {
    return <AdminPortalHome />;
  }

  if (!isLoading && !cadHas && !renovHas) {
    return (
      <div className="home-page space-y-6">
        <EmptyBox title="Serviços" />
      </div>
    );
  }

  return (
    <div className="home-page space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {cadHas ? (
          <SummaryCard
            title="Cadastro"
            total={cadCounts.total}
            novas={cadCounts.novas}
            finalizadas={cadCounts.finalizadas}
            emEspera={cadCounts.emEspera}
            icon={
              <svg className="h-[18px] w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          />
        ) : (
          <EmptyBox title="Cadastro" />
        )}
        {renovHas ? (
          <SummaryCard
            title="Renovação"
            total={renovCounts.total}
            novas={renovCounts.novas}
            finalizadas={renovCounts.finalizadas}
            emEspera={renovCounts.emEspera}
            icon={
              <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
        ) : (
          <EmptyBox title="Renovação" />
        )}
      </div>

      <div className="rounded bg-white p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
        <h2 className="text-[14px] font-normal leading-[1.5] text-[#4d4d4d]">PRÓXIMAS SOLICITAÇÕES</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-[18px] font-bold text-[#193758]">Cadastro</p>
            <div className="mt-4">
              {cadHas ? (
                <SolicitacaoCard variant="cadastro" title="Cadastro de Condutax" protocol={cadProtocols[0]} />
              ) : (
                <p className="text-sm leading-[1.5] text-[#3f444d]">Ainda não há serviços solicitados.</p>
              )}
            </div>
          </div>
          <div>
            <p className="text-[18px] font-bold text-[#193758]">Renovação</p>
            <div className="mt-4">
              {renovHas ? (
                <SolicitacaoCard variant="renovacao" title="Renovação de Condutax" protocol={renovProtocols[0]} />
              ) : (
                <p className="text-sm leading-[1.5] text-[#3f444d]">Ainda não há serviços solicitados.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InicioPage() {
  return (
    <Suspense fallback={<div className="home-page space-y-6" aria-hidden />}>
      <InicioPageContent />
    </Suspense>
  );
}
