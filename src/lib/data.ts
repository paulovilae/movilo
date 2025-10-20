
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
    price: '$69.900',
    priceDetails: 'COP / año',
    icon: User,
    benefits: [
      'Descuentos del 5% al 20% en red de servicios especializados (consulta, ayudas dx y procedimientos quirúrgicos).',
      'Descuentos del 5% al 20% en servicios veterinarios en Red Aliada (consultas, ayudas DX, Hospitalización y cirugías).',
      'Descuentos en aliados estratégicos (restaurantes, cines, comercio, recreación y cultura).',
      'Inclusión de una mascota por $29.900. Mascota adicional por $19.900.',
    ],
    cta: 'Empezar ahora',
  },
  {
    name: 'Plan Pareja',
    price: '$119.800',
    priceDetails: 'COP / año',
    icon: UserRoundPlus,
    benefits: [
      'Todos los beneficios del Plan Individual para 2 personas.',
      'Descuentos del 5% al 20% en red de servicios especializados.',
      'Descuentos del 5% al 20% en servicios veterinarios.',
      'Inclusión de una mascota por $29.900. Mascota adicional por $19.900.',
    ],
    cta: 'Elegir Plan Pareja',
    popular: true,
  },
  {
    name: 'Plan Familia',
    price: '$219.800',
    priceDetails: 'COP / año',
    icon: Users,
    benefits: [
      'Cubre hasta 4 personas y 1 mascota.',
      'Descuentos del 5% al 20% en toda la red de servicios.',
      'Persona adicional por $44.900.',
      'Mascota adicional por $19.900.',
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
      'Una vez te afilies, recibirás un carné digital. Simplemente preséntalo en cualquiera de nuestros proveedores afiliados para recibir el descuento acordado en el momento de pagar por el servicio.',
  },
  {
    question: '¿Hay algún período de espera para usar los beneficios?',
    answer:
      'No, puedes empezar a usar tus beneficios inmediatamente después de que tu afiliación sea procesada y recibas tu carné digital. No hay períodos de carencia ni preexistencias.',
  },
  {
    question: '¿Puedo cancelar mi membresía en cualquier momento?',
    answer:
      'Sí, puedes cancelar tu membresía cuando quieras. La cancelación será efectiva al final de tu ciclo de facturación actual.',
  },
  {
    question: '¿Qué diferencia hay entre los planes?',
    answer:
      'La principal diferencia es la cantidad de personas que cubre cada plan. El Plan Individual es para una persona, el Plan Pareja para dos y el Plan Familia para hasta cuatro personas del mismo núcleo familiar.',
  },
];

export type Provider = {
  name: string;
  specialty: string;
  address: string;
  phone: string;
  type: 'odontologo' | 'clinica' | 'laboratorio' | 'especialista' | 'farmacia';
  location: {
    lat: number;
    lng: number;
  };
};

export const providers: Provider[] = [
  {
    name: "Sonrisa Perfecta",
    specialty: "Odontología General y Estética",
    address: "Cl. 9 #48-51, Cali, Valle del Cauca",
    phone: "(602) 555-1234",
    type: "odontologo",
    location: { lat: 3.428, lng: -76.531 }
  },
  {
    name: "Clínica Dental Sonríe",
    specialty: "Ortodoncia y Endodoncia",
    address: "Cra. 100 #5-169, Cali, Valle del Cauca",
    phone: "(602) 555-5678",
    type: "odontologo",
    location: { lat: 3.373, lng: -76.534 }
  },
  {
    name: "Centro Odontológico El Cedro",
    specialty: "Implantología y Periodoncia",
    address: "Av. 6 Nte. #28N-10, Cali, Valle del Cauca",
    phone: "(602) 555-8765",
    type: "odontologo",
    location: { lat: 3.473, lng: -76.533 }
  },
];
