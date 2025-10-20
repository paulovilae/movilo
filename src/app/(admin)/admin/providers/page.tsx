
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Check, X, MoreHorizontal } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const mockProviders = [
    {
        name: "Clínica Dental Sonríe S.A.S",
        contact: "Ana María Rodríguez",
        email: "contacto@sonrie.com",
        date: "2024-07-20",
        status: "Pendiente"
    },
    {
        name: "Laboratorio Bioclinic",
        contact: "Juan Pérez",
        email: "juan.perez@bioclinic.co",
        date: "2024-07-18",
        status: "Aprobado"
    },
    {
        name: "vilapaulo",
        contact: "Paulo Vila",
        email: "vilapaulo@gmail.com",
        date: "2024-07-22",
        status: "Pendiente"
    },
    {
        name: "Fisioterapia Integral",
        contact: "Luisa Fernanda Gómez",
        email: "luisa.gomez@fisioterapia.com",
        date: "2024-06-30",
        status: "Aprobado"
    },
];

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
                    Agregar Proveedor Manualmente
                </Button>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Solicitudes de Proveedores</CardTitle>
                    <CardDescription>
                        Proveedores que han solicitado unirse a la red de Movilo.club.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nombre / Empresa</TableHead>
                                <TableHead>Contacto</TableHead>
                                <TableHead>Fecha de Solicitud</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className="text-right">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockProviders.map((provider) => (
                                <TableRow key={provider.email}>
                                    <TableCell className="font-medium">
                                        <div>{provider.name}</div>
                                        <div className="text-xs text-muted-foreground">{provider.email}</div>
                                    </TableCell>
                                    <TableCell>{provider.contact}</TableCell>
                                    <TableCell>{provider.date}</TableCell>
                                    <TableCell>
                                        <Badge variant={provider.status === 'Aprobado' ? 'default' : 'secondary'} 
                                            className={provider.status === 'Aprobado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                                            {provider.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {provider.status === 'Pendiente' ? (
                                            <div className="flex gap-2 justify-end">
                                                <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700">
                                                    <Check className="h-4 w-4 mr-1" />
                                                    Aprobar
                                                </Button>
                                                <Button variant="outline" size="sm" className="border-red-500 text-red-600 hover:bg-red-50 hover:text-red-700">
                                                    <X className="h-4 w-4 mr-1" />
                                                    Rechazar
                                                </Button>
                                            </div>
                                        ) : (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                                                    <DropdownMenuItem>Desactivar</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
