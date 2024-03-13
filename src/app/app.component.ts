import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Tarea8Component } from './tarea8/tarea8.component';
import { Tarea9Component } from './tarea9/tarea9.component';
import { Tarea10Component } from './tarea10/tarea10.component';
import { Tarea11Component } from './tarea11/tarea11.component';
import { Tarea12Component } from './tarea12/tarea12.component';
import { Tarea13Component } from './tarea13/tarea13.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Tarea8Component,
    Tarea9Component,
    Tarea10Component,
    Tarea11Component,
    Tarea12Component,
    Tarea13Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task13';
}
