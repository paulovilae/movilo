
'use client';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/icons/logo';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useUser, useAuth } from '@/firebase';
import {
    LayoutDashboard,
    User,
    ClipboardList,
    Wallet,
    Settings,
    LogOut,
} from 'lucide-react';

const providerLinks = [
    { href: '/provider-dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/provider-dashboard/profile', label: 'Mi Perfil', icon: User },
    { href: '/provider-dashboard/services', label: 'Servicios', icon: ClipboardList },
    { href: '/provider-dashboard/billing', label: 'Facturación', icon: Wallet },
];

const settingsLinks = [
    { href: '/provider-dashboard/settings', label: 'Configuración', icon: Settings },
];

export function ProviderSidebar() {
  const pathname = usePathname();
  const { user } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    auth.signOut();
    router.push('/provider-login');
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupLabel>Proveedor</SidebarGroupLabel>
            {providerLinks.map(link => (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton asChild isActive={pathname === link.href}>
                  <Link href={link.href}>
                    <link.icon />
                    <span>{link.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
          <SidebarSeparator />
           <SidebarGroup>
            <SidebarGroupLabel>Cuenta</SidebarGroupLabel>
            {settingsLinks.map(link => (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton asChild isActive={pathname === link.href}>
                  <Link href={link.href}>
                    <link.icon />
                    <span>{link.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className='gap-4'>
        <SidebarSeparator />
        {user && (
            <div className='flex items-center gap-2 p-2'>
                <Avatar className="h-10 w-10">
                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                    <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className='flex flex-col overflow-hidden'>
                    <span className='text-sm font-semibold truncate'>{user.displayName}</span>
                    <span className='text-xs text-muted-foreground truncate'>{user.email}</span>
                </div>
            </div>
        )}
         <Button variant="ghost" className="w-full justify-start gap-2" onClick={handleSignOut}>
            <LogOut />
            <span>Cerrar Sesión</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
