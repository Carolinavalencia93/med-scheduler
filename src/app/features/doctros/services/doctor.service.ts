import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  getDoctors(): Observable<Doctor[]> {
    return of([
      {
        id: 1,
        nombreCompleto: 'Juan Pérez',
        especialidad: 'Cardiología',
        estado: 'Activo',
      },
      {
        id: 2,
        nombreCompleto: 'Ana Gómez',
        especialidad: 'Pediatría',
        estado: 'Activo',
      },
      {
        id: 3,
        nombreCompleto: 'Carlos Díaz',
        especialidad: 'Medicina General',
        estado: 'Inactivo',
      },
      {
        id: 4,
        nombreCompleto: 'Laura Martínez',
        especialidad: 'Dermatología',
        estado: 'Activo',
      },
    ]);
  }
}
