
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function AdminProvidersPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold font-headline">Gestionar Proveedores</h1>
                    <p className="text-muted-foreground">Agrega, edita o elimina proveedores de la red.</p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Agregar Proveedor
                </Button>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Lista de Proveedores</CardTitle>
                    <CardDescription>
                        Aquí aparecerá la lista de todos los proveedores afiliados.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Actualmente no hay proveedores para mostrar.</p>
                </CardContent>
            </Card>
        </div>
    );
}
