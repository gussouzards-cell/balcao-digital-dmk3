"use client";

import { useEffect } from "react";

const navy = "#0f2e4b";
const green = "#408955";
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

/** Modal_ConfirmarAprovação — após clicar DEFERIR */
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
      <div className="min-h-[310px] px-6 pb-10 pt-10 pr-14 sm:px-6 sm:pr-16">
        <h2 className="text-2xl font-bold leading-[1.5] text-[#0f2e4b]">
          Você confirma que os dados e documentos foram verificados e estão de acordo para o{" "}
          Cadastramento de CONDUTAX?
        </h2>
        <p className="mt-2 text-[14px] leading-[1.5] text-[#3f444d]">
          Pressione &quot;PROTOCOLAR&quot; para prosseguir com a aprovação da solicitação. Caso deseje verificar
          novamente, pressione &quot;Retornar&quot;.
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
            style={{ backgroundColor: green }}
          >
            <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12.5l2.5 2.5 5-5.5"
              />
            </svg>
            PROTOCOLAR
          </button>
        </div>
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

