import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModulesModule } from './modules/modules.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ModulesModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial1';
}
