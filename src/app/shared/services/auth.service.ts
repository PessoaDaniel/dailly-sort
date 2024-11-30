import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly TOKEN_KEY: string = 'x_auth_token';
  readonly signImBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
      private router: Router,
  ) {}

  isLoggedIn() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      this.signImBehavior.next(true);
      return true;
    }
    this.signImBehavior.next(false);
    return false;
  }

  signIn() {
    localStorage.setItem(this.TOKEN_KEY, 'test');
    this.router.navigate(['/']).then();
    this.signImBehavior.next(true);
  }
  signOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.signImBehavior.next(false);
    this.router.navigate(['/']).then();
    location.reload();
  }
}