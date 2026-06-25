export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  modalTitle: string;
  modalDetails: string[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: 'web-development',
    title: 'Desarrollo Web',
    subtitle: 'Presencia profesional y velocidad real',
    description: 'Sitios corporativos, landing pages y aplicaciones front-end que convierten y se escalan sin perder rendimiento.',
    features: [
      'Arquitectura UX orientada a ventas',
      'Responsive 320px a 1440px',
      'SEO técnico básico incluido',
    ],
    image: 'assets/images/services/web-development.jpg',
    modalTitle: 'Desarrollo Web a medida',
    modalDetails: [
      'Diseño visual alineado con tu marca y objetivo comercial.',
      'Implementación rápida con foco en rendimiento y accesibilidad.',
      'Integración con formularios, WhatsApp y herramientas de seguimiento.',
    ]
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    subtitle: 'Tiendas online que venden sin fricción',
    description: 'Catálogos claros, flujo de compra optimizado y estructuras pensadas para clientes móviles y tráfico digital.',
    features: [
      'Checkout simple y confiable',
      'Fichas de producto orientadas a la conversión',
      'Integración con pasarelas y contacto directo',
    ],
    image: 'assets/images/services/ecommerce.jpg',
    modalTitle: 'Tiendas Online optimizadas',
    modalDetails: [
      'Arquitectura de catálogo con prioridades de venta.',
      'Experiencia móvil fluida y rápida en todo el proceso.',
      'Mensajes de confianza, urgencia y beneficios claros.',
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX',
    subtitle: 'Experiencias intuitivas y memorables',
    description: 'Diseño estratégico que reduce dudas, guía la atención y hace que el usuario avance hacia el contacto o la compra.',
    features: [
      'Mapas de experiencia y prototipos navegables',
      'Sistemas visuales coherentes y escalables',
      'Foco en accesibilidad y usabilidad real',
    ],
    image: 'assets/images/services/ui-ux-design.jpg',
    modalTitle: 'Diseño UI/UX estratégico',
    modalDetails: [
      'Investigación de usuario y estructura de contenidos.',
      'Diseño de pantallas con prioridad en conversión.',
      'Guías visuales para mantener coherencia en el crecimiento.',
    ]
  },
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    subtitle: 'Tráfico con intención y resultados medibles',
    description: 'SEO, campañas y contenido que trabajan juntos para atraer clientes y generar leads reales.',
    features: [
      'Optimización de SEO on-page y velocidad',
      'Estrategia de contenido para captación',
      'Seguimiento básico de resultados',
    ],
    image: 'assets/images/services/marketing-digital.jpg',
    modalTitle: 'Marketing Digital efectivo',
    modalDetails: [
      'Estrategia para atraer audiencias que compran.',
      'Campañas con foco en retorno y mensajes claros.',
      'Medición de resultados para decisiones futuras.',
    ]
  }
];
