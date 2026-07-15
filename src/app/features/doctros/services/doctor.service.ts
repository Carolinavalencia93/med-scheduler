import { Injectable, signal } from '@angular/core';
import { CreateDoctorRequest } from '../models/create-doctor-request.model';
import { Doctor } from '../models/doctor.model';
import { UpdateDoctorRequest } from '../models/update-doctor-request.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  readonly doctors = signal<Doctor[]>([]);

  constructor() {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctors.set([
      {
        id: 1,
        nombreCompleto: 'Juan Pérez',
        especialidadId: 1,
        especialidad: 'Cardiología',
        estado: 'Activo',
      },
      {
        id: 2,
        nombreCompleto: 'Ana Gómez',
        especialidadId: 2,
        especialidad: 'Pediatría',
        estado: 'Activo',
      },
      {
        id: 3,
        nombreCompleto: 'Carlos Díaz',
        especialidadId: 3,
        especialidad: 'Medicina General',
        estado: 'Inactivo',
      },
      {
        id: 4,
        nombreCompleto: 'Laura Martínez',
        especialidadId: 4,
        especialidad: 'Dermatología',
        estado: 'Activo',
      },
    ]);
  }

  createDoctor(request: CreateDoctorRequest): void {
    const specialties: Record<number, string> = {
      1: 'Cardiología',
      2: 'Pediatría',
      3: 'Medicina General',
      4: 'Dermatología',
    };

    const newDoctor: Doctor = {
      id: this.getNextId(),
      nombreCompleto: request.nombreCompleto,
      especialidadId: request.especialidadId,
      especialidad: specialties[request.especialidadId],
      estado: request.estado,
    };

    this.doctors.update((doctors) => [...doctors, newDoctor]);
  }

  private getNextId(): number {
    const doctors = this.doctors();

    if (doctors.length === 0) {
      return 1;
    }

    return Math.max(...doctors.map((doctor) => doctor.id)) + 1;
  }

  updateDoctor(request: UpdateDoctorRequest): void {
    const specialties: Record<number, string> = {
      1: 'Cardiología',
      2: 'Pediatría',
      3: 'Medicina General',
      4: 'Dermatología',
    };

    this.doctors.update((doctors) =>
      doctors.map((doctor) =>
        doctor.id === request.id
          ? {
              ...doctor,
              nombreCompleto: request.nombreCompleto,
              especialidadId: request.especialidadId,
              especialidad: specialties[request.especialidadId],
              estado: request.estado,
            }
          : doctor,
      ),
    );
  }
}
