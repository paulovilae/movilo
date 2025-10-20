
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function BillingPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Facturación y Pagos</h1>
                <p className="text-muted-foreground">Gestiona tus métodos de pago y revisa tu historial de facturación.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Método de Pago</CardTitle>
                    <CardDescription>
                        El método de pago que se utilizará para la renovación de tu membresía.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="32" viewBox="0 0 48 32"><path fill="#1a1a1a" d="M48 2v28H0V2h48zM41 24H7v-8h34v8zm0-12H7v4h34v-4zM7 6v4h12V6H7z"/></svg>
                             <div>
                                <p className="font-medium">Visa terminada en 4242</p>
                                <p className="text-sm text-muted-foreground">Expira 12/2026</p>
                            </div>
                        </div>
                         <Button variant="outline">Actualizar</Button>
                    </div>
                </CardContent>
                <Separator className="my-4"/>
                <CardHeader>
                    <CardTitle>Historial de Facturación</CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground">No tienes facturas anteriores.</p>
                </CardContent>
            </Card>
        </div>
    );
}
