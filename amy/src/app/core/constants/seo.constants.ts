import { PageSeoConfig } from '../services/seo.service';

export const PAGE_SEO_CONFIG: Record<string, PageSeoConfig> = {
  home: {
    title: 'AMY COMPANY | Agencia digital en Bolivia',
    description: 'Desarrollo web, ecommerce, branding, UI/UX y marketing digital para negocios que quieren vender mejor.'
  },
  about: {
    title: 'Nosotros | AMY COMPANY',
    description: 'Conoce el enfoque de AMY COMPANY para crear experiencias digitales claras, rapidas y orientadas a resultados.'
  },
  services: {
    title: 'Servicios | AMY COMPANY',
    description: 'Soluciones de desarrollo web, ecommerce, branding, UI/UX, SEO y marketing digital.'
  }
};
