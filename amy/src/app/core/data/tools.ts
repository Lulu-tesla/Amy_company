export interface ToolData {
  name: string;
  category: string;
  logo: string;
  description: string;
}

export const TOOLS_DATA: ToolData[] = [
  {
    name: 'Angular',
    category: 'Framework',
    logo: 'assets/images/tools/angular.svg',
    description: 'Framework moderno para aplicaciones web rápidas y escalables.'
  },
  {
    name: 'TypeScript',
    category: 'Lenguaje',
    logo: 'assets/images/tools/typescript.svg',
    description: 'Tipado estático para código más claro y mantenible.'
  },
  {
    name: 'GSAP',
    category: 'Animación',
    logo: 'assets/images/tools/gsap.svg',
    description: 'Animaciones fluidas y controladas para interfaces impactantes.'
  },
  {
    name: 'Swiper',
    category: 'UI',
    logo: 'assets/images/tools/swiper.svg',
    description: 'Carruseles responsivos con control táctil y performance alta.'
  },
  {
    name: 'Lucide',
    category: 'Íconos',
    logo: 'assets/images/tools/lucide.svg',
    description: 'Íconos vectoriales ligeros y personalizables para UI moderna.'
  },
  {
    name: 'AOS',
    category: 'Scroll',
    logo: 'assets/images/tools/aos.svg',
    description: 'Revelados animados en scroll para mejorar el recorrido visual.'
  }
];
