'use client'
import { useState, useMemo } from 'react';
import { useDebounce } from '@/hooks/use-debounce';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Hospital, FlaskConical, Stethoscope, Pill, Phone } from 'lucide-react';
import { providers, Provider, ProviderType } from '@/lib/data';
import { cn } from '@/lib/utils';
// Load Map dynamically to avoid SSR issues with Leaflet
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/ui/map'), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center bg-muted/20">Cargando mapa...</div>
});

// A "Tooth" icon is not available in lucide-react, so we create a simple SVG.
const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9.34 4.1a2 2 0 0 1 2.37.2l.4.4a2 2 0 0 0 2.82 0l.4-.4a2 2 0 0 1 2.37-.2l.27.1c.4.18.82.43 1.22.75.9.73 1.18 1.93.53 2.85l-1.39 1.94a2 2 0 0 1-1.58.82H9.34a2 2 0 0 1-1.58-.82L6.37 7.9c-.65-.92-.37-2.12.53-2.85.4-.32.82-.57 1.22-.75l.27-.1z" />
        <path d="M9.34 10.1a2 2 0 0 1 2.37.2l.4.4a2 2 0 0 0 2.82 0l.4-.4a2 2 0 0 1 2.37-.2l.27.1c.4.18.82.43 1.22.75.9.73 1.18 1.93.53 2.85l-1.39 1.94a2 2 0 0 1-1.58.82H9.34a2 2 0 0 1-1.58-.82L6.37 13.9c-.65-.92-.37-2.12.53-2.85.4-.32.82-.57 1.22-.75l.27-.1z" />
        <path d="M12 16.5v6" />
        <path d="m15.5 19-3.5-3.5-3.5 3.5" />
    </svg>
);

const providerTypes = [
    { value: 'odontologo', label: 'Odontólogos', icon: ToothIcon },
    { value: 'clinica', label: 'Clínicas', icon: Hospital },
    { value: 'laboratorio', label: 'Laboratorios', icon: FlaskConical },
    { value: 'especialista', label: 'Especialistas', icon: Stethoscope },
    { value: 'farmacia', label: 'Farmacias', icon: Pill },
];

const ProviderList = ({ providers, onProviderSelect, selectedProvider }: { providers: Provider[], onProviderSelect: (provider: Provider) => void, selectedProvider: Provider | null }) => {
    if (providers.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-32 h-32 relative">
                    <img
                        src="/Movilo/Memo/memo-sad.png"
                        alt="Memo triste"
                        className="object-contain w-full h-full opacity-80"
                    />
                </div>
                <p className="text-muted-foreground">No encontramos prestadores con esos criterios.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4 p-2">
            {providers.map(provider => (
                <Card
                    key={provider.name}
                    onClick={() => onProviderSelect(provider)}
                    className={cn(
                        "cursor-pointer transition-all",
                        selectedProvider?.name === provider.name ? "border-primary ring-2 ring-primary" : "hover:border-muted-foreground/50"
                    )}
                >
                    <CardHeader className="pb-4">
                        <CardTitle className="text-base">{provider.name}</CardTitle>
                        <CardDescription>{provider.specialty}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">{provider.address}</p>
                        <a href={`tel:${provider.phone}`} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
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
    const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);

    // Debounce search term to prevent excessive re-renders of the map and list
    // This improves performance by waiting for the user to stop typing before filtering
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const filteredProviders = useMemo(() => {
        const providersInTab = providers.filter(p => p.type === activeTab);
        if (!debouncedSearchTerm) {
            return providersInTab;
        }
        return providersInTab.filter(p =>
            p.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            p.specialty.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            p.address.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
    }, [activeTab, debouncedSearchTerm]);

    const mapState = useMemo(() => {
        // Default to Cali
        const defaultCenter = { lat: 3.4516, lng: -76.5320 };
        const defaultZoom = 13;

        if (selectedProvider && selectedProvider.location) {
            return {
                center: selectedProvider.location,
                zoom: 16,
                markers: [{
                    position: selectedProvider.location,
                    title: selectedProvider.name,
                    description: selectedProvider.address
                }]
            };
        }

        // Show all filtered providers on the map
        const markers = filteredProviders
            .filter(p => p.location)
            .map(p => ({
                position: p.location,
                title: p.name,
                description: p.address
            }));

        return {
            center: markers.length > 0 && markers.length < 5 ? markers[0].position : defaultCenter,
            zoom: defaultZoom,
            markers
        };

    }, [selectedProvider, filteredProviders]);


    const handleSearch = () => {
        // The filtering is already happening in useMemo, but we can have a button
        // for a more explicit user action if needed. For now, it filters as you type.
    };

    const handleProviderSelect = (provider: Provider) => {
        setSelectedProvider(provider);
    };

    return (
        <section id="providers" className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Encuentra tu Prestador Ideal</h2>
                    <p className="text-muted-foreground md:text-lg">
                        Busca en nuestra amplia red de profesionales y centros de salud en Cali.
                    </p>
                </div>

                <Card className="mt-12 max-w-5xl mx-auto shadow-lg">
                    <CardContent className="p-2 md:p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col space-y-4">
                            <Tabs
                                defaultValue={activeTab}
                                onValueChange={(value) => {
                                    setActiveTab(value as ProviderType);
                                    setSelectedProvider(null);
                                }}
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
                                    <TabsContent key={type.value} value={type.value} className="p-1 max-h-[400px] overflow-y-auto">
                                        <ProviderList
                                            providers={filteredProviders}
                                            onProviderSelect={handleProviderSelect}
                                            selectedProvider={selectedProvider}
                                        />
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
                        </div>

                        <div className="relative rounded-lg overflow-hidden min-h-[300px] lg:min-h-full">
                            <Map
                                center={mapState.center}
                                zoom={mapState.zoom}
                                markers={mapState.markers}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
