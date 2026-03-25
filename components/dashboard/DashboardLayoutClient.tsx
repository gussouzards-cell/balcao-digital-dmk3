"use client";

import { Suspense, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function DashboardLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout flex min-h-screen bg-[#f6f6f6]">
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <Suspense fallback={null}>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </Suspense>
      <div className="dashboard-main-wrap flex min-w-0 flex-1 flex-col">
        <Suspense fallback={<div className="h-[72px] shrink-0 bg-[#f6f6f6]" aria-hidden />}>
          <Header onMenuClick={() => setSidebarOpen(true)} />
        </Suspense>
        {children}
      </div>
    </div>
  );
}
