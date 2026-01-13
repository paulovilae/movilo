
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/firebase";
import { ArrowRight, Gift, HeartPulse, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const summaryCards = [
    {
        title: "Mi Plan Actual",
        description: "Plan Familiar",
        icon: UserIcon,
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
        description: "Julio 30, 2025",
        icon: Gift,
        cta: {
            text: "Actualizar Pago",
            href: "/dashboard/billing"
        }
    }
];

const benefitsUsageData = [
    { month: 'Ene', count: 2 },
    { month: 'Feb', count: 1 },
    { month: 'Mar', count: 3 },
    { month: 'Abr', count: 5 },
    { month: 'May', count: 3 },
    { month: 'Jun', count: 4 },
];

const chartConfig = {
    count: {
        label: "Usos",
        color: "hsl(var(--primary))",
    },
};

export default function DashboardPage() {
    const { user } = useUser();

    return (
        <div className="p-4 sm:p-6 md:p-8 space-y-8">
            <div className="mb-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                    <img
                        src="/Movilo/Memo/memo-waving.png"
                        alt="Memo Saludando"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold font-headline">Hola, {user?.displayName?.split(' ')[0] || 'Usuario'}</h1>
                    <p className="text-muted-foreground">Bienvenido a tu panel de control de Movilo.club.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {summaryCards.map((item) => (
                    <Card key={item.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <item.icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
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

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Historial de Beneficios Usados</CardTitle>
                        <CardDescription>Tu ahorro mes a mes con Movilo.club.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-[250px] w-full">
                            <ResponsiveContainer>
                                <BarChart data={benefitsUsageData} accessibilityLayer>
                                    <CartesianGrid vertical={false} />
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                                    <YAxis />
                                    <Tooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />
                                    <Bar dataKey="count" fill="var(--color-count)" radius={8} />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Acceso Rápido</CardTitle>
                        <CardDescription>Encuentra lo que necesitas con un solo click.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <Button variant="outline" asChild>
                            <Link href="/dashboard/search">Buscar Prestador</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/dashboard/digital-card">Ver Carné Digital</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/dashboard/appointments">Agendar Cita</Link>
                        </Button>
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                            <Link href="/dashboard/rebuy">Renovar Afiliación</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
