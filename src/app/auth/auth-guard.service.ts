import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this._authService.isLoggedIn) { return true; }

    this._authService.redirectUrl = url;
    this._router.navigate(['/login']);
    return false;
  }
}
