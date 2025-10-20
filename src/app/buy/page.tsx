
'use client'
import { Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Logo } from "@/components/icons/logo"
import { plans } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useUser } from '@/firebase';

function BuyPageContent() {
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const searchParams = useSearchParams();
  const planName = searchParams.get('plan') || 'Plan Individual';
  const selectedPlan = plans.find(p => p.name === planName) || plans[0];

  useEffect(() => {
    // If auth state is not loading and there's no user, redirect to login
    if (!isUserLoading && !user) {
      router.push('/login?redirect=/buy&plan=' + encodeURIComponent(planName));
    }
  }, [user, isUserLoading, router, planName]);

  // Show a loading state while checking for user authentication
  if (isUserLoading || !user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
            <div>Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
     <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="flex items-center justify-center bg-background px-4 py-12">
            <div className="w-full max-w-2xl space-y-8">
                <div className="flex justify-center">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                 <Link href="/#plans" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <ArrowLeft className="w-4 h-4" />
                    Volver a los planes
                </Link>
                <Card>
                    <CardHeader>
                    <CardTitle className="text-2xl">Finalizar Compra</CardTitle>
                    <CardDescription>
                        Estás a punto de adquirir el <span className="font-bold text-primary">{selectedPlan.name}</span> para <span className="font-bold text-primary">{user.email}</span>.
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className='space-y-2'>
                            <h3 className="font-semibold">Resumen del Plan</h3>
                            <div className="p-4 border rounded-lg bg-secondary/50">
                                <div className="flex justify-between items-center">
                                    <p className="font-medium">{selectedPlan.name}</p>
                                    <p className="font-bold">{selectedPlan.price} <span className="font-normal text-sm text-muted-foreground">{selectedPlan.priceDetails}</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold">Información de Pago</h3>
                            <div className="space-y-2">
                                <Label htmlFor="name">Nombre en la tarjeta</Label>
                                <Input id="name" placeholder="Tu nombre completo" required defaultValue={user.displayName || ''} />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="card-number">Número de tarjeta</Label>
                                <Input id="card-number" placeholder="0000 0000 0000 0000" required />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expiry-date">Expira</Label>
                                    <Input id="expiry-date" placeholder="MM/AA" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" placeholder="123" required />
                                </div>
                            </div>
                        </div>
                   
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" size="lg" asChild>
                            <Link href="/buy/confirmation">Pagar y Activar Membresía</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function BuyPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BuyPageContent />
        </Suspense>
    );
}

