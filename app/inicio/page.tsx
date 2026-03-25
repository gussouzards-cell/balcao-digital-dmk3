"use client";

import Link from "next/link";
import "../styles/home.css";

function TagNovas() {
  return (
    <span className="inline-flex rounded-[2px] border border-[#836e00] bg-[rgba(255,214,0,0.3)] px-1 py-0.5 text-[10px] font-medium leading-normal text-[#503600]">
      10 NOVAS
    </span>
  );
}

function SummaryCard({
  title,
  icon,
}: {
  title: "Cadastro" | "Renovação";
  icon: React.ReactNode;
}) {
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
        <TagNovas />
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-[32px] font-black leading-[1.5] text-[#4d4d4d]">108</span>
        <span className="text-[10px] font-normal leading-[1.5] text-[#4d4d4d]">SOLICITAÇÕES</span>
      </div>
      <div className="mt-3">
        <div className="flex h-[7px] w-full overflow-hidden rounded-sm">
          <div className="h-full bg-[#408955] rounded-bl-[6px]" style={{ width: "70%" }} />
          <div className="h-full bg-[#ffd600]" style={{ width: "28%" }} />
          <div className="h-full bg-[#b00020] rounded-br-[6px]" style={{ width: "10%" }} />
        </div>
        <div className="mt-1 flex justify-between text-[10px] font-normal text-[#4d4d4d]">
          <span>70</span>
          <span>28</span>
          <span>10</span>
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
  href,
}: {
  variant: "cadastro" | "renovacao";
  title: string;
  href: string;
}) {
  const bg = variant === "cadastro" ? "bg-[#f5f7fa] border-[#f5f7fa]" : "bg-[#fffae2] border-[#f5f7fa]";

  return (
    <div className={`rounded-md border ${bg} p-6 shadow-sm`}>
      <div className="flex gap-2">
        <img src="/img/dashboard-tag-priority.png" alt="" width={12} height={12} className="mt-1 h-3 w-3 shrink-0" />
        <div>
          <h3 className="text-[18px] font-bold leading-normal text-[#193758]">{title}</h3>
          <p className="mt-1 text-[12px] font-normal text-[#4d4d4d]">Há 52 horas</p>
        </div>
      </div>

      <div className="mt-4 space-y-4 text-[14px]">
        <div>
          <p className="font-bold text-[#4d4d4d]">Status:</p>
          <div className="mt-1 flex items-center gap-2">
            <img src="/img/dashboard-icon-hourglass.png" alt="" width={17} height={18} className="h-[18px] w-[17px] shrink-0" />
            <span className="font-medium text-[#947d01]">Aguardando análise</span>
          </div>
        </div>

        <div>
          <p className="font-bold text-[#4d4d4d]">Protocolo de atendimento:</p>
          <p className="mt-1 font-normal text-[#4d4d4d]">T2500221-01</p>
        </div>

        <div>
          <p className="font-bold text-[#4d4d4d]">Tempo decorrido:</p>
          <p className="mt-1 font-normal text-[#4d4d4d]">Lorem ipsum</p>
        </div>

        <div>
          <p className="font-bold text-[#4d4d4d]">Setor:</p>
          <p className="mt-1 font-normal text-[#4d4d4d]">Lorem ipsum</p>
        </div>

        <div>
          <p className="font-bold leading-snug text-[#4d4d4d]">Responsável pelo atendimento no DTP:</p>
          <p className="mt-1 font-normal text-[#4d4d4d]">João Silva</p>
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

export default function InicioPage() {
  return (
    <div className="home-page space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Cadastro"
          icon={
            <svg className="h-[18px] w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />
        <SummaryCard
          title="Renovação"
          icon={
            <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
        />
      </div>

      <div className="rounded bg-white p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
        <h2 className="text-[14px] font-normal leading-[1.5] text-[#4d4d4d]">PRÓXIMAS SOLICITAÇÕES</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-[18px] font-bold text-[#193758]">Cadastro</p>
            <div className="mt-4">
              <SolicitacaoCard
                variant="cadastro"
                title="Cadastro de Condutax"
                href="/inicio/cadastramento"
              />
            </div>
          </div>
          <div>
            <p className="text-[18px] font-bold text-[#193758]">Renovação</p>
            <div className="mt-4">
              <SolicitacaoCard
                variant="renovacao"
                title="Renovação de Condutax"
                href="/inicio/renovacao/atendimento/T2500221-01"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
