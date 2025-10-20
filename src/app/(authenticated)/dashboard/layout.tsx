
import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
            <div className="min-h-screen">
                {children}
            </div>
        </SidebarInset>
    </SidebarProvider>
  );
}

    