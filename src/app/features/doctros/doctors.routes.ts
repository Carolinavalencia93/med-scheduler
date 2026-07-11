import { Routes } from '@angular/router';
import { DoctorListComponent } from './pages/doctor-list-component/doctor-list-component';

export const DOCTORS_ROUTES: Routes = [
  {
    path: '',
    component: DoctorListComponent,
  },
];
