/**
 * ARCHIVO: ecommerce.ts
 *
 * RESPONSABILIDAD:
 * Componente de la página del servicio de Tiendas Online / E-commerce.
 *
 * DEBE CONTENER:
 * - Hero, características, tecnologías y CTA.
 *
 * NO DEBE CONTENER:
 * - Lógica de negocio o formularios.
 *
 * MODIFICAR CUANDO:
 * - Se actualicen las soluciones de e-commerce ofrecidas.
 *
 * EJEMPLO DE USO:
 * Ruta: /services/ecommerce
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  imports: [RouterLink],
  templateUrl: './ecommerce.html',
  styleUrl: './ecommerce.css'
})
export class Ecommerce {}
