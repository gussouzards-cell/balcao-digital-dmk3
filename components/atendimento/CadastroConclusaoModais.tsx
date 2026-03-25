"use client";

import { useEffect } from "react";

const navy = "#0f2e4b";
const red = "#be0000";

function ModalBackdrop({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-[1px]"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-[1000px] rounded-[6px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 flex size-6 items-center justify-center text-[#0f2e4b] hover:opacity-80"
          aria-label="Fechar"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

function IconReturn({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-[15px] w-[15px]"}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
      />
    </svg>
  );
}

/** Modal_ConfirmarSolicitação — após clicar DEFERIR (botão PROTOCOLAR abre 14015) */
export function ModalConfirmarAprovacaoCadastroInicial({
  open = true,
  onClose,
  onProtocolar,
  onRetornar,
}: {
  open?: boolean;
  onClose: () => void;
  onProtocolar: () => void;
  onRetornar: () => void;
}) {
  if (!open) return null;

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="min-h-[310px] px-6 pb-10 pt-10 pr-14 sm:px-6 sm:pr-16">
        <h2 className="text-2xl font-bold leading-[1.5] text-[#0f2e4b]">
          Você confirma que os dados e documentos foram verificados e estão de acordo para o Cadastramento de{" "}
          CONDUTAX?
        </h2>
        <p className="mt-2 text-[14px] leading-[1.5] text-[#3f444d]">
          Pressione &quot;PROTOCOLAR&quot; para prosseguir com a aprovação da solicitação. Caso deseje verificar novamente,
          pressione &quot;Retornar&quot;.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={onRetornar}
            className="inline-flex h-[60px] w-full min-w-0 max-w-[317px] items-center justify-center gap-2 rounded border border-[#0f2e4b] bg-white px-2 text-base font-medium text-[#0f2e4b] hover:bg-slate-50"
          >
            <IconReturn />
            RETORNAR
          </button>
          <button
            type="button"
            onClick={onProtocolar}
            className="inline-flex h-[60px] w-full min-w-0 max-w-[425px] items-center justify-center gap-2 rounded px-2 text-base font-bold text-white hover:opacity-95 sm:ml-auto"
            style={{ backgroundColor: "#408955" }}
          >
            <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12.5l2.5 2.5 5-5.5" />
            </svg>
            PROTOCOLAR
          </button>
        </div>
      </div>
    </ModalBackdrop>
  );
}

/** Modal_ProtocolarEfetivar — após clicar DEFERIR */
export function ModalConfirmarAprovacaoCadastro({
  open = true,
  onClose,
  onProtocolar,
  onRetornar,
}: {
  open?: boolean;
  onClose: () => void;
  onProtocolar: () => void;
  onRetornar: () => void;
}) {
  if (!open) return null;

  return (
    <ModalBackdrop onClose={onClose}>
      {/* Figma node 59026:14015 */}
      <div className="relative h-[483px] w-full">
        <div className="absolute left-[24px] top-[24px] w-[905px]">
          <h2 className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f2e4b] text-[24px] leading-[1.5]">
            Protocolar e efetivar solicitação?
          </h2>
          <p className="mt-[8px] flex flex-col font-medium text-[#3f444d] text-[14px] leading-[1.5]">
            Para protocolar e efetivar a solicitação, e prosseguir com o deferimento da solicitação, preencha e verifique
            os campos abaixo, e pressione &quot;EFETIVAR SOLICITAÇÃO&quot;. Caso deseje verificar novamente, pressione
            &quot;Retornar&quot;.
          </p>
        </div>

        <button
          type="button"
          onClick={onProtocolar}
          className="absolute left-[436px] top-[399px] h-[60px] w-[528px] bg-[#0f2e4b] px-[8px] py-[4px] rounded-[4px] text-white font-bold text-[16px] flex items-center justify-center gap-[8px] hover:opacity-95"
        >
          <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12.5l2.5 2.5 5-5.5" />
          </svg>
          EFETIVAR SOLICITAÇÃO
        </button>

        <button
          type="button"
          onClick={onRetornar}
          className="absolute left-[24px] top-[399px] h-[60px] w-[363px] bg-white border border-[#0f2e4b] rounded-[4px] text-[#0f2e4b] font-medium text-[16px] flex items-center justify-center gap-[8px] hover:bg-slate-50"
        >
          <IconReturn className="h-4 w-4 text-[#0f2e4b]" />
          RETORNAR
        </button>

        <div className="-translate-y-1/2 absolute left-[24px] top-[152.5px] text-[#3f444d] text-[14px] font-semibold">
          Insira os dados para protocolar a solicitação
        </div>

        <div className="absolute left-[24px] top-[171px] w-[940px] h-[196px] border-2 border-[#0b326e] rounded-[4px]">
          <div className="absolute left-[26px] top-[34px] w-[262px] text-[#4d4d4d]">
            <p className="font-bold text-[16px]">Número guia DAMSP:</p>
            <p className="font-normal text-[16px] mt-[8px]">000.0000.000.00000.000.0000.00</p>
          </div>

          <div className="absolute left-[26px] top-[109px] flex gap-[80px] items-center">
            {(
              [
                ["Data vencimento:", "01/01/2006"],
                ["Data protocolo:", "01/01/2006"],
                ["Data efetivação:", "01/01/2006"],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="w-[230px] text-[#4d4d4d]">
                <p className="font-bold text-[16px]">{label}</p>
                <div className="mt-[8px] flex items-center justify-between">
                  <span className="text-[#484848] text-[16px] font-normal">{value}</span>
                  <svg className="h-[16px] w-[16px] text-[#0b326e]" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25z"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-[8px] h-[1px] w-full bg-[#0b326e] opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
}

/** Modal_DeferimentoSolicitacao — Figma node 59026:14038 */
export function ModalEfetivarSolicitacaoCadastro({
  open = true,
  onClose,
  onRetornar,
  onGerarDocumento,
}: {
  open?: boolean;
  onClose: () => void;
  onRetornar: () => void;
  onGerarDocumento: () => void;
}) {
  if (!open) return null;

  return (
    <ModalBackdrop onClose={onClose}>
      {/* Figma node 59026:14038 */}
      <div className="relative h-[518px] w-full">
        <div className="absolute left-[24px] top-[24px] w-[862px]">
          <h2 className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f2e4b] text-[24px] leading-[1.5]">
            Você confirma que os dados abaixo foram verificados e estão de acordo para o deferimento do Cadastramento de CONDUTAX?
          </h2>
          <p className="mt-[8px] flex flex-col font-medium text-[#3f444d] text-[14px] leading-[1.5]">
            Verifique os dados abaixo e pressione &quot;GERAR DOCUMENTO&quot; para aprovar e deferir a solicitação, e prosseguir
            para geração de documento. Caso deseje verificar novamente dados anteriores, pressione &quot;Retornar&quot;.
          </p>
        </div>

        <div className="absolute left-[24px] top-[195.5px] -translate-y-1/2 text-[#3f444d] text-[14px] font-semibold">
          Verifique os dados para deferir a solicitação
        </div>

        <div className="absolute left-[24px] top-[214px] w-[940px] h-[196px] border-2 border-[#0b326e] rounded-[4px]">
          <div className="absolute left-[26px] top-[34px] w-[262px] text-[#4d4d4d]">
            <p className="font-bold text-[16px]">Número guia DAMSP:</p>
            <p className="font-normal text-[16px] mt-[8px]">000.0000.000.00000.000.0000.00</p>
          </div>

          <div className="absolute left-[26px] top-[109px] flex gap-[80px] items-center">
            {(
              [
                ["Data vencimento:", "01/01/2006"],
                ["Data protocolo:", "01/01/2006"],
                ["Data efetivação:", "01/01/2006"],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="w-[230px] text-[#4d4d4d]">
                <p className="font-bold text-[16px]">{label}</p>
                <div className="mt-[8px] flex items-center justify-between">
                  <span className="text-[#484848] text-[16px] font-normal">{value}</span>
                </div>
                <div className="mt-[8px] h-[1px] w-full bg-[#0b326e] opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onGerarDocumento}
          className="absolute left-[436px] top-[434px] h-[60px] w-[528px] bg-[#408955] px-[8px] py-[4px] rounded-[4px] text-white font-bold text-[16px] flex items-center justify-center gap-[8px] hover:opacity-95"
        >
          <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12.5l2.5 2.5 5-5.5" />
          </svg>
          GERAR DOCUMENTO
        </button>

        <button
          type="button"
          onClick={onRetornar}
          className="absolute left-[24px] top-[434px] h-[60px] w-[363px] bg-white border border-[#0f2e4b] rounded-[4px] text-[#0f2e4b] font-medium text-[16px] flex items-center justify-center gap-[8px] hover:bg-slate-50"
        >
          <IconReturn className="h-4 w-4 text-[#0f2e4b]" />
          RETORNAR
        </button>
      </div>
    </ModalBackdrop>
  );
}

const IMG_MODELO_DOCUMENTO_CONDUTAX =
  "https://www.figma.com/api/mcp/asset/32a4633e-7961-4ab6-90af-056e51110a87";

/** Modal_DocumentoGerado — Figma node 59026:14070 */
export function ModalGerarDocumentoCadastro({
  open = true,
  onClose,
  onRetornar,
  onDeferirSolicitacao,
}: {
  open?: boolean;
  onClose: () => void;
  onRetornar: () => void;
  onDeferirSolicitacao: () => void;
}) {
  if (!open) return null;

  return (
    <ModalBackdrop onClose={onClose}>
      {/* Figma node 59026:14070 */}
      <div className="relative h-[694px] w-full">
        <div className="absolute left-[24px] top-[24px] w-[862px]">
          <h2 className="flex flex-col font-bold justify-center relative shrink-0 text-[#0f2e4b] text-[24px] leading-[1.5]">
            Geração de Documento
          </h2>
          <p className="mt-[8px] flex flex-col font-medium text-[#3f444d] text-[14px] leading-[1.5]">
            Verifique o documento gerado e pressione &quot;DEFERIR SOLICITAÇÃO&quot; para deferir a solicitação e prosseguir
            para conclusão do atendimento. Caso deseje verificar novamente dados anteriores, pressione &quot;Retornar&quot;.
          </p>
        </div>

        <div className="absolute left-[24px] top-[135px] w-[940px] h-[450px] border-2 border-[#0b326e] rounded-[4px]" />

        <div className="absolute left-[217px] top-[156px] w-[519px] h-[403px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
          <img
            src={IMG_MODELO_DOCUMENTO_CONDUTAX}
            alt="Modelo de documento"
            className="absolute inset-0 object-cover pointer-events-none"
          />
        </div>

        <button
          type="button"
          onClick={onDeferirSolicitacao}
          className="absolute left-[436px] top-[610px] h-[60px] w-[528px] bg-[#408955] px-[8px] py-[4px] rounded-[4px] text-white font-bold text-[16px] flex items-center justify-center gap-[8px] hover:opacity-95"
        >
          <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12.5l2.5 2.5 5-5.5" />
          </svg>
          DEFERIR SOLICITAÇÃO
        </button>

        <button
          type="button"
          onClick={onRetornar}
          className="absolute left-[24px] top-[610px] h-[60px] w-[363px] bg-white border border-[#0f2e4b] rounded-[4px] text-[#0f2e4b] font-medium text-[16px] flex items-center justify-center gap-[8px] hover:bg-slate-50"
        >
          <IconReturn className="h-4 w-4 text-[#0f2e4b]" />
          RETORNAR
        </button>
      </div>
    </ModalBackdrop>
  );
}

/** Modal_Indeferir — após clicar RECUSAR */
export function ModalIndeferirCadastro({
  open = true,
  onClose,
  onIndeferir,
  onRetornar,
  onSolicitarNovosDocumentos,
}: {
  open?: boolean;
  onClose: () => void;
  onIndeferir: () => void;
  onRetornar: () => void;
  onSolicitarNovosDocumentos: () => void;
}) {
  if (!open) return null;

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="min-h-[310px] px-6 pb-10 pt-10 pr-14 sm:px-6 sm:pr-16">
        <h2 className="text-2xl font-bold leading-[1.5] text-[#0f2e4b]">
          Você confirma que os dados e/ou documentos enviados foram verificados e NÃO estão de acordo para o{" "}
          Cadastramento de CONDUTAX?
        </h2>
        <p className="mt-2 text-[14px] leading-[1.5] text-[#3f444d]">
          Pressione &quot;Indeferir&quot; para confirmar a reprovação da solicitação. Caso deseje solicitar novos
          documentos, pressione &quot;SOLICITAR NOVOS DOCUMENTOS&quot;, ou pressione &quot;Retornar&quot; para voltar à tela
          anterior.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <button
            type="button"
            onClick={onRetornar}
            className="inline-flex h-[60px] w-full min-w-0 max-w-[217px] items-center justify-center gap-2 rounded border border-[#0f2e4b] bg-white px-2 text-base font-medium text-[#0f2e4b] hover:bg-slate-50"
          >
            <IconReturn />
            RETORNAR
          </button>
          <button
            type="button"
            onClick={onSolicitarNovosDocumentos}
            className="inline-flex h-[60px] w-full min-w-0 max-w-[337px] flex-1 items-center justify-center rounded border border-[#0f2e4b] px-2 text-base font-medium text-white hover:opacity-95 sm:flex-initial"
            style={{ backgroundColor: navy }}
          >
            SOLICITAR NOVOS DOCUMENTOS
          </button>
          <button
            type="button"
            onClick={onIndeferir}
            className="inline-flex h-[60px] w-full min-w-0 max-w-[361px] flex-1 items-center justify-center gap-2 rounded px-2 text-base font-medium text-white hover:opacity-95 sm:flex-initial"
            style={{ backgroundColor: red }}
          >
            <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 9l-6 6M9 9l6 6"
              />
            </svg>
            INDEFERIR
          </button>
        </div>
      </div>
    </ModalBackdrop>
  );
}

/** Modal_ConclusãoAprovação — após PROTOCOLAR */
export function ModalConclusaoDeferidaCadastro({
  open = true,
  onClose,
  onProsseguir,
}: {
  open?: boolean;
  onClose: () => void;
  onProsseguir: () => void;
}) {
  if (!open) return null;

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="flex min-h-[415px] flex-col items-center px-4 py-11 text-center sm:px-28">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-[#458b5e] text-white shadow-inner"
          aria-hidden
        >
          <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-12 max-w-[790px] text-2xl font-bold leading-[1.5] text-[#0f2e4b]">
          Cadastramento de CONDUTAX deferido com sucesso!
        </h2>
        <p className="mt-2 max-w-[790px] text-[14px] leading-[1.5] text-[#3f444d]">
          Pressione &quot;Prosseguir&quot; para retornar a tela de seleção de atendimento.
        </p>
        <button
          type="button"
          onClick={onProsseguir}
          className="mt-10 h-[60px] w-full max-w-[790px] rounded border border-[#0f2e4b] px-2 text-base font-medium text-white hover:opacity-95"
          style={{ backgroundColor: navy }}
        >
          PROSSEGUIR
        </button>
      </div>
    </ModalBackdrop>
  );
}

/** Modal_ConclusãoReprovação — após INDEFERIR */
export function ModalConclusaoReprovadaCadastro({
  open = true,
  onClose,
  onProsseguir,
}: {
  open?: boolean;
  onClose: () => void;
  onProsseguir: () => void;
}) {
  if (!open) return null;

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="flex min-h-[415px] flex-col items-center px-4 py-11 text-center sm:px-28">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-[#be0000] text-white shadow-inner"
          aria-hidden
        >
          <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h2 className="mt-12 max-w-[790px] text-2xl font-bold leading-[1.5] text-[#0f2e4b]">
          Solicitação de Cadastramento de CONDUTAX reprovada.
        </h2>
        <p className="mt-2 max-w-[790px] text-[14px] leading-[1.5] text-[#3f444d]">
          Pressione &quot;Prosseguir&quot; para retornar a tela de seleção de atendimento.
        </p>
        <button
          type="button"
          onClick={onProsseguir}
          className="mt-10 h-[60px] w-full max-w-[790px] rounded border border-[#0f2e4b] px-2 text-base font-medium text-white hover:opacity-95"
          style={{ backgroundColor: navy }}
        >
          PROSSEGUIR
        </button>
      </div>
    </ModalBackdrop>
  );
}

/** Modal_ConclusãoSolicitação — após SOLICITAR NOVOS DOCUMENTOS */
export function ModalConclusaoSolicitacaoCadastro({
  open = true,
  onClose,
  onProsseguir,
}: {
  open?: boolean;
  onClose: () => void;
  onProsseguir: () => void;
}) {
  if (!open) return null;

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="flex min-h-[415px] flex-col items-center px-4 py-11 text-center sm:px-28">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-[#458b5e] text-white shadow-inner"
          aria-hidden
        >
          <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-12 max-w-[790px] text-2xl font-bold leading-[1.5] text-[#0f2e4b]">
          Documentos solicitados com sucesso.
        </h2>
        <p className="mt-2 max-w-[790px] text-[14px] leading-[1.5] text-[#3f444d]">
          Pressione &quot;Prosseguir&quot; para retornar a tela de seleção de atendimento.
        </p>
        <button
          type="button"
          onClick={onProsseguir}
          className="mt-10 h-[60px] w-full max-w-[790px] rounded border border-[#0f2e4b] px-2 text-base font-medium text-white hover:opacity-95"
          style={{ backgroundColor: navy }}
        >
          PROSSEGUIR
        </button>
      </div>
    </ModalBackdrop>
  );
}

/** Modal_DeptoJuridico — após ENVIAR P/ DPTO JURÍDICO */
export function ModalSolicitacaoDepartamentoJuridicoCadastro({
  open = true,
  onClose,
  onProsseguir,
}: {
  open?: boolean;
  onClose: () => void;
  onProsseguir: () => void;
}) {
  if (!open) return null;

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="flex min-h-[415px] flex-col items-center px-4 py-11 text-center sm:px-28">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-[#458b5e] text-white shadow-inner"
          aria-hidden
        >
          <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-12 max-w-[790px] text-2xl font-bold leading-[1.5] text-[#0f2e4b]">
          Solicitação enviada para o Departamento Jurídico.
        </h2>
        <p className="mt-2 max-w-[790px] text-[14px] leading-[1.5] text-[#3f444d]">
          Pressione &quot;Prosseguir&quot; para retornar a tela de seleção de atendimento.
        </p>
        <button
          type="button"
          onClick={onProsseguir}
          className="mt-10 h-[60px] w-full max-w-[790px] rounded border border-[#0f2e4b] px-2 text-base font-medium text-white hover:opacity-95"
          style={{ backgroundColor: navy }}
        >
          PROSSEGUIR
        </button>
      </div>
    </ModalBackdrop>
  );
}

/** Alias para manter nomes consistentes no fluxo de Renovação. */
export function ModalSolicitacaoDepartamentoJuridicoRenovacao({
  open = true,
  onClose,
  onProsseguir,
}: {
  open?: boolean;
  onClose: () => void;
  onProsseguir: () => void;
}) {
  return (
    <ModalSolicitacaoDepartamentoJuridicoCadastro open={open} onClose={onClose} onProsseguir={onProsseguir} />
  );
}

