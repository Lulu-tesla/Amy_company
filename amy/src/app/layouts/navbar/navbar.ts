/**
 * ARCHIVO: navbar.ts
 * COMPONENTE: NavbarComponent
 * PROYECTO: Amy Company — Angular v22
 *
 * Standalone component. Sin NgModules.
 * Convención v22: navbar.html / navbar.css / navbar.ts
 */

import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  HostListener,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser }   from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule }  from 'lucide-angular';
import {
  ChevronDown,
  ArrowRight,
  MessageCircle,
  X,
  Globe,
  ShoppingCart,
  Palette,
  TrendingUp,
  Layers,
  BookOpen,
  CreditCard,
  type LucideIconData,
} from 'lucide-angular';

/* ── Interfaz para cada servicio del mega menú ── */
export interface NavService {
  title: string;
  desc:  string;
  path:  string;
  icon:  LucideIconData;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
  ],
  templateUrl: './navbar.html',
  styleUrls:   ['./navbar.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  /* ── Platform ── */
  private readonly platformId = inject(PLATFORM_ID);

  /* ── Iconos Lucide ── */
  readonly ChevronDown:    LucideIconData = ChevronDown;
  readonly ArrowRight:     LucideIconData = ArrowRight;
  readonly MessageCircle:  LucideIconData = MessageCircle;
  readonly X:              LucideIconData = X;
  readonly BookOpen:       LucideIconData = BookOpen;
  readonly CreditCard:     LucideIconData = CreditCard;

  /* ── Estado de UI con signals ── */
  readonly isScrolled       = signal<boolean>(false);
  readonly isMegaMenuOpen   = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);

  /*
   * Timer para el "puente" de hover: evita que el menú se cierre
   * durante el breve instante en que el cursor cruza el gap entre
   * el trigger y el panel del mega menú.
   */
  private _megaMenuTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly HOVER_DELAY_MS = 120;

  /* ── Servicios para el mega menú ── */
  readonly services: NavService[] = [
    {
      title: 'Desarrollo Web',
      desc:  'Sitios y apps a medida, rápidos y escalables.',
      path:  '/services/web-development',
      icon:  Globe,
    },
    {
      title: 'Tiendas Online',
      desc:  'E-commerce que convierte visitas en ventas.',
      path:  '/services/ecommerce',
      icon:  ShoppingCart,
    },
    {
      title: 'Diseño UI/UX',
      desc:  'Interfaces intuitivas y visualmente memorables.',
      path:  '/services/ui-ux-design',
      icon:  Palette,
    },
    {
      title: 'Marketing & SEO',
      desc:  'Visibilidad orgánica y campañas que escalan.',
      path:  '/services/seo',
      icon:  TrendingUp,
    },
    {
      title: 'Branding & Identidad',
      desc:  'Marca cohesiva que genera confianza y reconocimiento.',
      path:  '/services/branding',
      icon:  Layers,
    },
  ];

  /* ──────────────────────────────────────────────────
     LIFECYCLE
  ────────────────────────────────────────────────── */
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 10);
    }
  }

  ngOnDestroy(): void {
    /* Limpiar overflow si el componente se destruye con el menú abierto */
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
    /* Limpiar el timer del puente de hover */
    this._clearMegaTimer();
  }

  /* ──────────────────────────────────────────────────
     SCROLL LISTENER
  ────────────────────────────────────────────────── */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 10);
    }
  }

  /* ──────────────────────────────────────────────────
     MEGA MENÚ — con lógica de hover bridge (debounce)
  ────────────────────────────────────────────────── */

  /** Cancela cualquier cierre pendiente y abre el menú inmediatamente */
  openMegaMenu(): void {
    this._clearMegaTimer();
    this.isMegaMenuOpen.set(true);
  }

  /**
   * Cierra el menú con un pequeño retardo.
   * Si el cursor entra en el panel antes de que expire el timer,
   * el cierre se cancela → "puente" de hover.
   */
  scheduleMegaMenuClose(): void {
    this._clearMegaTimer();
    this._megaMenuTimer = setTimeout(() => {
      this.isMegaMenuOpen.set(false);
    }, this.HOVER_DELAY_MS);
  }

  /** Alias para cerrado inmediato (click en un ítem, ESC, click fuera) */
  closeMegaMenu(): void {
    this._clearMegaTimer();
    this.isMegaMenuOpen.set(false);
  }

  toggleMegaMenu(event?: MouseEvent): void {
    event?.stopPropagation();
    if (this.isMegaMenuOpen()) {
      this.closeMegaMenu();
    } else {
      this.openMegaMenu();
    }
  }

  private _clearMegaTimer(): void {
    if (this._megaMenuTimer !== null) {
      clearTimeout(this._megaMenuTimer);
      this._megaMenuTimer = null;
    }
  }

  /* ──────────────────────────────────────────────────
     MENÚ MÓVIL
  ────────────────────────────────────────────────── */
  toggleMobileMenu(): void {
    const next = !this.isMobileMenuOpen();
    this.isMobileMenuOpen.set(next);

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = next ? 'hidden' : '';
    }

    /* Cerrar mega menú al cerrar el drawer */
    if (!next) {
      this.isMegaMenuOpen.set(false);
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    this.isMegaMenuOpen.set(false);

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  /* ──────────────────────────────────────────────────
     CERRAR CON ESC
  ────────────────────────────────────────────────── */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    } else if (this.isMegaMenuOpen()) {
      this.closeMegaMenu();
    }
  }

  /* ──────────────────────────────────────────────────
     CERRAR MEGA MENÚ AL CLICK FUERA
  ────────────────────────────────────────────────── */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const inMegaWrapper = target.closest('.mega-wrapper');

    if (!inMegaWrapper && this.isMegaMenuOpen()) {
      this.closeMegaMenu();
    }
  }
}
