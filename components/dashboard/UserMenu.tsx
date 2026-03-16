"use client";

import { Icon } from "@/components/icons/Icons";

interface UserMenuProps {
  userName?: string;
}

export function UserMenu({ userName = "João" }: UserMenuProps) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <div
        className="flex h-9 w-9 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-slate-200 text-slate-600"
        aria-hidden
      >
        <Icon name="person" size={5} />
      </div>
      <button
        type="button"
        className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-slate-700"
        aria-label="Menu do usuário"
      >
        Olá, {userName}
        <Icon name="chevron-down" size={4} className="text-slate-500" />
      </button>
    </div>
  );
}
