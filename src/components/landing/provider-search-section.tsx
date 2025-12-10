'use client'
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Hospital, FlaskConical, Stethoscope, Pill, Phone } from 'lucide-react';
import { providers, Provider, ProviderType } from '@/lib/data';

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
    { value: 'odontologo', label: 'Odontólogos', icon: ToothIcon },
    { value: 'clinica', label: 'Clínicas', icon: Hospital },
    { value: 'laboratorio', label: 'Laboratorios', icon: FlaskConical },
    { value: 'especialista', label: 'Especialistas', icon: Stethoscope },
    { value: 'farmacia', label: 'Farmacias', icon: Pill },
];

const ProviderList = ({ providers }: { providers: Provider[] }) => {
    if (providers.length === 0) {
        return <p className="text-sm text-muted-foreground p-4 text-center">No hay proveedores disponibles en esta categoría en este momento.</p>;
    }

    return (
        <div className="space-y-4 p-2">
            {providers.map(provider => (
                <Card key={provider.name}>
                    <CardHeader className="pb-4">
                        <CardTitle className="text-base">{provider.name}</CardTitle>
                        <CardDescription>{provider.specialty}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">{provider.address}</p>
                        <a href={`tel:${provider.phone}`} className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                            <Phone className="w-4 h-4" />
                            {provider.phone}
                        </a>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};


export function ProviderSearchSection() {
    const [activeTab, setActiveTab] = useState<ProviderType>('odontologo');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProviders = useMemo(() => {
        return providers.filter(p => p.type === activeTab &&
            (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
             p.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
             p.address.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [activeTab, searchTerm]);

    const mapUrl = useMemo(() => {
        const base = "https://www.google.com/maps/embed/v1/place";
        const key = "AIzaSyCncXdGUy0hm5zLKSjSgtMfnOHWcmKgNi0";
        const caliLocation = "Cali,Valle+del+Cauca";
        
        return `${base}?key=${key}&q=${caliLocation}&zoom=12`;

    }, []);


    const handleSearch = () => {
        // The filtering is already happening in useMemo, but we can have a button
        // for a more explicit user action if needed. For now, it filters as you type.
    };

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
                            <Tabs 
                                defaultValue={activeTab} 
                                onValueChange={(value) => setActiveTab(value as ProviderType)}
                                className="w-full"
                            >
                                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 h-auto">
                                    {providerTypes.map(type => (
                                        <TabsTrigger key={type.value} value={type.value} className="flex flex-col sm:flex-row gap-2 h-auto py-2">
                                            <type.icon className="h-5 w-5" />
                                            {type.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                {providerTypes.map(type => (
                                     <TabsContent key={type.value} value={type.value} className="p-1 max-h-80 overflow-y-auto">
                                        <ProviderList providers={filteredProviders} />
                                     </TabsContent>
                                ))}
                            </Tabs>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input 
                                    placeholder="Buscar por nombre, zona o especialidad..." 
                                    className="pl-10"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                             <Button size="lg" className="w-full" onClick={handleSearch}>
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
