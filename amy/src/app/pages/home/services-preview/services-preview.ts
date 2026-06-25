import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceData, SERVICES_DATA } from '../../../core/data/services';

@Component({
  selector: 'app-home-services-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-preview.html',
  styleUrls: ['./services-preview.css']
})
export class HomeServicesPreview {
  services = SERVICES_DATA;
  selectedService: ServiceData | null = null;

  openService(service: ServiceData): void {
    this.selectedService = service;
  }

  closeModal(): void {
    this.selectedService = null;
  }
}
