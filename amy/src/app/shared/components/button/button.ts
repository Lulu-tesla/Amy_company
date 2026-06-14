/**
 * ARCHIVO: button.ts
 *
 * RESPONSABILIDAD:
 * Botón reutilizable con múltiples variantes y tamaños.
 */
import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  template: `
    @if (href()) {
      <a [href]="href()" [ngClass]="buttonClasses()">
        {{ label() }}
        <ng-content></ng-content>
      </a>
    } @else {
      <button [type]="type()" [disabled]="disabled()" [ngClass]="buttonClasses()">
        {{ label() }}
        <ng-content></ng-content>
      </button>
    }
  `,
  styleUrl: './button.css'
})
export class Button {
  label = input.required<string>();
  variant = input<'primary' | 'secondary' | 'outline' | 'ghost'>('primary');
  size = input<'sm' | 'md' | 'lg'>('md');
  href = input<string>();
  type = input<'button' | 'submit'>('button');
  disabled = input<boolean>(false);

  buttonClasses() {
    return `btn btn-${this.variant()} btn-${this.size()} ${this.disabled() ? 'disabled' : ''}`;
  }
}
