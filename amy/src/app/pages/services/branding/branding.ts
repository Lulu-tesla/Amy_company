/**
 * ARCHIVO: branding.ts
 *
 * RESPONSABILIDAD:
 * Componente de la página del servicio de Branding & Identidad Visual.
 *
 * DEBE CONTENER:
 * - Hero, características del servicio y CTA.
 *
 * NO DEBE CONTENER:
 * - Lógica de negocio o formularios.
 *
 * MODIFICAR CUANDO:
 * - Se actualicen los servicios de branding ofrecidos.
 *
 * EJEMPLO DE USO:
 * Ruta: /services/branding
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-branding',
  imports: [RouterLink],
  templateUrl: './branding.html',
  styleUrl: './branding.css'
})
export class Branding {}
