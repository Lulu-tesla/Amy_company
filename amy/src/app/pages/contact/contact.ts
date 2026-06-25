import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  template: `
    <section class="hero-section">
      <div class="container grid grid-2">
        <div>
          <span class="section-kicker">Contacto</span>
          <h1>Cuéntanos qué quieres mejorar.</h1>
          <p class="lead">Completa el formulario y te responderemos por email o WhatsApp con los siguientes pasos.</p>
          <div class="contact-list">
            <a href="mailto:amycompany@gmail.com">amycompany@gmail.com</a>
            <a href="https://wa.me/59174541365" target="_blank" rel="noopener">WhatsApp +591 7454 1365</a>
          </div>
        </div>

        <form class="card feature-card" [formGroup]="form" (ngSubmit)="submit()" novalidate>
          @if (submitted()) {
            <div class="success-box" role="status">Solicitud lista. Puedes enviarla por WhatsApp o email y te responderemos pronto.</div>
          }

          <div class="field">
            <label for="name">Nombre</label>
            <input id="name" type="text" formControlName="name" autocomplete="name" aria-describedby="name-error">
            @if (showError('name')) {
              <span id="name-error" class="error-text">Ingresa tu nombre.</span>
            }
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input id="email" type="email" formControlName="email" autocomplete="email" aria-describedby="email-error">
            @if (showError('email')) {
              <span id="email-error" class="error-text">Ingresa un email valido.</span>
            }
          </div>

          <div class="field">
            <label for="phone">WhatsApp</label>
            <input id="phone" type="tel" formControlName="phone" autocomplete="tel" placeholder="+591 7454 1365" aria-describedby="phone-error">
            @if (showError('phone')) {
              <span id="phone-error" class="error-text">Ingresa un numero de contacto.</span>
            }
          </div>

          <div class="field">
            <label for="service">Servicio de interes</label>
            <select id="service" formControlName="service">
              <option value="">Selecciona una opcion</option>
              <option>Desarrollo web</option>
              <option>Ecommerce</option>
              <option>Branding</option>
              <option>Marketing digital</option>
              <option>Auditoria y optimizacion</option>
            </select>
          </div>

          <div class="field">
            <label for="message">Mensaje</label>
            <textarea id="message" formControlName="message" rows="5" aria-describedby="message-error"></textarea>
            @if (showError('message')) {
              <span id="message-error" class="error-text">Cuéntanos al menos 20 caracteres sobre el proyecto.</span>
            }
          </div>

          <button class="btn primary" type="submit">Enviar solicitud</button>
        </form>
      </div>
    </section>
  `,
  styles: `
    .contact-list {
      display: grid;
      gap: .75rem;
      margin-top: 1.5rem;
    }
    .contact-list a {
      width: fit-content;
      min-height: 44px;
      display: inline-flex;
      align-items: center;
      padding: 0 .9rem;
      border: 1px solid #cbd5e1;
      border-radius: .5rem;
      font-weight: 800;
    }
  `
})
export class Contact {
  private fb = inject(FormBuilder);
  submitted = signal(false);
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    service: [''],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  showError(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    this.submitted.set(false);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.set(true);
    this.form.reset();
  }
}
