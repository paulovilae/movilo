
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProviderDashboardPage() {
    const { user, isUserLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isUserLoading && !user) {
            router.push('/provider-login');
        }
    }, [user, isUserLoading, router]);

    if (isUserLoading || !user) {
        return <div className="flex h-screen items-center justify-center">Cargando...</div>;
    }

    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Panel de Proveedor</h1>
                <p className="text-muted-foreground">Hola {user.displayName || user.email}, bienvenido a tu panel.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Estado del Perfil</CardTitle>
                    <CardDescription>
                        Completa tu perfil para aparecer en nuestra red de proveedores.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Tu perfil está pendiente de revisión.</p>
                </CardContent>
            </Card>
        </div>
    );
}

    