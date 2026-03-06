"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const steps = [
  { num: 1, label: "DAMSP", current: true },
  { num: 2, label: "Dados do Condutor", current: false },
  { num: 3, label: "Dados Cadastrais", current: false },
  { num: 4, label: "CNH", current: false },
  { num: 5, label: "Aprovação", current: false },
];

export default function AtendimentoRenovacaoPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";

  return (
    <div className="space-y-4">
      {/* Card: Renovação Condutax + tags + grid de informações */}
      <div className="rounded-b-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-lg font-bold text-slate-800">Renovação Condutax</h1>
          <span className="rounded bg-rose-500 px-2.5 py-1 text-xs font-bold text-white">
            PRIORIDADE
          </span>
          <span className="rounded bg-sky-500 px-2.5 py-1 text-xs font-bold text-white">
            IDOSO
          </span>
          <span className="rounded bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800">
            POSIÇÃO NA FILA PRIORIZADA POR: CARLOS SILVA
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-slate-200 pt-4 sm:grid-cols-3 lg:grid-cols-6">
          <div className="border-r border-slate-200 pr-4">
            <p className="text-sm font-semibold text-slate-800">Status:</p>
            <p className="mt-1 flex items-center gap-1 text-sm font-bold text-[#1e3a5f]">
              <span>→</span> Atendimento iniciado
            </p>
          </div>
          <div className="border-r border-slate-200 pr-4">
            <p className="text-sm font-semibold text-slate-800">Protocolo de atendimento:</p>
            <p className="mt-1 text-sm text-slate-700">{protocolo}</p>
          </div>
          <div className="border-r border-slate-200 pr-4">
            <p className="text-sm font-semibold text-slate-800">Tempo decorrido:</p>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum</p>
          </div>
          <div className="border-r border-slate-200 pr-4">
            <p className="text-sm font-semibold text-slate-800">Setor:</p>
            <p className="mt-1 text-sm text-slate-700">Lorem ipsum</p>
          </div>
          <div className="border-r border-slate-200 pr-4">
            <p className="text-sm font-semibold text-slate-800">Resp. atendimento no DTP:</p>
            <p className="mt-1 text-sm text-slate-700">João Silva</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">DAMSP:</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-700">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Paga
            </p>
          </div>
        </div>
      </div>

      {/* Uma única seção branca: stepper + Conferência DAMSP + rodapé de ação */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                    step.current
                      ? "bg-[#1e3a5f] text-white"
                      : "border-2 border-slate-300 bg-white text-slate-500"
                  }`}
                >
                  {step.num}
                </div>
                <span
                  className={`mt-1 text-xs font-medium ${
                    step.current ? "text-[#1e3a5f]" : "text-slate-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="mx-1 h-0.5 w-6 min-w-0 border-t-2 border-dashed border-slate-300 sm:mx-2 sm:w-10" aria-hidden />
              )}
            </div>
          ))}
        </div>

        {/* Conferência DAMSP */}
        <div className="mt-5 border-t border-slate-200 pt-5">
          <h2 className="text-base font-bold text-slate-900">Conferência DAMSP</h2>

          <div className="mt-4 grid gap-5 lg:grid-cols-2">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">DAMSP:</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Paga
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Valor</p>
                <p className="mt-1 text-sm text-slate-700">R$ 888,88</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Pagamento efetuado em:</p>
                <p className="mt-1 text-sm text-slate-700">01/01/2026</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Validade:</p>
                <p className="mt-1 text-sm text-slate-700">12/12/2026</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Serviços:</p>
                <p className="mt-1 text-sm font-bold uppercase text-slate-800">
                  Renovação de Condutax
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Comprovante de pagamento:</p>
                <p className="mt-1">
                  <a
                    href="#"
                    className="text-sm text-[#1e3a5f] underline hover:no-underline"
                  >
                    comprovantede....jpeg
                  </a>
                  <span className="ml-2 text-sm text-slate-500">1000kb</span>
                </p>
              </div>
            </div>

            <div>
              <div className="relative flex w-full aspect-[4/3] min-h-[220px] items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                <div className="text-center text-slate-400">
                  <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2 text-sm">Comprovante de pagamento</p>
                </div>
                <button
                  type="button"
                  className="absolute right-2 top-2 rounded border border-slate-200 bg-white p-1.5 text-slate-500 shadow-sm hover:bg-slate-50 hover:text-slate-700"
                  title="Maximizar"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="flex min-w-[140px] flex-1 basis-0 items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-8 py-2.5 text-sm font-medium text-white hover:bg-[#16304d]"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Baixar
                </button>
                <button
                  type="button"
                  className="flex min-w-[140px] flex-1 basis-0 items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-8 py-2.5 text-sm font-medium text-white hover:bg-[#16304d]"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 00-2 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Imprimir
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg bg-[#1e3a5f] px-4 py-2 text-sm font-medium text-white hover:bg-[#16304d]"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Visualizar DAMSP
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé de ação (dentro da mesma seção) */}
        <div className="mt-5 border-t border-slate-200 pt-4">
          <div className="w-full rounded-lg border border-slate-400 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-800">
                  A DAMSP foi paga e o comprovante válido?
                </p>
                <p className="mt-0.5 text-sm font-normal text-slate-600">
                  Clique em avançar para aprovar e seguir para validação de dados do condutor.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/inicio"
                  className="flex min-w-[120px] items-center justify-center gap-2 rounded-lg border-2 border-slate-400 bg-white px-6 py-2 text-sm font-semibold text-slate-700 hover:border-slate-500 hover:bg-slate-50"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Voltar
                </Link>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-rose-600 bg-white px-8 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50 min-w-[140px]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  Reprovar
                </button>
                <Link
                  href={`/inicio/renovacao/atendimento/${protocolo}/dados-condutor`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-2 text-sm font-semibold text-white hover:bg-emerald-700 min-w-[140px]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Avançar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
