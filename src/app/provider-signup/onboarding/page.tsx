
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function OnboardingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/50 py-16 md:py-24">
                <div className="container px-4 md:px-6">
                    <Card className="max-w-3xl mx-auto">
                        <CardHeader>
                            <CardTitle className="text-3xl">Formulario de Pre-Inscripción</CardTitle>
                            <CardDescription>
                                Completa la siguiente información para iniciar tu proceso como prestador en Movilo.club. Un asesor te contactará para finalizar el proceso.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="company-name">Nombre de la Empresa o Profesional</Label>
                                <Input id="company-name" placeholder="Ej: Clínica Dental Sonríe S.A.S" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="nit">NIT o Cédula</Label>
                                <Input id="nit" placeholder="Ej: 900.123.456-7" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contact-name">Nombre del Contacto</Label>
                                <Input id="contact-name" placeholder="Ej: Ana María Rodríguez" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email de Contacto</Label>
                                    <Input id="email" type="email" placeholder="ejemplo@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Teléfono de Contacto</Label>
                                    <Input id="phone" type="tel" placeholder="300 123 4567" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Documentos</Label>
                                <p className="text-sm text-muted-foreground">Sube aquí los documentos requeridos. Nuestro equipo los verificará.</p>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="camara-comercio" className="text-sm font-normal">Cámara de Comercio</Label>
                                        <Input id="camara-comercio" type="file" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="rut" className="text-sm font-normal">RUT</Label>
                                        <Input id="rut" type="file" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="certificados" className="text-sm font-normal">Otros Certificados</Label>
                                        <Input id="certificados" type="file" multiple />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="comments">Comentarios Adicionales</Label>
                                <Textarea id="comments" placeholder="Si tienes alguna duda o comentario, déjalo aquí." />
                            </div>
                            <Button size="lg" className="w-full">Enviar Solicitud</Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    )
}
