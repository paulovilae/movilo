
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminUsersPage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Gestionar Usuarios</h1>
                <p className="text-muted-foreground">Busca, visualiza y gestiona los usuarios de la plataforma.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Lista de Usuarios</CardTitle>
                    <CardDescription>
                        Aquí aparecerá la lista de todos los usuarios registrados.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Actualmente no hay usuarios para mostrar.</p>
                </CardContent>
            </Card>
        </div>
    );
}
