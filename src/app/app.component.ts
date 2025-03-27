import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardSliderComponent } from './dashboard-slider/dashboard-slider.component'; // Ajuste le chemin si nécessaire

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DashboardSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-odc-exo';
}
