"use client";

const IMG_BAR_CADASTRO = "https://www.figma.com/api/mcp/asset/650499f3-2da6-45e5-83af-288d5c21b141";
const IMG_BAR_RENOVACAO = "https://www.figma.com/api/mcp/asset/eb62ab15-0491-428e-ab49-fb30ff60ddbc";
const IMG_DONUT_DOCS_RECUSADOS = "https://www.figma.com/api/mcp/asset/eb2dacb3-de37-4407-bed4-057a06e47f2a";
const IMG_DONUT_PRIORIDADES = "https://www.figma.com/api/mcp/asset/5b66e551-a690-4ba5-a05b-2a4eb78a0b2d";

function TopPill({ label }: { label: string }) {
  return (
    <span className="inline-flex h-[22px] items-center gap-2 rounded-[4px] border border-[#193758] bg-white px-3 text-[10px] font-bold text-[#193758]">
      <span className="h-2 w-2 rounded-full bg-[#b00020]" aria-hidden />
      {label}
    </span>
  );
}

function CardShell({ children }: { children: React.ReactNode }) {
  return <div className="rounded-[4px] bg-white p-4 shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">{children}</div>;
}

function ProgressStrip({
  pctFinalizadas,
  pctEmEspera,
  pctNovas,
}: {
  pctFinalizadas: number;
  pctEmEspera: number;
  pctNovas: number;
}) {
  return (
    <div className="mt-2 h-[6px] w-full overflow-hidden rounded-[2px] bg-[#e7e7e7]" aria-hidden>
      <div className="h-full bg-[#408955]" style={{ width: `${pctFinalizadas}%` }} />
      <div className="h-full bg-[#ffd600]" style={{ width: `${pctEmEspera}%` }} />
      <div className="h-full bg-[#b00020]" style={{ width: `${pctNovas}%` }} />
    </div>
  );
}

function TotalSolicitacoesBlock() {
  const total = 108;
  const novas = 10;
  const emEspera = 70;
  const finalizadas = 28;

  const pctFinalizadas = (finalizadas / total) * 100;
  const pctEmEspera = (emEspera / total) * 100;
  const pctNovas = (novas / total) * 100;

  return (
    <div className="rounded-[4px] bg-[#f5f5f5] p-3">
      <p className="text-[12px] font-bold text-[#2d3748]">Total de solicitações</p>
      <div className="mt-1 flex items-end gap-2">
        <p className="text-[28px] font-black leading-none text-[#2d3748]">{total}</p>
        <div className="pb-[4px]">
          <p className="text-[10px] font-bold leading-none text-[#2d3748]">SOLICITAÇÕES</p>
        </div>
        <span className="ml-auto rounded-[4px] bg-[rgba(255,214,0,0.25)] px-2 py-1 text-[10px] font-bold text-[#836e00]">
          {novas} NOVAS
        </span>
      </div>

      <ProgressStrip
        pctFinalizadas={pctFinalizadas}
        pctEmEspera={pctEmEspera}
        pctNovas={pctNovas}
      />

      <div className="mt-1 flex items-center justify-between text-[10px] text-[#4d4d4d]">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#408955]" aria-hidden />
          <span className="font-bold">FINALIZADAS</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ffd600]" aria-hidden />
          <span className="font-bold">EM ESPERA</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#b00020]" aria-hidden />
          <span className="font-bold">NOVAS</span>
        </div>
      </div>
    </div>
  );
}

