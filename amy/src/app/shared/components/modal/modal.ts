/**
 * ARCHIVO: modal.ts
 *
 * RESPONSABILIDAD:
 * Ventana modal genérica para confirmaciones, formularios emergentes, etc.
 */
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  template: `
    @if (isOpen()) {
      <div class="modal-backdrop" (click)="close()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h3>{{ title() }}</h3>
            <button class="close-btn" (click)="close()">&times;</button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    }
  `,
  styleUrl: './modal.css'
})
export class Modal {
  isOpen = input<boolean>(false);
  title = input<string>('Modal Title');
  closed = output<void>();

  close() {
    this.closed.emit();
  }
}
