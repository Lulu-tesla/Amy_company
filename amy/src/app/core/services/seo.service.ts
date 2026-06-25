/**
 * ARCHIVO: seo.service.ts
 *
 * RESPONSABILIDAD:
 * Servicio inyectable para gestionar dinámicamente las etiquetas
 * <title>, <meta> y Schema.org JSON-LD para SEO y redes sociales.
 */

import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private document = inject(DOCUMENT);

  // Sufijo global que se añade a cada título de página
  private readonly siteName = ' | AMY COMPANY';

  /**
   * Configura todas las etiquetas SEO de una página a la vez.
   */
  setPageSeo(config: PageSeoConfig) {
    this.setTitle(config.title);
    
    // Meta tags estándar
    this.metaService.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph (Facebook/LinkedIn)
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    if (config.image) {
      this.metaService.updateTag({ property: 'og:image', content: config.image });
    }
    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }
    this.metaService.updateTag({ property: 'og:type', content: config.type || 'website' });

    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    if (config.image) {
      this.metaService.updateTag({ name: 'twitter:image', content: config.image });
    }
  }

  /**
   * Establece el título de la página añadiendo el nombre del sitio.
   */
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle + this.siteName);
  }

  /**
   * Inyecta esquema de datos estructurados JSON-LD en el <head>
   */
  setJsonLd(schema: any) {
    // Eliminar esquema anterior si existe
    const existingScript = this.document.head.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      this.document.head.removeChild(existingScript);
    }

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  /**
   * Configura el schema por defecto para LocalBusiness/Organization
   */
  setOrganizationSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "AMY COMPANY",
      "url": "https://amydevelopers.com",
      "logo": "https://amydevelopers.com/assets/images/logo.png",
      "email": "amycompany@gmail.com",
      "telephone": "+59174541365",
      "description": "Agencia digital transformando ideas en experiencias digitales excepcionales para impulsar el crecimiento de tu negocio.",
      "sameAs": [
        "https://www.facebook.com/amycompany",
        "https://www.instagram.com/amycompany"
      ]
    };
    this.setJsonLd(schema);
  }
}
