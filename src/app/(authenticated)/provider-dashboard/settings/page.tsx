
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProviderSettingsPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Configuración de la Cuenta</h1>
                <p className="text-muted-foreground">Gestiona la configuración de tu cuenta de proveedor.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Seguridad</CardTitle>
                    <CardDescription>
                        Gestiona la seguridad de tu cuenta.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <Button variant="outline" className="w-full max-w-xs">Cambiar Contraseña</Button>
                     <Button variant="destructive" className="w-full max-w-xs">Eliminar Cuenta</Button>
                </CardContent>
            </Card>
        </div>
    );
}
