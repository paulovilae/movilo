
'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Logo } from "@/components/icons/logo";

export default function ProviderLoginPage() {
 
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
                  <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center justify-between">
                          <Label htmlFor="password">Contraseña</Label>
                          <Link href="#" className="text-sm underline">
                              ¿Olvidaste tu contraseña?
                          </Link>
                      </div>
                      <Input id="password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full">
                        Ingresar
                    </Button>
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
