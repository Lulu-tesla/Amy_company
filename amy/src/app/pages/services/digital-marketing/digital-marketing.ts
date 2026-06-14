/**
 * ARCHIVO: digital-marketing.ts
 *
 * RESPONSABILIDAD:
 * Componente de la página del servicio de Marketing Digital.
 *
 * DEBE CONTENER:
 * - Hero, estrategias, herramientas y CTA.
 *
 * NO DEBE CONTENER:
 * - Lógica de negocio o formularios.
 *
 * MODIFICAR CUANDO:
 * - Se actualicen las estrategias de marketing ofrecidas.
 *
 * EJEMPLO DE USO:
 * Ruta: /services/digital-marketing
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-digital-marketing',
  imports: [RouterLink],
  templateUrl: './digital-marketing.html',
  styleUrl: './digital-marketing.css'
})
export class DigitalMarketing {}
