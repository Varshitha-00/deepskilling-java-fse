// Hands-On 7 — AuthService
// Hardcoded isLoggedIn = true for demonstration.
// In a real app this would check a JWT token from localStorage or a session cookie.
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Hardcoded for now — swap to real token check in production
  isLoggedIn = true;

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = true;
  }
}
