import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  template: `
    <section class="hero-section">
      <div class="container">
        <span class="section-kicker">Portafolio</span>
        <h1>Casos modelo para distintos objetivos de negocio.</h1>
        <p class="lead">Estos formatos representan los tipos de proyectos que AMY COMPANY puede construir y optimizar.</p>
      </div>
    </section>
    <section class="section soft-band">
      <div class="container grid grid-3">
        @for (project of projects; track project.title) {
          <article class="card project-card">
            <div class="project-visual" [style.background]="project.background" aria-hidden="true"></div>
            <div class="feature-card">
              <span class="section-kicker">{{ project.type }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.text }}</p>
            </div>
          </article>
        }
      </div>
    </section>
    <section class="section">
      <div class="container section-head center">
        <h2>Tu proyecto puede ser el siguiente caso medible.</h2>
        <div class="button-row" style="justify-content:center">
          <a routerLink="/contact" class="btn primary">Cotizar ahora</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .project-card { overflow: hidden; }
    .project-visual { min-height: 190px; }
  `
})
export class Portfolio {
  projects = [
    { type: 'Ecommerce', title: 'Catalogo comercial', text: 'Arquitectura para mostrar productos, resolver dudas y llevar al usuario a WhatsApp.', background: 'linear-gradient(135deg,#0f172a,#14b8a6)' },
    { type: 'Servicios', title: 'Landing de conversion', text: 'Mensaje claro, prueba social, beneficios y formulario de contacto sin friccion.', background: 'linear-gradient(135deg,#1e293b,#f59e0b)' },
    { type: 'Marca', title: 'Identidad digital', text: 'Sistema visual consistente para redes, sitio web y piezas comerciales.', background: 'linear-gradient(135deg,#334155,#93c5fd)' }
  ];
}
