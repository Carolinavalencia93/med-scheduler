import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardSummary } from '../models/dashboard-summary.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  getSummary(): Observable<DashboardSummary> {
    return of({
      citasHoy: 12,
      pacientesHoy: 28,
      medicosActivos: 8,
      proximaConsulta: '09:30 AM',
    });
  }
}
