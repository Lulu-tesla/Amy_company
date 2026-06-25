/**
 * ARCHIVO: loader.ts
 *
 * RESPONSABILIDAD:
 * Mostrar indicadores de carga (spinners, skeletons).
 */
import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [NgClass],
  template: `
    <div [ngClass]="['loader', 'loader-' + type(), 'loader-' + size()]"></div>
  `,
    styleUrls: ['./loader.css']
})
export class Loader {
  size = input<'sm' | 'md' | 'lg'>('md');
  type = input<'spinner' | 'skeleton'>('spinner');
}
