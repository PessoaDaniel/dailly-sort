import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly TOKEN_KEY: string = 'x_auth_token';
  constructor() {}

  isLoggedIn() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      return true;
    }
    return false;
  }
}