function ResumoAtendimentos() {
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-bold text-[#193758]">Resumo de Atendimentos</p>
        <div className="flex items-center gap-2">
          <div className="rounded-[4px] border border-slate-200 bg-white px-3 py-[6px] text-[10px] text-[#646464]">
            Todos os usuários
          </div>
          <div className="rounded-[4px] border border-slate-200 bg-white px-3 py-[6px] text-[10px] text-[#646464]">
            Jan 2025 - Dez 2025
          </div>
        </div>
      </div>

      <div className="mt-2 grid gap-2">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="grid grid-cols-[1fr_140px_140px] items-center gap-3 rounded-[4px] border border-slate-200 bg-white px-3 py-2">
            <div className="text-[10px] text-[#4d4d4d]">
              <span className="font-bold">Atendimentos</span>
            </div>
            <div className="text-[16px] font-black text-[#2d3748] text-right">888.888</div>
            <div className="text-[10px] text-[#4d4d4d] text-right">
              <span className="font-bold">Tempo médio</span>
              <div className="text-[14px] font-black text-[#193758] mt-[2px]">7 dias</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChartCard({ title, chartImgSrc }: { title: string; chartImgSrc: string }) {
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-bold text-[#193758]">{title}</p>
        <div className="rounded-[4px] border border-slate-200 bg-white px-3 py-[6px] text-[10px] text-[#646464]">
          Jan 2025 - Dez 2025
        </div>
      </div>

      <div className="mt-2 rounded-[4px] bg-white p-3">
        <div className="h-[230px] w-full overflow-hidden rounded-[4px] bg-white">
          <img src={chartImgSrc} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-[10px] text-[#4d4d4d]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00a9bc]" aria-hidden />
            <span className="font-medium">CONDUTOR</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#3b82f6]" aria-hidden />
            <span className="font-medium">DESPACHANTE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ffd600]" aria-hidden />
            <span className="font-medium">REP. SINDICATO</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#408955]" aria-hidden />
            <span className="font-medium">REP. EMPRESA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutLegendItem({
  color,
  label,
  pct,
}: {
  color: string;
  label: string;
  pct: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-[2px]">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} aria-hidden />
      <span className="text-[10px] text-[#4d4d4d]">
        <span className="font-medium">{label}</span> <span className="font-black text-[#193758]">{pct}</span>
      </span>
    </div>
  );
}

function DonutCard({
  title,
  donutImgSrc,
  items,
}: {
  title: string;
  donutImgSrc: string;
  items: { color: string; label: string; pct: string }[];
}) {
  return (
    <div className="mt-3 rounded-[4px] bg-[#f5f5f5] p-2">
      <p className="px-1 text-[14px] font-bold text-[#193758]">{title}</p>
      <div className="mt-2 flex items-start justify-between gap-3">
        <div className="flex w-[124px] justify-center">
          <img src={donutImgSrc} alt="" className="h-[110px] w-auto object-contain" />
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          {items.map((it) => (
            <DonutLegendItem key={it.label} color={it.color} label={it.label} pct={it.pct} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardPanel({
  headerLabel,
  barChartImg,
}: {
  headerLabel: string;
  barChartImg: string;
}) {
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-[#193758]" aria-hidden />
          <p className="text-[14px] font-bold text-[#193758]">{headerLabel}</p>
        </div>
        <TopPill label="FILA DE ATENDIMENTO AO VIVO" />
      </div>

      <TotalSolicitacoesBlock />
      <ResumoAtendimentos />
      <BarChartCard title="Solicitações por tipo de usuário" chartImgSrc={barChartImg} />

      <div className="grid gap-3 sm:grid-cols-2">
        <DonutCard
          title="Documentos Recusados"
          donutImgSrc={IMG_DONUT_DOCS_RECUSADOS}
          items={[
            { color: "#00a9bc", label: "DAMSP", pct: "45%" },
            { color: "#1351b4", label: "Endereço", pct: "26%" },
            { color: "#b38300", label: "Ações Criminais", pct: "21%" },
            { color: "#007822", label: "CNH", pct: "8%" },
          ]}
        />
        <DonutCard
          title="Prioridades"
          donutImgSrc={IMG_DONUT_PRIORIDADES}
          items={[
            { color: "#014850", label: "Idoso", pct: "45%" },
            { color: "#0075a7", label: "Outros", pct: "26%" },
            { color: "#b38300", label: "Revisão DPTO. Jurídico", pct: "21%" },
            { color: "#4f4f4f", label: "Manual", pct: "8%" },
          ]}
        />
      </div>
    </CardShell>
  );
}

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2">
        <h1 className="text-xl font-bold leading-tight text-[#193758]">Dashboard</h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <DashboardPanel headerLabel="Cadastro" barChartImg={IMG_BAR_CADASTRO} />
        <DashboardPanel headerLabel="Renovação" barChartImg={IMG_BAR_RENOVACAO} />
      </div>
    </div>
  );
}

