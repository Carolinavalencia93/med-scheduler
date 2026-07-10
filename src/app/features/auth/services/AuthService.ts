import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../models/login-request.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'user';
  private platformId = inject(PLATFORM_ID);

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private http = inject(HttpClient);

  currentUser$ = this.currentUserSubject.asObservable();

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('URL_DEL_LOGIN', request).pipe(
      tap((loginResponse) => {
        this.saveToken(loginResponse.token);

        this.saveUser(loginResponse.user);
      }),
    );
  }

  private saveToken(token: string): void {
    if (!this.isBrowser) {
      return;
    }

    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private saveUser(user: User): void {
    if (!this.isBrowser) {
      return;
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(user));

    this.currentUserSubject.next(user);
  }

  logout(): void {
    this.clearStorage();

    this.currentUserSubject.next(null);
  }

  private clearStorage(): void {
    if (!this.isBrowser) {
      return;
    }

    localStorage.removeItem(this.TOKEN_KEY);

    localStorage.removeItem(this.USER_KEY);
  }

  restoreSession(): void {
    if (!this.isBrowser) {
      return;
    }
    try {
      const token = localStorage.getItem(this.TOKEN_KEY);
      const user = localStorage.getItem(this.USER_KEY);

      if (!token || !user) {
        this.logout();
        return;
      }

      const parsedUser: User = JSON.parse(user);

      this.currentUserSubject.next(parsedUser);
    } catch {
      this.logout();
    }
  }

  getToken(): string | null {
    if (!this.isBrowser) {
      return null;
    }
    const token = localStorage.getItem(this.TOKEN_KEY);

    console.log('TOKEN:', token);
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser$;
  }
}
