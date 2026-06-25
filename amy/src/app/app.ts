/**
 * ARCHIVO: app.ts
 *
 * RESPONSABILIDAD:
 * Componente raíz de la aplicación Angular.
 * Punto de entrada visual. Solo renderiza el RouterOutlet.
 *
 * DEBE CONTENER:
 * - RouterOutlet para renderizar las rutas.
 * - Estilos globales mínimos del host.
 *
 * NO DEBE CONTENER:
 * - Navbar, Footer u otros layouts (eso lo maneja MainLayout).
 * - Lógica de negocio.
 * - Llamadas HTTP.
 * - Estado global.
 *
 * MODIFICAR CUANDO:
 * - Se necesite un wrapper global (ej: toast notifications).
 * - Se cambie la estrategia de layout raíz.
 */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
