
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgePercent, Hospital, Pill, Stethoscope } from "lucide-react";

const benefits = [
    {
        icon: Stethoscope,
        category: "Consultas con Especialistas",
        discount: "Hasta 20% de descuento",
    },
    {
        icon: Hospital,
        category: "Procedimientos en Clínicas",
        discount: "Hasta 15% de descuento",
    },
    {
        icon: Pill,
        category: "Medicamentos en Farmacias",
        discount: "Hasta 10% de descuento",
    },
    {
        icon: BadgePercent,
        category: "Otros Beneficios",
        discount: "Descuentos en veterinarias, recreación y más.",
    }
]

export default function BenefitsPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Mis Beneficios</h1>
                <p className="text-muted-foreground">Explora todos los descuentos disponibles con tu membresía.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Red de Descuentos</CardTitle>
                    <CardDescription>
                        Ahorra en una amplia gama de servicios médicos y de bienestar para ti y tu familia.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 border rounded-lg bg-secondary/50">
                            <benefit.icon className="w-8 h-8 text-primary mt-1" />
                            <div>
                                <p className="font-semibold">{benefit.category}</p>
                                <p className="text-sm text-green-600 font-medium">{benefit.discount}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
