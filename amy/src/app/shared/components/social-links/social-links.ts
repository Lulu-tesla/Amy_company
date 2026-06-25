/**
 * ARCHIVO: social-links.ts
 *
 * RESPONSABILIDAD:
 * Renders social media links con iconos.
 */
import { Component, input } from '@angular/core';

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

@Component({
  selector: 'app-social-links',
  imports: [],
  template: `
    <div class="social-container" [style.flexDirection]="direction() === 'vertical' ? 'column' : 'row'">
      @for (link of links(); track link.platform) {
        <a [href]="link.url" target="_blank" rel="noopener noreferrer" class="social-link" [class]="size()">
          {{ link.platform }}
        </a>
      }
    </div>
  `,
  styleUrls: ['./social-links.css']
})
export class SocialLinks {
  links = input.required<SocialLink[]>();
  size = input<'sm' | 'md' | 'lg'>('md');
  direction = input<'horizontal' | 'vertical'>('horizontal');
}
