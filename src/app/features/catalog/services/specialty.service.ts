import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Specialty } from '../models/specialty.model';

@Injectable({
  providedIn: 'root',
})
export class SpecialtyService {
  getSpecialties(): Observable<Specialty[]> {
    return of([
      { id: 1, nombre: 'Cardiología' },
      { id: 2, nombre: 'Pediatría' },
      { id: 3, nombre: 'Dermatología' },
      { id: 4, nombre: 'Neurología' },
      { id: 5, nombre: 'Medicina General' },
    ]);
  }
}
