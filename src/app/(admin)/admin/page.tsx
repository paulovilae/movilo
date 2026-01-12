
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Stethoscope, UserPlus, Bell, CheckCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const userGrowthData = [
    { month: 'Ene', users: 150 },
    { month: 'Feb', users: 280 },
    { month: 'Mar', users: 400 },
    { month: 'Abr', users: 650 },
    { month: 'May', users: 890 },
    { month: 'Jun', users: 1234 },
];

const membershipSalesData = [
    { month: 'Ene', sales: 20 },
    { month: 'Feb', sales: 45 },
    { month: 'Mar', sales: 60 },
    { month: 'Abr', sales: 55 },
    { month: 'May', sales: 75 },
    { month: 'Jun', sales: 90 },
];

const chartConfig = {
    users: {
        label: "Usuarios",
        color: "hsl(var(--primary))",
    },
    sales: {
        label: "Ventas",
        color: "hsl(var(--accent))",
    }
};

const recentActivities = [
    {
        icon: UserPlus,
        text: "Nuevo prestador 'Clínica Dental Sonríe' ha solicitado unirse.",
        time: "hace 5 minutos",
    },
    {
        icon: CheckCircle,
        text: "Se aprobó la membresía de 'Juan Pérez'.",
        time: "hace 1 hora",
    },
    {
        icon: UserPlus,
        text: "Nuevo prestador 'vilapaulo' ha solicitado unirse.",
        time: "hace 3 horas",
    },
];


export default function AdminDashboardPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8 space-y-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Panel de Administración</h1>
                <p className="text-muted-foreground">Bienvenido al centro de control de Movilo.club.</p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Usuarios Registrados</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1,234</div>
                                <p className="text-xs text-muted-foreground">+15% desde el mes pasado</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Prestadores Afiliados</CardTitle>
                                <Stethoscope className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">89</div>
                                <p className="text-xs text-muted-foreground">+5 nuevos esta semana</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Membresías Activas</CardTitle>
                                <Briefcase className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">980</div>
                                <p className="text-xs text-muted-foreground">Renovaciones del 92%</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Crecimiento de Usuarios</CardTitle>
                            <CardDescription>Evolución de usuarios registrados en los últimos 6 meses.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig} className="h-[250px] w-full">
                                <ResponsiveContainer>
                                    <LineChart data={userGrowthData}>
                                        <CartesianGrid vertical={false} />
                                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                                        <YAxis />
                                        <Tooltip
                                            cursor={false}
                                            content={<ChartTooltipContent indicator="dot" />}
                                        />
                                        <Line dataKey="users" type="monotone" stroke="var(--color-users)" strokeWidth={2} dot={true} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Ventas de Membresías</CardTitle>
                            <CardDescription>Nuevas membresías vendidas por mes.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig} className="h-[250px] w-full">
                                <ResponsiveContainer>
                                    <BarChart data={membershipSalesData}>
                                        <CartesianGrid vertical={false} />
                                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                                        <YAxis />
                                        <Tooltip
                                            cursor={false}
                                            content={<ChartTooltipContent hideLabel />}
                                        />
                                        <Bar dataKey="sales" fill="var(--color-sales)" radius={8} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Bell className="h-5 w-5" />
                                Actividad Reciente
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="bg-secondary p-2 rounded-full">
                                            <activity.icon className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-sm">{activity.text}</p>
                                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
