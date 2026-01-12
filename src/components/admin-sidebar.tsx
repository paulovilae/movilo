
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
  SidebarSeparator,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/icons/logo';
import { Button } from './ui/button';
import { useUser, useAuth } from '@/firebase';
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  LogOut,
  Shield,
  Briefcase,
  UserCog,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const adminLinks = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/users', label: 'Usuarios', icon: Users },
  { href: '/admin/providers', label: 'Prestadores', icon: Stethoscope },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { user } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    auth.signOut();
    router.push('/');
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className='flex items-center gap-2'>
          <Logo />
          <Shield size={16} className='text-muted-foreground' />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupLabel>Admin</SidebarGroupLabel>
            {adminLinks.map(link => (
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
            <SidebarGroupLabel>Portales</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard">
                  <UserCog />
                  <span>Portal Socio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/provider-dashboard">
                  <Briefcase />
                  <span>Portal Prestador</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className='gap-4'>
        {user && (
          <Link href="/dashboard/settings" className='flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors'>
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
              <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className='flex flex-col overflow-hidden'>
              <span className='text-sm font-semibold truncate'>{user.displayName}</span>
              <span className='text-xs text-muted-foreground truncate'>{user.email}</span>
            </div>
          </Link>
        )}
        <Button variant="ghost" className="w-full justify-start gap-2" onClick={handleSignOut}>
          <LogOut />
          <span>Cerrar Sesión</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
