import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';

interface HeroStat {
  title: string;
  value: number;
  suffix: string;
  display: string;
}

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HomeHero implements AfterViewInit, OnDestroy {
  @ViewChild('heroCanvas', { static: true }) private heroCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('typewriterText', { static: true }) private typewriterText!: ElementRef<HTMLSpanElement>;

  readonly headlinePhrases = [
    'Diseño que convierte.',
    'Webs rápidas y seguras.',
    'Experiencias digitales memorables.'
  ];

  readonly stats: HeroStat[] = [
    { title: 'Objetivo Lighthouse', value: 95, suffix: '+', display: '0+' },
    { title: 'Primer prototipo', value: 7, suffix: ' días', display: '0 días' },
    { title: 'Responsive total', value: 100, suffix: '%', display: '0%' }
  ];

  readonly features = [
    {
      num: '01',
      title: 'Estrategia',
      desc: 'Auditoría digital, definición de objetivos y hoja de ruta comercial clara.'
    },
    {
      num: '02',
      title: 'Diseño premium',
      desc: 'Interfaces de alta conversión diseñadas con sistemas visuales sólidos.'
    },
    {
      num: '03',
      title: 'Desarrollo rápido',
      desc: 'Stack moderno, código limpio y primer prototipo en menos de 7 días.'
    },
    {
      num: '04',
      title: 'SEO & velocidad',
      desc: 'Lighthouse 95+, Core Web Vitals optimizados y posicionamiento real.'
    },
    {
      num: '05',
      title: 'Soporte continuo',
      desc: 'Mantenimiento, actualizaciones y escalabilidad sin costo adicional.'
    }
  ];

  /** Posiciones X de las marcas de la regla SVG */
  readonly waveTicks: number[] = Array.from({ length: 31 }, (_, i) => i * 20);

  private canvasContext!: CanvasRenderingContext2D | null;
  private animationFrameId: number | null = null;
  private matrixDrops: number[] = [];
  private matrixColumns = 0;
  private readonly matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$%&*#';
  private currentPhraseIndex = 0;
  private typewriterIndex = 0;
  private typewriterTimer: number | null = null;

  ngAfterViewInit(): void {
    this.initializeCanvas();
    this.startMatrixAnimation();
    this.startTypewriter();
    this.animateCounters();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.typewriterTimer !== null) {
      clearTimeout(this.typewriterTimer);
    }
  }

  private initializeCanvas(): void {
    const canvas = this.heroCanvas.nativeElement;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * ratio;
    canvas.height = canvas.clientHeight * ratio;
    this.canvasContext = canvas.getContext('2d');

    if (!this.canvasContext) {
      return;
    }

    this.canvasContext.scale(ratio, ratio);
    this.matrixColumns = Math.floor(canvas.clientWidth / 18);
    this.matrixDrops = Array(this.matrixColumns).fill(0);
  }

  private startMatrixAnimation(): void {
    const draw = () => {
      const ctx = this.canvasContext;
      const canvas = this.heroCanvas.nativeElement;
      if (!ctx) {
        return;
      }

      ctx.fillStyle = 'rgba(10, 22, 40, 0.15)';
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.fillStyle = 'rgba(45, 212, 191, 0.85)';
      ctx.font = '18px Inter, system-ui, sans-serif';
      ctx.textBaseline = 'top';

      this.matrixDrops.forEach((y, index) => {
        const text = this.matrixChars.charAt(Math.floor(Math.random() * this.matrixChars.length));
        const x = index * 18;
        ctx.fillText(text, x, y * 18);
        this.matrixDrops[index] = y > 24 + Math.random() * 100 ? 0 : y + 1;
      });

      this.animationFrameId = requestAnimationFrame(draw);
    };

    draw();
  }

  private startTypewriter(): void {
    const write = () => {
      const phrase = this.headlinePhrases[this.currentPhraseIndex];
      const currentText = phrase.slice(0, this.typewriterIndex);
      this.typewriterText.nativeElement.textContent = currentText;

      if (this.typewriterIndex < phrase.length) {
        this.typewriterIndex += 1;
        this.typewriterTimer = window.setTimeout(write, 90);
      } else {
        this.typewriterTimer = window.setTimeout(() => this.eraseTypewriter(), 1300);
      }
    };

    write();
  }

  private eraseTypewriter(): void {
    const phrase = this.headlinePhrases[this.currentPhraseIndex];
    if (this.typewriterIndex > 0) {
      this.typewriterIndex -= 1;
      this.typewriterText.nativeElement.textContent = phrase.slice(0, this.typewriterIndex);
      this.typewriterTimer = window.setTimeout(() => this.eraseTypewriter(), 45);
    } else {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.headlinePhrases.length;
      this.typewriterTimer = window.setTimeout(() => this.startTypewriter(), 220);
    }
  }

  private animateCounters(): void {
    this.stats.forEach((stat, index) => {
      gsap.to(stat, {
        value: stat.value,
        duration: 1.8,
        delay: 0.5 + index * 0.2,
        ease: 'power3.out',
        onUpdate: () => {
          stat.display = `${Math.round(stat.value)}${stat.suffix}`;
        }
      });
    });
  }
}
