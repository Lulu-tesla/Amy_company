/**
 * ARCHIVO: navbar.ts
 *
 * RESPONSABILIDAD:
 * Barra de navegación principal de la aplicación.
 * 
 * DEBE CONTENER:
 * - Logo y enlaces de navegación con routerLink.
 * - Manejo del menú móvil.
 */
import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }
}
