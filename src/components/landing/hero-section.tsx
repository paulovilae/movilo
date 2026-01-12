
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-start text-left text-white">
      <Image
        src="/business-card-front.png"
        alt="Movilo Club Tarjeta de Presentación"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mr-auto space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter drop-shadow-md">
            Tu Salud, a un Mejor Precio
          </h1>
          <p className="text-lg md:text-xl text-slate-100 drop-shadow-sm">
            Únete a Movilo.club y obtén descuentos exclusivos en clínicas, laboratorios, especialistas y farmacias en Cali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Link href="#plans">Ver Planes</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="shadow-lg">
              <Link href="#providers">Buscar Prestador</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
