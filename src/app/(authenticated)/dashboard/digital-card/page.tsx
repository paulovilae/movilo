
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/icons/logo";
import { QrCodeIcon } from "@/components/icons/qr-code";
import { Download } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function DigitalCardPage() {
    const cardBgImage = PlaceHolderImages.find(p => p.id === 'digital-card-bg');

    return (
        <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-lg">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold font-headline">Tu Carné Digital</h1>
                    <p className="text-muted-foreground">Preséntalo en nuestros establecimientos afiliados.</p>
                </div>
                
                <Card className="aspect-[1.586/1] w-full max-w-lg rounded-xl overflow-hidden shadow-2xl relative">
                    {cardBgImage && (
                        <Image
                            src={cardBgImage.imageUrl}
                            alt={cardBgImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={cardBgImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />
                    <CardContent className="relative h-full flex flex-col justify-between p-6 text-white">
                        <div className="flex justify-between items-start">
                            <Logo className="text-white" iconClassName="text-white" />
                            <div className="text-right">
                                <p className="font-semibold text-lg">Plan Familiar</p>
                                <p className="text-xs opacity-80">Válido hasta: 30/07/2025</p>
                            </div>
                        </div>

                        <div className="flex items-end justify-between gap-4">
                            <div className="flex-1">
                                <p className="text-sm opacity-80">Miembro</p>
                                <p className="font-bold text-2xl tracking-wider">John Doe</p>
                                <p className="font-mono text-sm opacity-80 tracking-widest">ID: MVM-12345678</p>
                            </div>
                            <div className="bg-white p-2 rounded-md shadow-md">
                                <QrCodeIcon className="w-20 h-20 text-black" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-8 text-center">
                    <Button size="lg">
                        <Download className="mr-2 h-5 w-5" />
                        Descargar Carné
                    </Button>
                </div>
            </div>
        </div>
    );
}

    