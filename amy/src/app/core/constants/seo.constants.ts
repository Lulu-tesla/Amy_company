/**
 * ARCHIVO: seo.constants.ts
 *
 * RESPONSABILIDAD:
 * Datos por defecto de SEO para cada página.
 * 
 * DEBE CONTENER:
 * - Configuraciones de SEO estáticas para inyectar en SeoService.
 */
import { SeoConfig } from '../services/seo.service';

export const PAGE_SEO_CONFIG: Record<string, SeoConfig> = {
  home: {
    title: 'Amy Developers — Agencia Digital e Innovación Tecnológica',
    description: 'Transformamos ideas en experiencias digitales excepcionales.'
  },
  about: {
    title: 'Nosotros — Amy Developers',
    description: 'Conoce la historia, misión y visión detrás del equipo de Amy Developers.'
  },
  services: {
    title: 'Servicios — Amy Developers',
    description: 'Nuestros servicios de desarrollo, diseño y marketing digital.'
  }
};
