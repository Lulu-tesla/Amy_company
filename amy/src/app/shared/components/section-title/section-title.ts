/**
 * ARCHIVO: section-title.ts
 *
 * RESPONSABILIDAD:
 * Título de sección estandarizado y reutilizable.
 */
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  template: `
    <div class="title-container" [style.textAlign]="alignment()">
      @if (subtitle()) {
        <span class="subtitle">{{ subtitle() }}</span>
      }
      <h2>{{ title() }}</h2>
      @if (decorated()) {
        <div class="decoration-line" [class.center]="alignment() === 'center'"></div>
      }
    </div>
  `,
  styleUrls: ['./section-title.css']
})
export class SectionTitle {
  title = input.required<string>();
  subtitle = input<string>();
  alignment = input<'left' | 'center' | 'right'>('center');
  decorated = input<boolean>(true);
}
