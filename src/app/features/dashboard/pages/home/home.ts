import { Component, inject } from '@angular/core';
import { DashboardSummary } from '../../models/dashboard-summary.model';
import { DashboardService } from '../../services/dashboard.service';
import { AsyncPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  summary!: DashboardSummary;
  private dashboardService = inject(DashboardService);

  summary$ = this.dashboardService.getSummary();
}
