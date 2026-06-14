/**
 * ARCHIVO: not-found.ts
 *
 * RESPONSABILIDAD:
 * Componente para la página de error 404.
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section style="padding: 10rem 1rem; text-align: center;">
      <h1 style="font-size: 6rem; margin: 0;">404</h1>
      <p style="font-size: 1.5rem;">Página no encontrada</p>
      <a routerLink="/" style="margin-top: 2rem; display: inline-block;">Volver al inicio</a>
    </section>
  `,
  styles: ``
})
export class NotFound {}
