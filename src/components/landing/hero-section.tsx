
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
            Tu Salud, a un Mejor Precio
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Únete a Movilo.club y obtén descuentos exclusivos en clínicas, laboratorios, especialistas y farmacias en Cali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#plans">Ver Planes</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#providers">Buscar Proveedor</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

    