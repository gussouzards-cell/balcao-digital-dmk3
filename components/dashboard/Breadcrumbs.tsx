"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  href: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600 min-w-0">
      {items.map((b, i) => (
        <span key={b.href} className="flex items-center gap-2 min-w-0">
          {i > 0 && <span className="text-slate-400 shrink-0" aria-hidden>/</span>}
          {i === items.length - 1 ? (
            <span className="font-medium text-slate-900 truncate min-w-0" title={b.label}>
              {b.label}
            </span>
          ) : (
            <Link href={b.href} className="hover:text-primary truncate min-w-0 max-w-[100px] sm:max-w-none" title={b.label}>
              {b.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
