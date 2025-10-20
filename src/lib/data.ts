
import type { LucideIcon } from 'lucide-react';
import { User, Users, UserRoundPlus } from 'lucide-react';

export type Plan = {
  name: string;
  price: string;
  priceDetails: string;
  icon: LucideIcon;
  benefits: string[];
  cta: string;
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    name: 'Plan Individual',
    price: '$15.000',
    priceDetails: 'COP / mes',
    icon: User,
    benefits: [
      'Acceso a toda la red de proveedores',
      'Tarjeta digital con QR',
      'Descuentos en consultas',
      'Precios especiales en laboratorios',
    ],
    cta: 'Empezar ahora',
  },
  {
    name: 'Plan Pareja',
    price: '$25.000',
    priceDetails: 'COP / mes',
    icon: UserRoundPlus,
    benefits: [
      'Todo lo del Plan Individual para 2 personas',
      'Gestión unificada de la membresía',
      'Soporte prioritario',
      'Beneficios extendidos en farmacias',
    ],
    cta: 'Elegir Plan Pareja',
    popular: true,
  },
  {
    name: 'Plan Familiar',
    price: '$40.000',
    priceDetails: 'COP / mes',
    icon: Users,
    benefits: [
      'Todo lo del Plan Pareja para hasta 4 personas',
      'Perfiles individuales para cada miembro',
      'Descuentos adicionales en pediatría',
      'Acceso a eventos de bienestar',
    ],
    cta: 'Obtener Plan Familiar',
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: '¿Qué es Movilo.club?',
    answer:
      'Movilo.club es un club de descuentos en salud que te da acceso a una amplia red de proveedores médicos en Cali a precios preferenciales. No es un seguro de salud, sino una membresía que te permite ahorrar en tus gastos médicos.',
  },
  {
    question: '¿Cómo funciona la membresía?',
    answer:
      'Una vez te afilies, recibirás una tarjeta digital con un código QR. Simplemente presenta tu tarjeta en cualquiera de nuestros proveedores afiliados para recibir el descuento acordado en el momento de pagar por el servicio.',
  },
  {
    question: '¿Hay algún período de espera para usar los beneficios?',
    answer:
      'No, puedes empezar a usar tus beneficios inmediatamente después de que tu afiliación sea procesada y recibas tu tarjeta digital. No hay períodos de carencia ni preexistencias.',
  },
  {
    question: '¿Puedo cancelar mi membresía en cualquier momento?',
    answer:
      'Sí, puedes cancelar tu membresía en cualquier momento desde tu panel de cliente. La cancelación será efectiva al final de tu ciclo de facturación actual.',
  },
  {
    question: '¿Qué diferencia hay entre los planes?',
    answer:
      'La principal diferencia es la cantidad de personas que cubre cada plan. El Plan Individual es para una persona, el Plan Pareja para dos y el Plan Familiar para hasta cuatro miembros del mismo núcleo familiar.',
  },
];

    