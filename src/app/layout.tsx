import type { Metadata } from 'next';
import { Montserrat, Comfortaa } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Movilo.club - Tu Club de Descuentos en Salud',
  description: 'Accede a salud asequible con Movilo.club. Encuentra clínicas, laboratorios y especialistas en Cali.',
  icons: {
    icon: '/Movilo/Logotipo/Isotipo Original 1.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${montserrat.variable} ${comfortaa.variable}`}>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
