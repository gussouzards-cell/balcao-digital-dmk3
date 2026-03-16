"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/inicio", label: "Início", icon: "home" },
  {
    label: "Cadastro",
    sublabel: "CONDUTAX",
    icon: "document",
    defaultExpanded: true,
    children: [
      { href: "/inicio/cadastramento", label: "Cadastramento", subIcon: "person-star" },
      { href: "/inicio/renovacao", label: "Renovação", subIcon: "document-arrows" },
    ],
  },
  {
    label: "Licença",
    sublabel: "ALVARÁ DE ESTACIONAMENTO",
    icon: "car",
    defaultExpanded: false,
    children: [{ href: "/inicio/alvara", label: "ALVARÁ DE ESTACIONAMENTO" }],
  },
  { href: "/inicio/configuracoes", label: "Configurações", icon: "settings" },
];

function NavIcon({ name, variant = "light" }: { name: string; variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  const boxCls = isDark ? "flex h-9 w-9 shrink-0 items-center justify-center rounded bg-primary text-white" : "flex h-9 w-9 shrink-0 items-center justify-center rounded bg-slate-200 text-slate-500";
  const cls = "h-5 w-5 shrink-0";
  if (name === "home")
    return (
      <div className={boxCls}>
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>
    );
  if (name === "document")
    return (
      <div className={boxCls}>
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
    );
  if (name === "car")
    return (
      <div className={boxCls}>
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-4 4h4M5 17h14a1 1 0 001-1v-3.414a1 1 0 00-.293-.707L16 10.586M5 17V7a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    );
  if (name === "settings")
    return (
      <div className={boxCls}>
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    );
  return null;
}

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ open = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    Cadastro: true,
    Licença: false,
  });

  return (
    <aside
      style={{ backgroundColor: "#f1f3f9" }}
      className={`flex w-64 flex-col z-50 transition-transform duration-200 ease-out lg:translate-x-0 lg:static
        fixed inset-y-0 left-0 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* Topo: mesma altura do header (área branca de busca) */}
      <div className="min-h-16 border-b border-white/10 bg-primary px-4 py-3 sm:px-5 sm:py-3 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
            DTP
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-white truncate">DTP Digital</p>
            <p className="text-xs text-white/80 truncate">Departamento de Transportes Públicos</p>
          </div>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white/90 hover:bg-white/10 min-h-[44px] min-w-[44px]"
            aria-label="Fechar menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-2 p-3">
        {navItems.map((item) => {
          if ("href" in item) {
            const href = item.href ?? "#";
            const isActive = pathname === href;
            return (
              <Link
                key={item.label}
                href={href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors min-h-[44px] ${
                  isActive ? "bg-white text-slate-900 shadow-sm" : "text-slate-700 hover:bg-white/80 hover:text-slate-900"
                }`}
              >
                {isActive ? (
                  <NavIcon name={item.icon} variant="dark" />
                ) : (
                  <NavIcon name={item.icon} variant="light" />
                )}
                {item.label}
              </Link>
            );
          }
          const isExpanded = expanded[item.label] ?? (item as { defaultExpanded?: boolean }).defaultExpanded ?? false;
          const hasActiveChild = item.children?.some((c) => pathname === c.href);
          const isLightCard = isExpanded || hasActiveChild;
          return (
            <div key={item.label} className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setExpanded((e) => ({ ...e, [item.label]: !isExpanded }))}
                className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm font-bold transition-colors min-h-[44px] ${
                  isLightCard ? "bg-white text-slate-900 shadow-sm" : "text-slate-700 hover:bg-white/80 hover:text-slate-900"
                }`}
              >
                <NavIcon name={item.icon} variant={isLightCard ? "dark" : "light"} />
                <div className="flex-1">
                  <p>{item.label}</p>
                  {"sublabel" in item && item.sublabel && (
                    <p className="text-[10px] font-normal opacity-80">{item.sublabel}</p>
                  )}
                </div>
                <svg
                  className={`h-4 w-4 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isExpanded &&
                item.children?.map((child) => {
                  const isActive = pathname === child.href;
                  return (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={`flex items-center gap-2 border-t border-slate-200 bg-white/50 py-2 pl-4 pr-3 text-sm font-medium text-slate-700 hover:bg-white min-h-[44px] ${
                        isActive ? "bg-white font-semibold text-slate-900" : ""
                      }`}
                    >
                      {"subIcon" in child && child.subIcon && (
                        <SubIcon name={child.subIcon} />
                      )}
                      {child.label}
                    </Link>
                  );
                })}
            </div>
          );
        })}
      </nav>

      <Link
        href="/"
        className="mx-3 mb-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 min-h-[44px]"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Sair
      </Link>

      <div className="border-t border-slate-200 p-4 text-xs text-slate-600">
        <p className="font-medium text-slate-800">Departamento de Transportes Públicos (DTP)</p>
        <p className="mt-1">Rua Joaquim Carlos, nº 655, Pari - São Paulo</p>
      </div>
    </aside>
  );
}

function SubIcon({ name }: { name: string }) {
  const cls = "h-4 w-4 shrink-0 text-slate-500";
  if (name === "person-star")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  if (name === "document-arrows")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-4 4h4M7 16l4-4m0 0l4 4m-4-4v4" />
      </svg>
    );
  return null;
}
