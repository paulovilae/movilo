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
import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useUser, useAuth } from "@/firebase";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { initiateGoogleSignIn } from "@/firebase/auth";

const loginSchema = z.object({
  email: z.string().email("Por favor, introduce un email válido."),
  password: z.string().min(1, "La contraseña es requerida."),
});

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.61-3.317-11.28-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.999,35.536,44,30.025,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);

export default function ProviderLoginPage() {
    const router = useRouter();
    const { user, isUserLoading } = useUser();
    const auth = useAuth();
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

    const handleGoogleSignIn = () => {
        initiateGoogleSignIn(auth);
    };

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
                
                <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
                        <GoogleIcon className="mr-2" />
                        Ingresar con Google
                    </Button>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                            O continuar con email
                            </span>
                        </div>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                             <Button type="submit" className="w-full">
                                Ingresar
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <div className="text-center text-sm text-muted-foreground">
                        ¿Aún no eres proveedor?{" "}
                        <Link href="/provider-signup" className="underline font-medium text-primary">
                            Regístrate aquí
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}