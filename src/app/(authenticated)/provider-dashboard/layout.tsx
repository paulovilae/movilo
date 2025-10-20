
import { ProviderSidebar } from '@/components/provider-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function ProviderDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        <ProviderSidebar />
        <SidebarInset>
            <div className="min-h-screen">
                {children}
            </div>
        </SidebarInset>
    </SidebarProvider>
  );
}
