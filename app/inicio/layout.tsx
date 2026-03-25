import { DashboardLayoutClient } from "@/components/dashboard/DashboardLayoutClient";
import "../styles/dashboard.css";
import "../styles/atendimento.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayoutClient>
      <main id="main" className="dashboard-main flex-1 overflow-x-auto overflow-y-auto p-3 sm:p-4" tabIndex={-1}>
        {children}
      </main>
    </DashboardLayoutClient>
  );
}
