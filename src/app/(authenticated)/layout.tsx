'use client';

import { useUser } from '@/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isUserLoading && !user) {
      // Security: Redirect unauthenticated users
      // Check if trying to access provider area to redirect to correct login
      if (pathname?.startsWith('/provider-dashboard')) {
        router.push('/provider-login');
      } else {
        router.push('/login');
      }
    }
  }, [user, isUserLoading, router, pathname]);

  if (isUserLoading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="sr-only">Cargando...</span>
      </div>
    );
  }

  // Prevent flash of unauthenticated content while redirecting
  if (!user) {
    return null;
  }

  return <>{children}</>;
}
