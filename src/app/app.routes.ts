import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registeration } from './components/registeration/registeration';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Registeration },
  { path: '**', redirectTo: 'login' },
];
