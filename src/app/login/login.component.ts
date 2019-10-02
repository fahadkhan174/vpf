import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginPage: boolean;
  user: User;

  // sub: Subscription;
  loginPageSub: Subscription;
  constructor(
    private _location: Location,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginPageSub = this.route.queryParams.subscribe(params => {
      this.loginPage = JSON.parse(params['loginPage']);
    });

    // to get data from route defined in routing modules
    // this.sub = this.route.data.subscribe(v => console.log(v));
  }

  toggleForm() {
    this.loginPage = !this.loginPage;
  }

  backClicked() {
    this._location.back();
  }

  loginFormSubmit(loginFormData: User) {
   
    this.authService.login(loginFormData);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
    this.loginPageSub.unsubscribe();
  }
}