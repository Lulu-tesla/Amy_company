import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'Amy Developers — Agencia Digital'
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About),
        title: 'Nosotros — Amy Developers'
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/services/services.routes').then(m => m.SERVICES_ROUTES)
      },
      {
        path: 'portfolio',
        loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio),
        title: 'Portafolio — Amy Developers'
      },
      {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing').then(m => m.Pricing),
        title: 'Precios — Amy Developers'
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
        title: 'Contacto — Amy Developers'
      },
      {
        path: 'faq',
        loadComponent: () => import('./pages/faq/faq').then(m => m.Faq),
        title: 'Preguntas Frecuentes — Amy Developers'
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    title: 'Página no encontrada — Amy Developers'
  }
];
