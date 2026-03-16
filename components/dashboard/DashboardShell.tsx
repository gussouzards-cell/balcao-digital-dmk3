"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Overlay mobile quando sidebar aberta */}
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-auto p-3 sm:p-4">{children}</main>
      </div>
    </div>
  );
}
