
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Gift, HeartPulse, User } from "lucide-react";
import Link from "next/link";

const summaryCards = [
    {
        title: "Mi Plan Actual",
        description: "Plan Familiar",
        icon: User,
        cta: {
            text: "Gestionar Plan",
            href: "/dashboard/plan"
        }
    },
    {
        title: "Beneficios Utilizados",
        description: "3 este mes",
        icon: HeartPulse,
        cta: {
            text: "Ver Historial",
            href: "/dashboard/history"
        }
    },
    {
        title: "Próxima Renovación",
        description: "Julio 30, 2024",
        icon: Gift,
        cta: {
            text: "Actualizar Pago",
            href: "/dashboard/billing"
        }
    }
]

export default function DashboardPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Hola, John</h1>
                <p className="text-muted-foreground">Bienvenido a tu panel de control de Movilo.club.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {summaryCards.map((item) => (
                    <Card key={item.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <item.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{item.description}</div>
                             <Link href={item.cta.href} className="text-xs text-muted-foreground mt-1 flex items-center gap-1 hover:text-primary">
                                {item.cta.text} <ArrowRight className="h-3 w-3" />
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Acceso Rápido</CardTitle>
                    <CardDescription>Encuentra lo que necesitas con un solo click.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" asChild>
                        <Link href="/dashboard/search">Buscar Proveedor</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/dashboard/digital-card">Ver Carné Digital</Link>
                    </Button>
                     <Button variant="outline" asChild>
                        <Link href="/dashboard/appointments">Agendar Cita</Link>
                    </Button>
                    <Button variant="accent" className="bg-accent text-accent-foreground" asChild>
                        <Link href="/dashboard/rebuy">Renovar Afiliación</Link>
                    </Button>
                </CardContent>
            </Card>

        </div>
    )
}

    