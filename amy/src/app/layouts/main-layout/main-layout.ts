/**
 * ARCHIVO: main-layout.ts
 *
 * RESPONSABILIDAD:
 * Envolver las páginas de la aplicación con la navegación (Navbar) y pie de página (Footer).
 * 
 * DEBE CONTENER:
 * - <app-navbar> y <app-footer>.
 * - <router-outlet> para el contenido principal.
 *
 * NO DEBE CONTENER:
 * - Lógica de negocio específica de una página.
 */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {}
