import { Truck, MapPin, Package, Building2, ShieldCheck, Warehouse, Phone, CalendarCheck, CheckCircle2 ,Trash2, Hammer} from 'lucide-react';
import { FaqItem, ServiceItem, StepItem } from './types';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Cómo funciona', href: '#how-it-works' },
  { name: 'Preguntas frecuentes', href: '#faq' }, // Using FAQ as value/about section proxy based on structure
  //{ name: 'Contacto', href: '#footer' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Mudanzas Locales',
    description: 'Gestión integral de traslados dentro de la ciudad y provincia.',
    icon: Truck,
  },
  {
    id: 2,
    title: 'Mudanzas Nacionales',
    description: 'Logística coordinada para larga distancia en toda la península.',
    icon: MapPin,
  },
  {
    id: 3,
    title: 'Mudanzas de Oficina',
    description: 'Traslados corporativos minimizando el tiempo de inactividad.',
    icon: Building2,
  },
  {
    id: 4,
    title: 'Portes Express',
    description: 'Transporte ágil de objetos voluminosos o cargas pequeñas.',
    icon: Package,
  },
   {
    id: 5,
    title: 'Vaciado de Locales',
    description: 'Desalojo integral y limpieza de espacios para dejarlos listos para su uso.',
    icon: Trash2,
  },
  {
    id: 6,
    title: 'Montaje de Muebles',
    description: 'Ensamblaje profesional, seguro y eficiente de todo tipo de mobiliario.',
    icon: Hammer,
  },
  {
    id: 7,
    title: 'Embalaje y Protección',
    description: 'Materiales de alta resistencia y técnica profesional de empaquetado.',
    icon: ShieldCheck,
  },
  {
    id: 8,
    title: 'Almacenamiento',
    description: 'Soluciones temporales de guardamuebles seguros y vigilados.',
    icon: Warehouse,
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    id: 1,
    title: 'Contacta y planifica',
    description: 'Cuéntanos qué necesitas mover. Te asesoramos y cerramos fecha.',
    icon: Phone,
  },
  {
    id: 2,
    title: 'Preparación y transporte',
    description: 'Nos encargamos de la carga, protección y traslado seguro.',
    icon: CalendarCheck,
  },
  {
    id: 3,
    title: 'Entrega y cierre',
    description: 'Descarga en destino, montaje básico y revisión final.',
    icon: CheckCircle2,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: '¿Cuánto tarda una mudanza?',
    answer: 'Depende del volumen. Una mudanza local estándar suele completarse en un día (6-8 horas).',
  },
  {
    id: 2,
    question: '¿Cómo calculáis el precio?',
    answer: 'Basado en volumen (m³), distancia, accesibilidad (ascensor, parking) y servicios extra contratados.',
  },
  {
    id: 3,
    question: '¿Incluye embalaje y materiales?',
    answer: 'Ofrecemos servicio completo con embalaje o solo transporte. Tú decides el nivel de servicio.',
  },
  {
    id: 4,
    question: '¿Qué zonas cubrís?',
    answer: 'Principalmente Navarra y comunidades limítrofes, con servicio nacional bajo presupuesto.',
  },
  {
    id: 5,
    question: '¿Con cuánta antelación debo reservar?',
    answer: 'Recomendamos al menos 15 días de antelación, especialmente para finales de mes y viernes.',
  },
];

// Placeholder for the video. In a real scenario, this would be a local import or asset URL.
// Using a generic driving/road video for demonstration.
export const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/2883395/2883395-sd_640_360_24fps.mp4";
