
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Hospital, FlaskConical, Stethoscope, Pill } from 'lucide-react';

const providerTypes = [
    { value: 'clinics', label: 'Clínicas', icon: Hospital },
    { value: 'labs', label: 'Laboratorios', icon: FlaskConical },
    { value: 'specialists', label: 'Especialistas', icon: Stethoscope },
    { value: 'pharmacies', label: 'Farmacias', icon: Pill },
];

export function ProviderSearchSection() {
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
                            <Tabs defaultValue="specialists" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                                    {providerTypes.map(type => (
                                        <TabsTrigger key={type.value} value={type.value} className="flex flex-col sm:flex-row gap-2 h-auto py-2">
                                            <type.icon className="h-5 w-5" />
                                            {type.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                <TabsContent value="clinics">
                                    <p className="text-sm text-muted-foreground p-4 text-center">Contenido para Clínicas.</p>
                                </TabsContent>
                                <TabsContent value="labs">
                                    <p className="text-sm text-muted-foreground p-4 text-center">Contenido para Laboratorios.</p>
                                </TabsContent>
                                <TabsContent value="specialists">
                                     <p className="text-sm text-muted-foreground p-4 text-center">Contenido para Especialistas.</p>
                                </TabsContent>
                                <TabsContent value="pharmacies">
                                     <p className="text-sm text-muted-foreground p-4 text-center">Contenido para Farmacias.</p>
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254921.9559388363!2d-76.64150428131034!3d3.42055869389336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cfd1b103%3A0x327503796b48a86a!2sCali%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1sen!2sus!4v162283334 Cali, Colombia" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen={false} 
                                loading="lazy"
                                title="Mapa de Cali"
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
