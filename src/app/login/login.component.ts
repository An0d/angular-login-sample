import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  error: string;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this._authService.login(this.username, this.password)) {
      this.error = null;

      let redirect = this._authService.redirectUrl ? this._authService.redirectUrl : '/';
      this._router.navigate([redirect]);
    } else {
      this.error = "Authentication failed !";
    }
  }

}
