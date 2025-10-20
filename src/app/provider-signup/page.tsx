
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Check, ArrowRight, Building, FileText, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const benefits = [
    "Acceso a una creciente base de socios.",
    "Aumento de la visibilidad de tu práctica o negocio.",
    "Marketing y promoción por parte de Movilo.club.",
    "Sin costos de afiliación ni mensualidades.",
    "Proceso de pago simplificado y garantizado.",
];

const requirements = [
    "Estar legalmente constituido como empresa o profesional independiente en Colombia.",
    "Contar con todos los permisos y licencias sanitarias vigentes.",
    "Tener una trayectoria comprobable en el sector salud.",
    "Ofrecer un descuento preferencial y exclusivo para miembros de Movilo.club.",
];

const documents = [
    "Cámara de Comercio (no mayor a 30 días).",
    "Registro Único Tributario (RUT).",
    "Copia de la cédula del Representante Legal.",
    "Certificados de habilitación de servicios de salud.",
    "Portafolio de servicios con precios al público.",
];

const signupSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
    email: z.string().email("Por favor, introduce un email válido."),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
});


export default function ProviderSignupPage() {
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof signupSchema>) {
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            toast({
                title: "¡Cuenta Creada!",
                description: "Serás redirigido para completar tu perfil.",
            });
            router.push('/provider-signup/onboarding');
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Error al crear la cuenta",
                description: error.message || "Por favor, intenta de nuevo.",
            });
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-background">
                <section className="py-16 md:py-24 text-center bg-secondary/50">
                    <div className="container px-4 md:px-6">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">Únete a Nuestra Red de Proveedores</h1>
                        <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground">
                            Haz crecer tu negocio y llega a miles de nuevos socios formando parte del club de salud más grande de Cali.
                        </p>
                    </div>
                </section>
                
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-3xl font-bold font-headline mb-4">¿Por qué ser parte de Movilo.club?</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Al unirte a nuestra red, te conectamos con una comunidad de usuarios que buscan activamente servicios de salud de calidad a precios asequibles. Nos encargamos del marketing para que tú te concentres en lo que mejor sabes hacer: cuidar de tus socios.
                                    </p>
                                    <ul className="space-y-3">
                                        {benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start">
                                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                                                <span className="text-muted-foreground">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                   <Card>
                                       <CardHeader className="flex flex-row items-center gap-4">
                                            <Building className="w-8 h-8 text-primary"/>
                                            <CardTitle>Requisitos Generales</CardTitle>
                                       </CardHeader>
                                       <CardContent>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {requirements.map((req, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <BadgeCheck className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                                                        <span>{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                       </CardContent>
                                   </Card>
                                   <Card>
                                       <CardHeader className="flex flex-row items-center gap-4">
                                            <FileText className="w-8 h-8 text-primary"/>
                                            <CardTitle>Documentación Requerida</CardTitle>
                                       </CardHeader>
                                       <CardContent>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {documents.map((doc, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <FileText className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                                                        <span>{doc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                       </CardContent>
                                   </Card>
                                </div>
                            </div>
                            
                            <Card className="sticky top-24">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Crea tu Cuenta de Proveedor</CardTitle>
                                    <CardDescription>Completa este formulario para iniciar. Luego podrás subir tus documentos.</CardDescription>
                                </CardHeader>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)}>
                                        <CardContent className="space-y-4">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Nombre del Representante</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Tu nombre completo" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email de Contacto</FormLabel>
                                                        <FormControl>
                                                            <Input type="email" placeholder="tu@email.com" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="password"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Contraseña</FormLabel>
                                                        <FormControl>
                                                            <Input type="password" placeholder="••••••••" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </CardContent>
                                        <CardFooter className="flex-col items-stretch">
                                            <Button type="submit" className="w-full">
                                                Crear Cuenta y Continuar
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                            <p className="text-center text-sm text-muted-foreground mt-4">
                                                ¿Ya tienes una cuenta?{" "}
                                                <Link href="/provider-login" className="underline font-medium text-primary">
                                                    Ingresa aquí
                                                </Link>
                                            </p>
                                        </CardFooter>
                                    </form>
                                </Form>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

    