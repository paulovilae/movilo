
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleUser, Presentation, BadgePercent } from "lucide-react";

const steps = [
    {
      icon: CircleUser,
      title: "Elige tu Plan",
      description: "Selecciona y paga el plan de descuentos que mejor se ajuste a ti, tu pareja o tu familia.",
    },
    {
      icon: Presentation,
      title: "Busca y Visita",
      description: "Encuentra el especialista o servicio que necesitas en nuestra red y presenta tu carné digital.",
    },
    {
      icon: BadgePercent,
      title: "Ahorra al Instante",
      description: "Recibe tu descuento inmediatamente al momento de pagar por el servicio médico.",
    },
];

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Así de fácil es Ahorrar</h2>
                    <p className="text-muted-foreground md:text-lg">
                        En solo tres pasos, estarás disfrutando de los beneficios de Movilo.club.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <Card key={index} className="text-center border-0 shadow-none bg-transparent">
                            <CardHeader className="items-center">
                                <div className="bg-primary/20 text-primary rounded-full p-4 mb-4">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <CardTitle>{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

    