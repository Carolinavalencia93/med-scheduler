import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/login-request.model';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { InputComponent } from '../../../../shared/components/ui/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  errorMessage: string | null = null;
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['admin@medscheduler.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const request: LoginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.loading = true;

    this.authService
      .login(request)
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/inicio']);
        },

        error: () => {
          this.errorMessage = 'Correo o contraseña incorrectos.';
        },
      });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }
}
