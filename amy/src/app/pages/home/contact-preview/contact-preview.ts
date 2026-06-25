import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-contact-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact-preview.html',
  styleUrls: ['./contact-preview.css']
})
export class HomeContactPreview {
}
