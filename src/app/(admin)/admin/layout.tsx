
import { AdminSidebar } from '@/components/admin-sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AuthGuard } from '@/components/auth-guard';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 lg:hidden">
            <SidebarTrigger className="-ml-1" />
          </header>
          <div className="min-h-screen">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  );
}
