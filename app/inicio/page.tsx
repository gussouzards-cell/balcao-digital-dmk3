"use client";

import Link from "next/link";

const summaryCadastro = { title: "Cadastro", total: 108, novas: 10, finalizadas: 70, emEspera: 28, icon: "person" };
const summaryRenovacao = { title: "Renovação", total: 108, novas: 10, finalizadas: 70, emEspera: 28, icon: "document" };

function SummaryCard({ title, total, novas, finalizadas, emEspera, icon }: {
  title: string; total: number; novas: number; finalizadas: number; emEspera: number; icon: string;
}) {
  const totalBar = finalizadas + emEspera + novas;
  const pctF = totalBar ? (finalizadas / totalBar) * 100 : 0;
  const pctE = totalBar ? (emEspera / totalBar) * 100 : 0;
  const pctN = totalBar ? (novas / totalBar) * 100 : 0;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total de solicitações</p>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#1e3a5f] text-white">
            {icon === "person" ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            )}
          </div>
          <span className="text-lg font-bold text-[#1e3a5f]">{title}</span>
        </div>
        <span className="rounded border border-rose-400 bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700">{novas} NOVAS</span>
      </div>
      <p className="mt-3 text-2xl font-bold text-slate-800">{total} <span className="text-base font-medium text-slate-600">SOLICITAÇÕES</span></p>
      <div className="mt-2 flex h-3 w-full overflow-hidden rounded">
        <div className="bg-teal-500" style={{ width: `${pctF}%` }} />
        <div className="bg-amber-400" style={{ width: `${pctE}%` }} />
        <div className="bg-rose-600" style={{ width: `${pctN}%` }} />
      </div>
      <div className="mt-2 flex gap-4 text-xs text-slate-600">
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-teal-500" />FINALIZADAS</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-400" />EM ESPERA</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-600" />NOVAS</span>
      </div>
    </div>
  );
}

function SolicitacaoCard({ tipo, titulo, tempo, status, protocolo, responsavel, bgCard, hrefAtendimento }: {
  tipo: string; titulo: string; tempo: string; status: string; protocolo: string; responsavel: string; bgCard: string; hrefAtendimento?: string;
}) {
  const href = hrefAtendimento ?? "#";
  return (
    <div className={`rounded-2xl border border-slate-200 p-4 shadow-sm ${bgCard}`}>
      <p className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">{tipo}</p>
      <div className="flex items-start gap-2">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
        <div>
          <h3 className="text-base font-bold text-slate-900">{titulo}</h3>
          <p className="mt-1 text-sm text-slate-600">{tempo}</p>
        </div>
      </div>
      <div className="mt-3 space-y-3">
        <div>
          <p className="text-sm font-semibold text-slate-800">Status:</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-amber-700">
            <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
            {status}
          </p>
        </div>
        <div><p className="text-sm font-semibold text-slate-800">Protocolo de atendimento:</p><p className="mt-1 text-sm text-slate-700">{protocolo}</p></div>
        <div><p className="text-sm font-semibold text-slate-800">Responsável pelo atendimento no DTP:</p><p className="mt-1 text-sm text-slate-700">{responsavel}</p></div>
        <div>
          <p className="text-sm font-semibold text-slate-800">DAMSP:</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-emerald-600">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
              <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>Paga
          </p>
        </div>
      </div>
      <Link href={href} className="mt-5 flex w-full items-center justify-center rounded-lg bg-[#1e3a5f] py-2.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#16304d]">
        Iniciar atendimento
      </Link>
    </div>
  );
}

export default function InicioPage() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <SummaryCard {...summaryCadastro} />
        <SummaryCard {...summaryRenovacao} />
      </div>
      <div>
        <h2 className="mb-3 text-base font-bold uppercase tracking-wider text-slate-800">Próximas solicitações</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <SolicitacaoCard tipo="Cadastro" titulo="Cadastro de Condutax" tempo="Há 52 horas" status="Aguardando análise" protocolo="T2500221-01" responsavel="João Silva" bgCard="bg-slate-100" />
          <SolicitacaoCard tipo="Renovação" titulo="Renovação de Condutax" tempo="Há 52 horas" status="Aguardando análise" protocolo="T2500221-01" responsavel="João Silva" bgCard="bg-amber-50" hrefAtendimento="/inicio/renovacao/atendimento/T2500221-01" />
        </div>
      </div>
    </div>
  );
}
