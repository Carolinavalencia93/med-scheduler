import { Component, inject } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { MatIcon } from '@angular/material/icon';
import { SearchInputComponent } from '../../../../shared/components/app-search-input/search-input-component/search-input-component';
import { DoctorFormDialogComponent } from '../../components/doctor-form-dialog/doctor-form-dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from '../../../../shared/components/ui/button/button';
import { Doctor } from '../../models/doctor.model';

@Component({
  selector: 'app-doctor-list-component',
  imports: [MatIcon, SearchInputComponent, MatDialogModule, ButtonComponent],
  templateUrl: './doctor-list-component.html',
  styleUrl: './doctor-list-component.scss',
})
export class DoctorListComponent {
  private doctorService = inject(DoctorService);
  private dialog = inject(MatDialog);
  readonly doctors = this.doctorService.doctors;

  openCreateDoctor(): void {
    const dialogRef = this.dialog.open(DoctorFormDialogComponent, {
      width: '500px',
      height: '530px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      this.doctorService.createDoctor(result);
    });
  }

  editDoctor(doctor: Doctor): void {
    const dialogRef = this.dialog.open(DoctorFormDialogComponent, {
      width: '500px',
      height: '530px',
      disableClose: true,
      data: doctor,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.doctorService.updateDoctor(result);
    });
  }
}
