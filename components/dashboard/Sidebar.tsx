"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_W = "w-[233px]";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden>
      <path d="M1 1.5L6 5.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden>
      <path d="M11 5.5L6 1.5L1 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ open = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [licencaOpen, setLicencaOpen] = useState(false);

  const isInicio = pathname === "/inicio";
  const isCadastramento = pathname.startsWith("/inicio/cadastramento");
  const isRenovacao = pathname.startsWith("/inicio/renovacao");
  const isAlvara = pathname === "/inicio/alvara";
  const isConfig = pathname === "/inicio/configuracoes";

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex w-[272px] shrink-0 flex-col bg-[#193758] transition-transform duration-200 ease-out lg:relative lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Menu principal"
    >
      {/* Faixa superior — logo + texto (Figma) */}
      <div className="flex h-16 shrink-0 items-center gap-3 px-[18px]">
        <img
          src="/img/dashboard-dtp-logo.png"
          alt=""
          width={43}
          height={43}
          className="h-[43px] w-[43px] shrink-0 rounded object-cover"
        />
        <p className="max-w-[134px] text-[10px] font-medium leading-snug text-white">
          Departamento de Transportes Públicos
        </p>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white/90 hover:bg-white/10 lg:hidden"
            aria-label="Fechar menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Área clara — navegação (Figma #f1f3f9) */}
      <div className="flex min-h-0 flex-1 flex-col bg-[#f1f3f9] shadow-[4px_0_2px_rgba(0,0,0,0.02)]">
        <nav className="flex flex-1 flex-col gap-3 px-3.5 pb-4 pt-6" aria-label="Menu principal">
          {/* Início */}
          <div className={NAV_W}>
            <Link
              href="/inicio"
              onClick={() => onClose?.()}
              className={`flex h-[54px] items-center gap-3 rounded-[6px] pl-[15px] pr-3 shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] ${
                isInicio ? "bg-white" : "bg-transparent hover:bg-white/70"
              }`}
            >
              <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[3px] bg-[#193758]">
                <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </span>
              <span className="text-[14px] font-bold leading-[1.5] text-[#2d3748]">Início</span>
            </Link>
          </div>

          {/* Cadastro CONDUTAX — cartão expandido */}
          <div
            className={`${NAV_W} relative min-h-[176px] rounded-[6px] bg-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)]`}
          >
            <div className="absolute left-[15px] top-[12px] h-[22px] w-[22px] rounded-[3px] bg-[#193758]" />
            <svg
              className="absolute left-[18px] top-[15px] h-[18px] w-[18px] text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="pl-[58px] pr-8 pt-3">
              <p className="text-[14px] font-bold leading-[1.5] text-[#2d3748]">Cadastro</p>
              <p className="text-[8px] font-normal leading-[1.5] text-[#2d3748]">CONDUTAX</p>
            </div>
            <div className="absolute right-3 top-[22px] text-[#2d3748]">
              <ChevronUp className="h-[7px] w-3" />
            </div>

            <div className="relative mt-2 px-4 pb-3">
              <Link
                href="/inicio/cadastramento"
                onClick={() => onClose?.()}
                className="relative mb-2 flex h-[30px] items-center pl-[30px]"
              >
                <span
                  className={`absolute left-0 top-0 h-full w-[30px] rounded-[3px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] ${
                    isCadastramento ? "bg-[#193758]" : "bg-[#f1f3f9]"
                  }`}
                />
                <svg
                  className={`absolute left-[7px] top-1/2 h-4 w-4 -translate-y-1/2 ${
                    isCadastramento ? "text-white" : "text-slate-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span
                  className={`pl-8 text-[14px] font-bold leading-[1.5] ${
                    isCadastramento ? "text-[#193758]" : "text-[#a0aec0]"
                  }`}
                >
                  Cadastramento
                </span>
              </Link>

              <Link
                href="/inicio/renovacao"
                onClick={() => onClose?.()}
                className="relative flex h-[30px] items-center pl-[30px]"
              >
                <span
                  className={`absolute left-0 top-0 h-full w-[30px] rounded-[3px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] ${
                    isRenovacao ? "bg-[#193758]" : "bg-[#f1f3f9]"
                  }`}
                />
                <svg
                  className={`absolute left-[7px] top-1/2 h-4 w-4 -translate-y-1/2 ${
                    isRenovacao ? "text-white" : "text-slate-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span
                  className={`pl-8 text-[14px] font-bold leading-[1.5] ${
                    isRenovacao ? "text-[#193758]" : "text-[#a0aec0]"
                  }`}
                >
                  Renovação
                </span>
              </Link>
            </div>
          </div>

          {/* Licença */}
          <div className={NAV_W}>
            <button
              type="button"
              onClick={() => setLicencaOpen(!licencaOpen)}
              className="relative flex h-[54px] w-full items-center rounded-[6px] text-left"
            >
              <span className="absolute left-[15px] top-1/2 h-[22px] w-[22px] -translate-y-1/2 rounded-[3px] bg-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)]" />
              <svg
                className="absolute left-[18px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-4 4h4M5 17h14a1 1 0 001-1v-3.414a1 1 0 00-.293-.707L16 10.586M5 17V7a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1" />
              </svg>
              <div className="pl-[58px] pr-8">
                <p className="text-[14px] font-bold leading-[1.5] text-[#a0aec0]">Licença</p>
                <p className="text-[8px] font-normal leading-[1.5] text-[#a0aec0]">ALVARÁ DE ESTACIONAMENTO</p>
              </div>
              <ChevronDown className="absolute right-3 top-1/2 h-[7px] w-3 -translate-y-1/2 text-[#a0aec0]" />
            </button>
            {licencaOpen && (
              <div className="mt-1 rounded-md border border-slate-200 bg-white py-1 shadow-sm">
                <Link
                  href="/inicio/alvara"
                  onClick={() => onClose?.()}
                  className={`block px-4 py-2 text-sm ${isAlvara ? "font-semibold text-[#193758]" : "text-slate-600"}`}
                >
                  ALVARÁ DE ESTACIONAMENTO
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Configurações + Sair + rodapé */}
        <div className="mt-auto flex flex-col gap-6 px-3.5 pb-6 pt-4">
          <div className="mx-auto h-px w-[106px] bg-[#cbd5e1]" aria-hidden />

          <Link
            href="/inicio/configuracoes"
            onClick={() => onClose?.()}
            className="inline-grid grid-cols-[30px_1fr] items-center gap-3"
          >
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[3px] bg-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)]">
              <svg className="h-[18px] w-[18px] text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span
              className={`text-[14px] font-bold leading-[1.5] ${
                isConfig ? "text-[#193758]" : "text-[#a0aec0]"
              }`}
            >
              Configurações
            </span>
          </Link>

          <Link
            href="/"
            onClick={() => onClose?.()}
            className="inline-grid grid-cols-[30px_1fr] items-center gap-3"
          >
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[3px] bg-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)]">
              <svg className="h-3.5 w-3.5 text-[#4d4d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </span>
            <span className="text-[14px] font-bold leading-[1.5] text-[#4d4d4d]">Sair</span>
          </Link>

          <div className="text-[10px] leading-normal text-[#3f444d]">
            <p className="font-bold">Departamento de Transportes Públicos (DTP)</p>
            <p className="mt-2 font-normal">Rua Joaquim Carlos, nº 655, Pari - São Paulo</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
