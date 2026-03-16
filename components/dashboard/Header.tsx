"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "./Breadcrumbs";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { getBreadcrumbs } from "./header-config";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <header className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-slate-200 bg-white px-3 py-3 sm:px-4 min-h-16">
      <div className="flex min-w-0 flex-1 basis-0 items-center gap-2 sm:gap-4">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            className="lg:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 min-h-[44px] min-w-[44px]"
            aria-label="Abrir menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <nav className="flex items-center gap-2 text-sm text-slate-600 min-w-0 flex-1">
          <Link href="/inicio" className="hover:text-primary shrink-0">
            DTP Digital
          </Link>
          <Breadcrumbs items={breadcrumbs} />
        </nav>
      </div>

      <SearchBar />

      <UserMenu />
    </header>
  );
}
