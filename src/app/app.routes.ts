import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registeration } from './components/registeration/registeration';
import { RegisterProperty } from './components/register-property/register-property';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Registeration },
  { path: 'register-property', component: RegisterProperty },
  { path: '**', redirectTo: 'login' },
];
