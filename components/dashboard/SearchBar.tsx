"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icons";

interface SearchBarProps {
  onSearch?: (value: string) => void;
  className?: string;
}

export function SearchBar({ onSearch, className = "" }: SearchBarProps) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(search);
  };

  return (
    <div className={`flex w-full flex-1 items-center gap-2 min-w-0 basis-full lg:basis-0 ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-1 items-center gap-2 min-w-0 max-w-md"
      >
        <div className="relative flex flex-1 min-w-0">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 shrink-0 text-slate-400 pointer-events-none" size={4} />
          <input
            type="search"
            placeholder="Pesquisar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full min-w-0 rounded-lg border border-slate-300 bg-slate-50 py-2 pl-9 pr-3 text-sm placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary min-h-[40px] sm:min-h-0"
          />
        </div>
        <button
          type="submit"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover shrink-0 sm:block"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
