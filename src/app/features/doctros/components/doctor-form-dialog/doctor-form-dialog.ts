import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { toSignal } from '@angular/core/rxjs-interop';

import { SpecialtyService } from '../../../catalog/services/specialty.service';
import { Doctor } from '../../models/doctor.model';

import { ButtonComponent } from '../../../../shared/components/ui/button/button';
import { InputComponent } from '../../../../shared/components/ui/input/input.component';
import { SelectComponent } from '../../../../shared/components/ui/select/select.component';

@Component({
  selector: 'app-doctor-form-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, ButtonComponent, InputComponent, SelectComponent],
  templateUrl: './doctor-form-dialog.html',
  styleUrl: './doctor-form-dialog.scss',
})
export class DoctorFormDialogComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  private readonly specialtyService = inject(SpecialtyService);

  readonly dialogRef = inject(MatDialogRef<DoctorFormDialogComponent>);

  readonly doctor = signal<Doctor | null>(
    inject<Doctor | null>(MAT_DIALOG_DATA, {
      optional: true,
    }),
  );

  readonly isEditMode = computed(() => this.doctor() !== null);

  readonly specialties = toSignal(this.specialtyService.getSpecialties(), {
    initialValue: [],
  });

  readonly specialtyOptions = computed(() =>
    this.specialties().map((specialty) => ({
      label: specialty.nombre,
      value: specialty.id,
    })),
  );

  readonly statusOptions = [
    {
      label: 'Activo',
      value: 'Activo',
    },
    {
      label: 'Inactivo',
      value: 'Inactivo',
    },
  ];

  readonly doctorForm = this.fb.group({
    id: [0],
    nombreCompleto: ['', Validators.required],
    especialidadId: [null as number | null, Validators.required],
    estado: ['Activo', Validators.required],
  });

  ngOnInit(): void {
    const doctor = this.doctor();

    if (!doctor) {
      return;
    }

    this.doctorForm.patchValue({
      id: doctor.id,
      nombreCompleto: doctor.nombreCompleto,
      especialidadId: doctor.especialidadId,
      estado: doctor.estado,
    });
  }

  save(): void {
    if (this.doctorForm.invalid) {
      this.doctorForm.markAllAsTouched();
      return;
    }

    this.dialogRef.close(this.doctorForm.getRawValue());
  }

  close(): void {
    this.dialogRef.close();
  }
}
