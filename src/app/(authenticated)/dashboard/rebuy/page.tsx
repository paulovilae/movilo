
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

export default function RebuyPage() {
  return (
    <div className="flex items-center justify-center bg-background px-4 py-12">
        <div className="w-full max-w-md space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Renovar Membresía</CardTitle>
                    <CardDescription>
                        Tu membresía <span className="font-bold text-primary">Plan Familiar</span> ha expirado. Renuévala para seguir disfrutando de tus beneficios.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="p-4 border rounded-lg bg-secondary/50">
                        <div className="flex justify-between items-center">
                            <p className="font-medium">Plan Familiar</p>
                            <p className="font-bold">$219.800 <span className="font-normal text-sm text-muted-foreground">COP / año</span></p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full" asChild>
                        <Link href="/buy?plan=Plan%20Familia">Pagar Renovación</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}
