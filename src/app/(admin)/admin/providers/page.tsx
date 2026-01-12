
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Check, X, MoreHorizontal, FileText, Download } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

const mockProviders = [
    {
        name: "Clínica Dental Sonríe S.A.S",
        contact: "Ana María Rodríguez",
        email: "contacto@sonrie.com",
        date: "2024-07-20",
        status: "Pendiente",
        documents: [
            { name: "Cámara de Comercio", url: "#" },
            { name: "RUT", url: "#" },
            { name: "Certificado de Habilitación", url: "#" },
        ],
        nit: "900.123.456-7",
        phone: "300 123 4567"
    },
    {
        name: "Laboratorio Bioclinic",
        contact: "Juan Pérez",
        email: "juan.perez@bioclinic.co",
        date: "2024-07-18",
        status: "Aprobado",
        documents: [],
        nit: "800.987.654-3",
        phone: "310 987 6543"
    },
    {
        name: "vilapaulo",
        contact: "Paulo Vila",
        email: "vilapaulo@gmail.com",
        date: "2024-07-22",
        status: "Pendiente",
        documents: [
            { name: "Cámara de Comercio", url: "#" },
            { name: "RUT", url: "#" },
        ],
        nit: "1.123.456.789-0",
        phone: "320 111 2222"
    },
    {
        name: "Fisioterapia Integral",
        contact: "Luisa Fernanda Gómez",
        email: "luisa.gomez@fisioterapia.com",
        date: "2024-06-30",
        status: "Aprobado",
        documents: [],
        nit: "700.555.888-2",
        phone: "315 444 7777"
    },
];

type Provider = typeof mockProviders[0];

export default function AdminProvidersPage() {
    const [selectedProvider, setSelectedProvider] = React.useState<Provider | null>(null);

    return (
        <Dialog>
            <div className="p-4 sm:p-6 md:p-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-headline">Gestionar Prestadores</h1>
                        <p className="text-muted-foreground">Agrega, edita o elimina prestadores de la red.</p>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Agregar Prestador Manualmente
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Solicitudes de Prestadores</CardTitle>
                        <CardDescription>
                            Prestadores que han solicitado unirse a la red de Movilo.club.
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
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DialogTrigger asChild>
                                                        <DropdownMenuItem onSelect={() => setSelectedProvider(provider)}>
                                                            Ver Detalles
                                                        </DropdownMenuItem>
                                                    </DialogTrigger>
                                                    {provider.status === 'Aprobado' ? (
                                                        <DropdownMenuItem>Desactivar</DropdownMenuItem>
                                                    ) : (
                                                        <>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem className="text-green-600 focus:bg-green-50 focus:text-green-700">
                                                                <Check className="mr-2 h-4 w-4" /> Aprobar
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-700">
                                                                <X className="mr-2 h-4 w-4" /> Rechazar
                                                            </DropdownMenuItem>
                                                        </>
                                                    )}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            {selectedProvider && (
                <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Detalles de la Solicitud</DialogTitle>
                        <DialogDescription>
                            Revisa la información y los documentos del prestador antes de tomar una acción.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                        <div className="space-y-4">
                            <h4 className="font-semibold">Información del Prestador</h4>
                            <div className="text-sm">
                                <p className="text-muted-foreground">Nombre / Empresa</p>
                                <p className="font-medium">{selectedProvider.name}</p>
                            </div>
                            <div className="text-sm">
                                <p className="text-muted-foreground">NIT / Cédula</p>
                                <p className="font-medium">{selectedProvider.nit}</p>
                            </div>
                            <div className="text-sm">
                                <p className="text-muted-foreground">Nombre de Contacto</p>
                                <p className="font-medium">{selectedProvider.contact}</p>
                            </div>
                            <div className="text-sm">
                                <p className="text-muted-foreground">Email</p>
                                <p className="font-medium">{selectedProvider.email}</p>
                            </div>
                            <div className="text-sm">
                                <p className="text-muted-foreground">Teléfono</p>
                                <p className="font-medium">{selectedProvider.phone}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold">Documentos Adjuntos</h4>
                            {selectedProvider.documents.length > 0 ? (
                                <ul className="space-y-2">
                                    {selectedProvider.documents.map((doc) => (
                                        <li key={doc.name}>
                                            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded-md border bg-secondary/50 hover:bg-secondary/80 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                                    <span>{doc.name}</span>
                                                </div>
                                                <Download className="h-4 w-4 text-muted-foreground" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-muted-foreground">No se adjuntaron documentos.</p>
                            )}
                        </div>
                    </div>
                </DialogContent>
            )}
        </Dialog>
    );
}
