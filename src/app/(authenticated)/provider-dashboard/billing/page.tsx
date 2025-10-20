
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProviderBillingPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Facturación y Pagos</h1>
                <p className="text-muted-foreground">Revisa tu historial de pagos y configura tu información bancaria.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Historial de Pagos</CardTitle>
                    <CardDescription>
                        Registro de los pagos recibidos por los servicios prestados a través de Movilo.club.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">No hay pagos para mostrar.</p>
                </CardContent>
            </Card>
        </div>
    );
}
