import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SpecialtyService } from '../../../catalog/services/specialty.service';
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/ui/button/button';

@Component({
  selector: 'app-doctor-form-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    AsyncPipe,
    ButtonComponent,
  ],
  templateUrl: './doctor-form-dialog.html',
  styleUrl: './doctor-form-dialog.scss',
})
export class DoctorFormDialogComponent {
  isEditMode = false;
  private fb = inject(FormBuilder);
  private specialtyService = inject(SpecialtyService);
  private dialogRef = inject(MatDialogRef<DoctorFormDialogComponent>);

  specialties$ = this.specialtyService.getSpecialties();

  doctorForm = this.fb.group({
    nombreCompleto: ['', Validators.required],
    especialidadId: [null, Validators.required],
    estado: ['Activo', Validators.required],
  });

  get nombreCompleto() {
    return this.doctorForm.controls.nombreCompleto;
  }

  get especialidadId() {
    return this.doctorForm.controls.especialidadId;
  }

  get estado() {
    return this.doctorForm.controls.estado;
  }

  save(): void {
    if (this.doctorForm.invalid) {
      this.doctorForm.markAllAsTouched();

      return;
    }

    this.dialogRef.close(this.doctorForm.getRawValue());
  }
}
