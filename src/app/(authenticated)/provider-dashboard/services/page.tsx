
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProviderServicesPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold font-headline">Gestionar Servicios</h1>
                    <p className="text-muted-foreground">Define los servicios y descuentos que ofreces a los socios.</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Agregar Servicio
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Agregar Nuevo Servicio</DialogTitle>
                            <DialogDescription>
                                Describe el servicio y el descuento que ofreces a los miembros de Movilo.club.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="service-name" className="text-right">
                                    Servicio
                                </Label>
                                <Input id="service-name" placeholder="Ej: Consulta General" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="service-description" className="text-right">
                                    Descripción
                               
                                </Label>
                                <Textarea id="service-description" placeholder="Breve descripción del servicio" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="service-discount" className="text-right">
                                    Descuento
                                </Label>
                                <Input id="service-discount" type="number" placeholder="Ej: 20" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Guardar Servicio</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
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
