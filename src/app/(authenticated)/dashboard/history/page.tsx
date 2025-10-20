
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { history } from "@/lib/data";

export default function HistoryPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Historial de Beneficios</h1>
                <p className="text-muted-foreground">Revisa los descuentos y beneficios que has utilizado.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Mis Beneficios Utilizados</CardTitle>
                    <CardDescription>
                        Aquí se muestra un registro de los servicios en los que has ahorrado con tu membresía de Movilo.club.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Proveedor</TableHead>
                                <TableHead>Servicio</TableHead>
                                <TableHead>Fecha</TableHead>
                                <TableHead className="text-right">Descuento</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {history.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.provider}</TableCell>
                                    <TableCell>{item.service}</TableCell>
                                    <TableCell>{new Date(item.date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</TableCell>
                                    <TableCell className="text-right font-semibold text-green-600">{item.discount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
