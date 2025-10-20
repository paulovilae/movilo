
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProviderProfilePage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Mi Perfil de Proveedor</h1>
                <p className="text-muted-foreground">Mantén tu información pública actualizada.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Información del Proveedor</CardTitle>
                    <CardDescription>
                        Aquí podrás editar la información que ven los socios de Movilo.club.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">El formulario para editar el perfil estará disponible aquí.</p>
                </CardContent>
            </Card>
        </div>
    );
}
