
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Logo } from "@/components/icons/logo"
import { CheckCircle2 } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
        <div className="w-full max-w-md space-y-4 text-center">
            <div className="flex justify-center">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl mt-4">¡Compra Exitosa!</CardTitle>
                    <CardDescription>
                        Tu membresía de Movilo.club ha sido activada. ¡Bienvenido!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Hemos enviado un correo de confirmación a tu email con los detalles de tu plan y cómo empezar a usar tus beneficios.
                    </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full" asChild>
                        <Link href="/dashboard">Ir a mi Panel</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/">Volver al Inicio</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}
