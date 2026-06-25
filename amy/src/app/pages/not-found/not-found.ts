import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="hero-section">
      <div class="container section-head center">
        <span class="section-kicker">404</span>
        <h1>Pagina no encontrada.</h1>
        <p class="lead">El enlace puede haber cambiado o la pagina ya no existe.</p>
        <div class="button-row" style="justify-content:center">
          <a routerLink="/" class="btn primary">Volver al inicio</a>
          <a routerLink="/contact" class="btn">Contactar</a>
        </div>
      </div>
    </section>
  `
})
export class NotFound {}
