
'use client'
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Hospital, FlaskConical, Stethoscope, Pill } from 'lucide-react';
import { providers } from '@/lib/data';

// A "Tooth" icon is not available in lucide-react, so we create a simple SVG.
const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9.34 4.1a2 2 0 0 1 2.37.2l.4.4a2 2 0 0 0 2.82 0l.4-.4a2 2 0 0 1 2.37-.2l.27.1c.4.18.82.43 1.22.75.9.73 1.18 1.93.53 2.85l-1.39 1.94a2 2 0 0 1-1.58.82H9.34a2 2 0 0 1-1.58-.82L6.37 7.9c-.65-.92-.37-2.12.53-2.85.4-.32.82-.57 1.22-.75l.27-.1z"/>
        <path d="M9.34 10.1a2 2 0 0 1 2.37.2l.4.4a2 2 0 0 0 2.82 0l.4-.4a2 2 0 0 1 2.37-.2l.27.1c.4.18.82.43 1.22.75.9.73 1.18 1.93.53 2.85l-1.39 1.94a2 2 0 0 1-1.58.82H9.34a2 2 0 0 1-1.58-.82L6.37 13.9c-.65-.92-.37-2.12.53-2.85.4-.32.82-.57 1.22-.75l.27-.1z"/>
        <path d="M12 16.5v6"/>
        <path d="m15.5 19-3.5-3.5-3.5 3.5"/>
    </svg>
);

const providerTypes = [
    { value: 'clinics', label: 'Clínicas', icon: Hospital },
    { value: 'labs', label: 'Laboratorios', icon: FlaskConical },
    { value: 'specialists', label: 'Especialistas', icon: Stethoscope },
    { value: 'odontologos', label: 'Odontólogos', icon: ToothIcon },
    { value: 'pharmacies', label: 'Farmacias', icon: Pill },
];

export function ProviderSearchSection() {
    const odontologos = providers.filter(p => p.type === 'odontologo');
    
    // Construct the map URL with markers for each provider
    const baseMapUrl = "https://www.google.com/maps/embed/v1/view";
    const center = odontologos.length > 0 ? `${odontologos[0].location.lat},${odontologos[0].location.lng}` : "3.420558,-76.5222";
    
    const markers = odontologos.map(p => `&markers=pin-l-blue%7C${p.location.lat},${p.location.lng}`);

    // Note: The Maps Embed API key is restricted and for demo purposes.
    // You would replace this with your own API key for a production environment.
    const mapUrl = `${baseMapUrl}?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&center=${center}&zoom=12${markers.join('')}`;
    
    return (
        <section id="providers" className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Encuentra tu Proveedor Ideal</h2>
                    <p className="text-muted-foreground md:text-lg">
                        Busca en nuestra amplia red de profesionales y centros de salud en Cali.
                    </p>
                </div>

                <Card className="mt-12 max-w-5xl mx-auto shadow-lg">
                    <CardContent className="p-2 md:p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col space-y-4">
                            <Tabs defaultValue="odontologos" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
                                    {providerTypes.map(type => (
                                        <TabsTrigger key={type.value} value={type.value} className="flex flex-col sm:flex-row gap-2 h-auto py-2">
                                            <type.icon className="h-5 w-5" />
                                            {type.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                <TabsContent value="clinics">
                                    <p className="text-sm text-muted-foreground p-4 text-center">No hay clínicas disponibles en este momento.</p>
                                </TabsContent>
                                <TabsContent value="labs">
                                    <p className="text-sm text-muted-foreground p-4 text-center">No hay laboratorios disponibles en este momento.</p>
                                </TabsContent>
                                <TabsContent value="specialists">
                                     <p className="text-sm text-muted-foreground p-4 text-center">No hay especialistas disponibles en este momento.</p>
                                </TabsContent>
                                <TabsContent value="odontologos" className="p-1 max-h-80 overflow-y-auto">
                                    <div className="space-y-4 p-2">
                                        {odontologos.map(provider => (
                                            <Card key={provider.name}>
                                                <CardHeader>
                                                    <CardTitle className="text-base">{provider.name}</CardTitle>
                                                    <CardDescription>{provider.specialty}</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-muted-foreground">{provider.address}</p>
                                                    <p className="text-sm text-muted-foreground">{provider.phone}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>
                                <TabsContent value="pharmacies">
                                     <p className="text-sm text-muted-foreground p-4 text-center">No hay farmacias disponibles en este momento.</p>
                                </TabsContent>
                            </Tabs>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input placeholder="Buscar por zona o especialidad..." className="pl-10" />
                            </div>
                             <Button size="lg" className="w-full">
                                <Search className="mr-2 h-5 w-5" />
                                Buscar
                            </Button>
                        </div>

                        <div className="relative rounded-lg overflow-hidden min-h-[300px] lg:min-h-full">
                             <iframe 
                                src={mapUrl}
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen={false} 
                                loading="lazy"
                                title="Mapa de proveedores de Movilo.club"
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
