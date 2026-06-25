import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  template: `
    <section class="hero-section">
      <div class="container grid grid-2">
        <div>
          <span class="section-kicker">Nosotros</span>
          <h1>Un equipo digital pequeño, directo y enfocado en resultados.</h1>
          <p class="lead">AMY COMPANY ayuda a empresas, emprendedores y marcas locales a transformar su presencia digital en una herramienta comercial confiable.</p>
          <div class="button-row">
            <a routerLink="/contact" class="btn primary">Trabajemos juntos</a>
            <a routerLink="/portfolio" class="btn">Ver enfoque</a>
          </div>
        </div>
        <div class="card feature-card about-card">
          <h2>Principios</h2>
          <p>Claridad antes que exceso. Rendimiento antes que efectos pesados. Diseño útil antes que decoración. Cada decisión debe ayudar a que el usuario entienda, confíe y actúe.</p>
        </div>
      </div>
    </section>

    <section class="section soft-band">
      <div class="container grid grid-3">
        @for (value of values; track value.title) {
          <article class="card feature-card">
            <span class="icon-badge">{{ value.short }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .about-card {
      align-self: center;
      background: #0f172a;
      color: #fff;
    }
    .about-card p { color: #cbd5e1; }
  `
})
export class About {
  values = [
    { short: '01', title: 'Estrategia primero', text: 'Ordenamos mensajes, publico y objetivos antes de diseñar pantallas.' },
    { short: '02', title: 'Ejecucion limpia', text: 'Construimos interfaces mantenibles, rapidas y coherentes con la marca.' },
    { short: '03', title: 'Medicion continua', text: 'Recomendamos mejoras futuras basadas en datos, no en suposiciones.' }
  ];
}
