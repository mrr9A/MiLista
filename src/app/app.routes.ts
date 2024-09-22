import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecetarioComponent } from './components/recetario/recetario.component';

export const routes: Routes = [
  {path: 'recetario', component: RecetarioComponent},
  {path: '**', component: HomeComponent}
];
