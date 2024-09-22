import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ModulesModule } from './modules/modules.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    ModulesModule
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial1';
}
