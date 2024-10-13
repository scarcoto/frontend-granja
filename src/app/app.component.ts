import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduccionHuevosFormComponent } from './produccion-huevos-form/produccion-huevos-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProduccionHuevosFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-granja';
}
