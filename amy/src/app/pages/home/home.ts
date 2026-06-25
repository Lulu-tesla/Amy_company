import { Component } from '@angular/core';
import { HomeContactPreview } from './contact-preview/contact-preview';
import { HomeFaqPreview } from './faq-preview/faq-preview';
import { HomeHero } from './hero/hero';
import { HomePortfolioPreview } from './portfolio-preview/portfolio-preview';
import { HomeProcessPreview } from './process-preview/process-preview';
import { HomeServicesPreview } from './services-preview/services-preview';
import { HomeStatsPreview } from './stats-preview/stats-preview';
import { HomeTestimonialsPreview } from './testimonials-preview/testimonials-preview';
import { HomeWhyUs } from './why-us/why-us';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHero,
    HomeWhyUs,
    HomeServicesPreview,
    HomeProcessPreview,
    HomePortfolioPreview,
    HomeFaqPreview,
    HomeStatsPreview,
    HomeTestimonialsPreview,
    HomeContactPreview
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
