import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPage: boolean = true;
    
    sub: Subscription;

  constructor(private _location: Location, private authService: AuthService, private router: Router) { }

  ngOnInit() {
      this.sub = this.route
      .data
      .subscribe(v => console.log(v));
  }

  toggleForm() {
    this.loginPage = !this.loginPage;
  }

  backClicked() {
    this._location.back();
  }
    
    loginFormSubmit(loginFormData: AbstractControl) {
        console.log(loginFormData);
        this.authService.login();
        this.router.navigate(['/']);
    }
    
    onDestroy() {
        this.sub.unsubscribe();
    }

}
