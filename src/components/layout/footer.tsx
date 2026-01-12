
'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: 'Mensaje Enviado',
      description: 'Gracias por contactarnos. Te responderemos pronto.',
    });
    reset();
  };

  return (
    <footer id="contact" className="bg-card border-t w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-6 py-16">
        <div className="space-y-4 lg:col-span-1">
          <Link href="/">
            <img src="/Movilo/Logotipo/Isotipo Original (Contraste).png" alt="Movilo Logo" className="h-12 w-auto mb-4" />
          </Link>
          <p className="text-muted-foreground">Tu salud, a un mejor precio. Accede a una red de beneficios médicos en Cali.</p>
          <div className="space-y-2">
            <h4 className="font-semibold">Contacto Directo:</h4>
            <a href="tel:+573001234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4" />
              +57 300 123 4567
            </a>
            <a href="mailto:hola@movilo.club" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <Mail className="w-4 h-4" />
              hola@movilo.club
            </a>
            <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4">¿Tienes alguna pregunta? Escríbenos</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" {...register('name', { required: true })} placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register('email', { required: true })} placeholder="tu@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" {...register('message', { required: true })} placeholder="Escribe tu mensaje aquí..." />
            </div>
            <Button type="submit" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">Enviar Mensaje</Button>
          </form>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Para Prestadores</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/provider-signup" className="text-sm text-muted-foreground hover:text-primary">
                Inscríbete como Prestador
              </Link>
            </li>
            <li>
              <Link href="/provider-login" className="text-sm text-muted-foreground hover:text-primary">
                Portal de Prestadores
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} Movilo.club. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/terms" className="hover:text-primary">Términos</Link>
            <Link href="/privacy" className="hover:text-primary">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
