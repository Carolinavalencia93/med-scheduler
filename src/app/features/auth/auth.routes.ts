import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { noAuthGuard } from '../../core/guards/noAuthGuard';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: Login,
    canActivate: [noAuthGuard],
  },
];
