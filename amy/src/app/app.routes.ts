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
        title: 'AMY COMPANY | Agencia digital en Bolivia'
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About),
        title: 'Nosotros | AMY COMPANY'
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/services/services.routes').then(m => m.SERVICES_ROUTES)
      },
      {
        path: 'portfolio',
        loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio),
        title: 'Portafolio | AMY COMPANY'
      },
      {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing').then(m => m.Pricing),
        title: 'Planes | AMY COMPANY'
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
        title: 'Contacto | AMY COMPANY'
      },
      {
        path: 'faq',
        loadComponent: () => import('./pages/faq/faq').then(m => m.Faq),
        title: 'Preguntas frecuentes | AMY COMPANY'
      },
      {
        path: 'tutorials',
        loadComponent: () => import('./pages/tutorials/tutorials').then(m => m.Tutorials),
        title: 'Tutoriales | AMY COMPANY'
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    title: 'Pagina no encontrada | AMY COMPANY'
  }
];
