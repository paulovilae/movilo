
'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useUser } from "@/firebase";
import { useEffect } from "react";

const loginSchema = z.object({
  email: z.string().email("Por favor, introduce un email válido."),
  password: z.string().min(1, "La contraseña es requerida."),
});

export default function ProviderLoginPage() {
    const router = useRouter();
    const { user, isUserLoading } = useUser();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        if (!isUserLoading && user) {
            router.push('/provider-dashboard');
        }
    }, [user, isUserLoading, router]);

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, values.email, values.password);
            toast({
                title: "¡Bienvenido!",
                description: "Has iniciado sesión correctamente.",
            });
            router.push('/provider-dashboard');
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Error al iniciar sesión",
                description: "Email o contraseña incorrectos. Por favor, intenta de nuevo.",
            });
        }
    }

    if (isUserLoading || user) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          Cargando...
        </div>
      );
    }
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
        <div className="w-full max-w-md space-y-4">
            <div className="flex justify-center">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Portal de Proveedores</CardTitle>
                    <CardDescription>
                        Ingresa a tu cuenta para gestionar tu perfil y servicios.
                    </CardDescription>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardContent className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
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
                                        <div className="flex items-center justify-between">
                                            <FormLabel>Contraseña</FormLabel>
                                            <Link href="#" className="text-sm underline">
                                                ¿Olvidaste tu contraseña?
                                            </Link>
                                        </div>
                                        <FormControl>
                                            <Input type="password" placeholder="••••••••" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <Button type="submit" className="w-full">
                                Ingresar
                            </Button>
                            <div className="text-center text-sm text-muted-foreground">
                                ¿Aún no eres proveedor?{" "}
                                <Link href="/provider-signup" className="underline font-medium text-primary">
                                    Regístrate aquí
                                </Link>
                            </div>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    </div>
  )
}

    