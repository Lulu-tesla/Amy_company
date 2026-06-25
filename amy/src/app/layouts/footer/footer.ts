/**
 * ARCHIVO: footer.ts
 * COMPONENTE: FooterComponent
 * PROYECTO: Amy Company — Angular v22
 *
 * Angular v22 — standalone component, NO NgModules.
 * Convención de archivos plana: footer.html / footer.css / footer.ts
 */

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Mail,
  Phone,
  ArrowRight,
  MessageCircle,
  type LucideIconData,
} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
  ],
  templateUrl: './footer.html',
  styleUrls:   ['./footer.css'],
})
export class FooterComponent implements OnInit {

  /* ── Año actual para el copyright ── */
  currentYear!: number;

  /* ── Iconos Lucide expuestos al template ── */
  readonly Instagram:      LucideIconData = Instagram;
  readonly Linkedin:       LucideIconData = Linkedin;
  readonly Facebook:       LucideIconData = Facebook;
  readonly Twitter:        LucideIconData = Twitter;
  readonly Mail:           LucideIconData = Mail;
  readonly Phone:          LucideIconData = Phone;
  readonly ArrowRight:     LucideIconData = ArrowRight;
  readonly MessageCircle:  LucideIconData = MessageCircle;

  /* ──────────────────────────────────────────────────
     Lifecycle
  ────────────────────────────────────────────────── */
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
