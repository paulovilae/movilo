
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AppointmentsPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Citas Programadas</h1>
                <p className="text-muted-foreground">Revisa y gestiona tus próximas citas médicas.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Mis Citas</CardTitle>
                    <CardDescription>
                        Aquí aparecerán tus próximas citas agendadas a través de la plataforma.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Actualmente no tienes citas programadas.</p>
                </CardContent>
            </Card>
        </div>
    );
}
