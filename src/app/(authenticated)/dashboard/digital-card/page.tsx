'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@/firebase";
import { Download, Wallet, CreditCard, RotateCw, Sparkles, Lock, ArrowRight } from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';
import { useRef, useCallback, useState } from "react";
import { toPng } from 'html-to-image';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function DigitalCardPage() {
    const { user } = useUser();
    const frontCardRef = useRef<HTMLDivElement>(null);
    const backCardRef = useRef<HTMLDivElement>(null);
    const { toast } = useToast();
    const [isFlipped, setIsFlipped] = useState(false);

    const handleDownload = useCallback(async (side: 'front' | 'back') => {
        const ref = side === 'front' ? frontCardRef : backCardRef;
        if (ref.current === null) return;

        try {
            // Force visible backface for capture if needed, though usually distinct refs work best
            const dataUrl = await toPng(ref.current, { cacheBust: true, pixelRatio: 3, skipFonts: true });
            const link = document.createElement('a');
            link.download = `movilo-${side}-${user?.displayName?.split(' ')[0] || 'member'}.png`;
            link.href = dataUrl;
            link.click();
            toast({
                title: "Descarga iniciada",
                description: `Guardando ${side === 'front' ? 'frente' : 'reverso'} del carné.`,
            });
        } catch (err) {
            console.error(err);
            toast({
                variant: "destructive",
                title: "Error",
                description: "No se pudo generar la imagen.",
            });
        }
    }, [user, toast]);

    const qrData = JSON.stringify({
        uid: user?.uid,
        name: user?.displayName,
        email: user?.email,
        validUntil: '2025-07-30',
        plan: 'Plan Familiar'
    });

    return (
        <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center min-h-[calc(100vh-4rem)]">
            <div className="w-full max-w-3xl">
                <div className="mb-8 text-center space-y-2">
                    <h1 className="text-3xl font-bold font-headline">Tu Carné Digital</h1>
                    <p className="text-muted-foreground">Tu llave de acceso a todos los beneficios de Movilo.</p>
                </div>

                {/* Card Container with Perspective */}
                <div className="flex flex-col items-center gap-8" style={{ perspective: '1000px' }}>

                    {/* The Flippable Card */}
                    <div
                        className={cn(
                            "relative w-full max-w-[420px] aspect-[1.586/1] transition-all duration-700 cursor-pointer"
                        )}
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                        }}
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        {/* FRONT FACE */}
                        <div
                            ref={frontCardRef}
                            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-[#0F172A] text-white border border-white/10"
                            style={{
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                                zIndex: isFlipped ? 0 : 1
                            }}
                        >
                            {/* Premium Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />

                            {/* Memo Watermark/Mascot */}
                            <div className="absolute bottom-[-10%] right-[-5%] w-48 h-48 opacity-90 pointer-events-none z-10">
                                <img src="/Movilo/Memo/memo-waving.png" alt="" className="w-full h-full object-contain" />
                            </div>

                            <div className="relative h-full flex flex-col justify-between p-6 z-20">
                                {/* Header: Logo & Brand */}
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-2">
                                        <img src="/Movilo/Logotipo/Imagotipo 1.png" alt="Movilo" className="h-8 w-auto brightness-0 invert" />
                                    </div>
                                    {/* Mastercard Logo */}
                                    <div className="flex relative items-center">
                                        <div className="w-6 h-6 bg-[#EB001B] rounded-full opacity-90" />
                                        <div className="w-6 h-6 bg-[#F79E1B] rounded-full opacity-90 -ml-3" />
                                    </div>
                                </div>

                                {/* Spacer where Chip was */}
                                <div className="h-4 my-2" />

                                {/* Main Text Details */}
                                <div className="space-y-4 mt-auto">
                                    <div className="font-mono text-xl tracking-[0.15em] text-white/90 drop-shadow-md">
                                        {user?.uid ?
                                            `•••• •••• •••• ${user.uid.substring(0, 4)}` :
                                            '•••• •••• •••• 1234'
                                        }
                                    </div>

                                    <div className="flex justify-between items-end pr-32"> {/* Padding right to clear Memo */}
                                        <div>
                                            <p className="text-[10px] text-white/60 uppercase tracking-wider mb-0.5">Titular</p>
                                            <p className="font-bold text-sm sm:text-lg tracking-wide uppercase truncate max-w-[180px]">
                                                {user?.displayName || 'USUARIO MOVILO'}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-white/60 uppercase tracking-wider mb-0.5">Vence</p>
                                            <p className="font-bold text-sm tracking-wide">07/30</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BACK FACE */}
                        <div
                            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-[#1e293b] text-white border border-white/10"
                            style={{
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                zIndex: isFlipped ? 1 : 0
                            }}
                        >
                            {/* Inner container for capture without rotation */}
                            <div ref={backCardRef} className="w-full h-full relative bg-[#1e293b]">
                                <div className="absolute inset-0 bg-[#1e293b]" />

                                {/* Magnetic Stripe */}
                                <div className="w-full h-10 bg-black mt-6 mb-4 relative z-10" />

                                <div className="px-6 relative z-10 flex gap-4 h-[calc(100%-80px)]">
                                    <div className="flex-1 flex flex-col gap-2">
                                        {/* Signature Panel */}
                                        <div className="w-full h-8 bg-white/20 rounded flex items-center justify-end px-2">
                                            <span className="font-mono text-black text-xs italic bg-white px-1">CVC 123</span>
                                        </div>

                                        <div className="mt-auto space-y-1 text-[10px] text-white/60">
                                            <p>Esta tarjeta es personal e intransferible.</p>
                                            <p>Soporte: +57 300 123 4567</p>
                                            <p>www.movilo.club</p>
                                        </div>
                                    </div>

                                    {/* QR Code Area */}
                                    <div className="flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-inner h-fit">
                                        <QRCodeSVG value={qrData} size={100} level="M" />
                                        <p className="text-[8px] text-black mt-1 font-bold">ESCANEAR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-wrap justify-center gap-4 w-full">
                        <Button variant="outline" onClick={() => setIsFlipped(!isFlipped)} className="gap-2">
                            <RotateCw size={16} />
                            Rotar
                        </Button>
                        <Button variant="secondary" onClick={() => handleDownload('front')} className="gap-2">
                            <Download size={16} />
                            Frente
                        </Button>
                        <Button variant="secondary" onClick={() => handleDownload('back')} className="gap-2">
                            <Download size={16} />
                            Reverso
                        </Button>
                    </div>

                    {/* Activation Feature */}
                    <Card className="w-full max-w-lg mt-8 border-dashed border-2 bg-muted/20">
                        <CardContent className="pt-6 flex flex-col sm:flex-row items-center gap-6">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <Sparkles className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-center sm:text-left flex-1">
                                <h3 className="font-bold text-lg mb-1">Activar Funciones de Pago</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Convierte tu carné en un medio de pago directo. Asocia una tarjeta de crédito o recarga saldo.
                                </p>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="w-full sm:w-auto gap-2">
                                            Activación <ArrowRight size={16} />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Configuración de Pagos</DialogTitle>
                                            <DialogDescription>
                                                Elige cómo quieres usar tu tarjeta Movilo para pagar en nuestros aliados.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                                                <div className="bg-green-100 p-2 rounded-full">
                                                    <Wallet className="text-green-600 w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm">Modo Billetera (Prepaid)</h4>
                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        Recarga saldo a tu cuenta Movilo y paga sin exponer tus tarjetas bancarias.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                                                <div className="bg-blue-100 p-2 rounded-full">
                                                    <Lock className="text-blue-600 w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm">Pasarela Directa (Token)</h4>
                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        Asocia tu tarjeta Visa/Mastercard de forma segura. El cobro se hace directamente a tu banco.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <Button variant="ghost" disabled>Próximamente</Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}
