
'use client';
import { usePathname } from 'next/navigation';
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
    LayoutDashboard,
    HeartHandshake,
    Search,
    Calendar,
    CreditCard,
    Settings,
    LogOut,
    User,
} from 'lucide-react';

const clientLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/benefits', label: 'Mis Beneficios', icon: HeartHandshake },
    { href: '/dashboard/search', label: 'Buscar Servicios', icon: Search },
    { href: '/dashboard/appointments', label: 'Citas', icon: Calendar },
    { href: '/dashboard/digital-card', label: 'Mi Carné Digital', icon: CreditCard },
];

const settingsLinks = [
    { href: '/dashboard/settings', label: 'Configuración', icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const avatarImage = PlaceHolderImages.find(p => p.id === 'avatar-1');

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupLabel>Cliente</SidebarGroupLabel>
            {clientLinks.map(link => (
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
        <div className='flex items-center gap-2 p-2'>
            <Avatar className="h-10 w-10">
                {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt="User avatar" data-ai-hint={avatarImage.imageHint} />}
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
                <span className='text-sm font-semibold'>John Doe</span>
                <span className='text-xs text-muted-foreground'>john.doe@email.com</span>
            </div>
        </div>
         <Button variant="ghost" className="w-full justify-start gap-2" asChild>
            <Link href="/">
                <LogOut />
                <span>Cerrar Sesión</span>
            </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

    