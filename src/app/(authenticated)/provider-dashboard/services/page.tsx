
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function ProviderServicesPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold font-headline">Gestionar Servicios</h1>
                    <p className="text-muted-foreground">Define los servicios y descuentos que ofreces a los socios.</p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Agregar Servicio
                </Button>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Mis Servicios</CardTitle>
                    <CardDescription>
                        Aquí aparecerá la lista de los servicios que ofreces.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Actualmente no has agregado ningún servicio.</p>
                </CardContent>
            </Card>
        </div>
    );
}
