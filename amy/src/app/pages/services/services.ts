import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  template: `
    <section class="hero-section">
      <div class="container">
        <span class="section-kicker">Servicios</span>
        <h1>Soluciones digitales para lanzar, vender y crecer.</h1>
        <p class="lead">Puedes contratar un servicio puntual o un paquete completo de estrategia, diseño, desarrollo y marketing.</p>
      </div>
    </section>

    <section class="section soft-band">
      <div class="container grid grid-3">
        @for (service of services; track service.title) {
          <article class="card feature-card">
            <span class="icon-badge">{{ service.code }}</span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul>
              @for (item of service.includes; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>
        }
      </div>
    </section>

    <section class="section">
      <div class="container card feature-card service-cta">
        <h2>¿No sabes por donde empezar?</h2>
        <p class="lead">Te ayudamos a priorizar lo que tiene mas impacto para tu etapa actual.</p>
        <a routerLink="/contact" class="btn primary">Pedir diagnostico</a>
      </div>
    </section>
  `,
  styles: `
    ul { display: grid; gap: .45rem; margin-top: 1rem; color: #334155; }
    li::before { content: "✓"; margin-right: .45rem; color: #0f766e; font-weight: 900; }
    .service-cta { display: grid; gap: 1rem; justify-items: start; }
  `
})
export class Services {
  services = [
    { code: 'WEB', title: 'Desarrollo web', description: 'Sitios institucionales, landing pages y sistemas front-end modernos.', includes: ['Arquitectura de contenido', 'Responsive 320px a 1920px', 'SEO tecnico inicial'] },
    { code: 'SHOP', title: 'Ecommerce', description: 'Tiendas optimizadas para catalogos claros, confianza y compra movil.', includes: ['Estructura de productos', 'Flujo de compra', 'Integracion de WhatsApp'] },
    { code: 'UX', title: 'Diseño UI/UX', description: 'Interfaces profesionales con jerarquia visual, accesibilidad y CRO.', includes: ['Wireframes', 'Sistema visual', 'Prototipo navegable'] },
    { code: 'SEO', title: 'Marketing digital', description: 'Estrategia para atraer trafico calificado y medir resultados.', includes: ['SEO on-page', 'Campañas', 'Contenido comercial'] },
    { code: 'ID', title: 'Branding', description: 'Identidad y mensajes para que la marca se vea coherente y confiable.', includes: ['Paleta y tipografia', 'Tono de voz', 'Piezas base'] },
    { code: 'AUTO', title: 'Automatizacion', description: 'Flujos de captacion y seguimiento para responder mejor a clientes.', includes: ['Formularios', 'Mensajes de estado', 'Rutas de contacto'] }
  ];
}
