
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PlanPage() {
    const currentPlan = {
        name: "Plan Familiar",
        price: "$219.800 COP / año",
        renews: "30 de Julio, 2025",
        benefits: [
            "Cubre hasta 4 personas y 1 mascota.",
            "Descuentos del 5% al 20% en toda la red de servicios.",
            "Persona adicional por $44.900.",
            "Mascota adicional por $19.900.",
        ]
    };

    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Mi Plan Actual</h1>
                <p className="text-muted-foreground">Revisa los detalles de tu membresía y gestiona tu plan.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">{currentPlan.name}</CardTitle>
                    <CardDescription>
                        Próxima renovación: <span className="font-semibold text-primary">{currentPlan.renews}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold mb-2">Beneficios incluidos:</h3>
                        <ul className="space-y-3 text-sm">
                          {currentPlan.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-4">
                    <Button asChild>
                        <Link href="/#plans">Cambiar de Plan</Link>
                    </Button>
                    <Button variant="outline">Cancelar Renovación</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
