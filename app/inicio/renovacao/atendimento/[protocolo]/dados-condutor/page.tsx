"use client";

import { useParams } from "next/navigation";
import { AtendimentoShell } from "@/components/atendimento/AtendimentoShell";

const DADOS_CONDUTOR = [
  { label: "Nome completo", value: "Carlos Oliveira Siqueira" },
  { label: "Sexo", value: "Masculino" },
  { label: "CPF", value: "888.888.888-88" },
  { label: "Data de Nascimento", value: "01/01/1988" },
  { label: "RG/RNM", value: "888.888" },
  { label: "Nome do pai", value: "José Santos Siqueira" },
  { label: "Órgão emissor", value: "Lorem Ipsum" },
  { label: "Nome da mãe", value: "Maria Silva Oliveira" },
  { label: "Estado", value: "Lorem Ipsum" },
  { label: "Título de eleitor", value: "888.88888.888.88" },
] as const;

const ARQUIVOS_IDENTIDADE = [
  { nome: "comprovantede....jpeg", tamanho: "1000kb" },
  { nome: "comprovantede....jpeg", tamanho: "1000kb" },
  { nome: "comprovantede....jpeg", tamanho: "1000kb" },
  { nome: "comprovantede....jpeg", tamanho: "1000kb" },
];

const DOCUMENTOS = [
  { label: "RG frente" },
  { label: "RG verso" },
  { label: "Documento adicional" },
  { label: "Formulário" },
];

export default function DadosCondutorPage() {
  const params = useParams();
  const protocolo = (params?.protocolo as string) ?? "T2500221-01";

  return (
    <AtendimentoShell
      currentStep={2}
      bottomQuestion="Os dados de identificação e comprovantes são válidos?"
      bottomInstruction="Clique em avançar para aprovar e seguir para validação de dados cadastrais."
      nextHref={`/inicio/renovacao/atendimento/${protocolo}/dados-cadastrais`}
      nextLabel="Avançar"
      prevHref={`/inicio/renovacao/atendimento/${protocolo}`}
    >
      {/* Conteúdo principal: grid 1fr 1fr, gap 24px */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-[24px]">
        {/* Coluna esquerda – Dados do condutor */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-slate-900">Identificação do Condutor</h2>

          {/* Dados em grid 2 colunas: label + valor */}
          <div className="grid grid-cols-1 grid-rows-[auto] gap-x-6 gap-y-4 sm:grid-cols-2">
            {DADOS_CONDUTOR.map((item, i) => (
              <div key={i}>
                <p className="text-sm font-bold text-slate-900">{item.label}:</p>
                <p className="mt-1 text-sm font-normal text-slate-700">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Comprovante de identidade: grid 2 colunas x 2 itens (igual ao print) */}
          <div>
            <p className="text-sm font-bold text-slate-900">Comprovante de identidade:</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {ARQUIVOS_IDENTIDADE.map((arq, i) => (
                <button
                  key={i}
                  type="button"
                  className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-100 px-3 py-2.5 text-left text-sm transition-colors hover:border-slate-300 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30"
                  onClick={() => {}}
                >
                  <span className="truncate font-medium text-[#1e3a5f]">{arq.nome}</span>
                  <span className="shrink-0 text-slate-500">{arq.tamanho}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna direita – Documentos enviados */}
        <div className="space-y-4">
          {/* Grid 2x2 de miniaturas: borda leve, bg branco, hover destaque */}
          <div className="grid grid-cols-2 gap-4">
            {DOCUMENTOS.map((doc, i) => (
              <div
                key={i}
                className="relative flex aspect-[4/3] flex-col items-center justify-center rounded-lg border border-slate-200 bg-white transition-shadow hover:border-slate-300 hover:shadow-md"
              >
                <svg className="h-10 w-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                </svg>
                <span className="mt-2 text-xs font-medium text-slate-600">{doc.label}</span>
              </div>
            ))}
          </div>

          {/* Ações: Baixar e Imprimir – largura generosa, label inteira visível como no print */}
          <div className="flex flex-wrap gap-4">
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
          </div>
        </div>
      </div>
    </AtendimentoShell>
  );
}
