/**
 * ARCHIVO: seo.service.ts
 *
 * RESPONSABILIDAD:
 * Manejar las meta tags y el título de la página dinámicamente.
 * 
 * DEBE CONTENER:
 * - Inyección de Title y Meta de @angular/platform-browser.
 * - Métodos para actualizar title, description y tags de Open Graph.
 *
 * NO DEBE CONTENER:
 * - Lógica de ruteo.
 *
 * MODIFICAR CUANDO:
 * - Se necesiten nuevas meta etiquetas para SEO.
 *
 * EJEMPLO DE USO:
 * seoService.setPageSEO({ title: 'Nosotros', description: 'Historia de Amy' });
 */
import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  setPageSEO(config: SeoConfig): void {
    if (config.title) {
      this.titleService.setTitle(config.title);
      this.metaService.updateTag({ property: 'og:title', content: config.title });
    }
    
    if (config.description) {
      this.metaService.updateTag({ name: 'description', content: config.description });
      this.metaService.updateTag({ property: 'og:description', content: config.description });
    }

    if (config.image) {
      this.metaService.updateTag({ property: 'og:image', content: config.image });
    }

    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }
  }
}
