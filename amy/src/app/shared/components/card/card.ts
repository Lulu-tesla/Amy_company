/**
 * ARCHIVO: card.ts
 *
 * RESPONSABILIDAD:
 * Tarjeta genérica reutilizable para mostrar información de servicios, portfolio, etc.
 */
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div class="card">
      @if (image()) {
        <img [src]="image()" [alt]="title()" class="card-img" />
      }
      <div class="card-content">
        <h3 class="card-title">{{ title() }}</h3>
        <p class="card-desc">{{ description() }}</p>
        <ng-content></ng-content>
      </div>
    </div>
  `,
    styleUrls: ['./card.css']
})
export class Card {
  title = input.required<string>();
  description = input.required<string>();
  image = input<string>();
}
