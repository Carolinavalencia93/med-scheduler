import { Component, inject } from '@angular/core';
import { AuthService } from '../../../features/auth/services/AuthService';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private authService = inject(AuthService);
  private router = inject(Router);

  user$ = this.authService.getCurrentUser();

  closeSession() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
