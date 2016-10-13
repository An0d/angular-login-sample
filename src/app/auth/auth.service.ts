import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'test' && password === 'test') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
