import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { map, first } from 'rxjs/operators';
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
    returnUrl: string;
    error: string = '';
    
    constructor(
        private _location: Location,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.loginPageSub = this.route.queryParams.subscribe(params => {
            this.loginPage = JSON.parse(params['loginPage']);
        });

        // to get data from route defined in routing modules
        // this.sub = this.route.data.subscribe(v => console.log(v));

        this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', this.returnUrl);
    }

    backClicked() {
        this._location.back();
    }

    loginFormSubmit(form: AbstractControl) {
        this.authService
            .login(form['email'], form['password'])
            .pipe(first())
            .subscribe(
                data => {
                    if(data != null) {
                        this.router.navigate([this.returnUrl]);
                    }
                },
                error => {
                    this.error = error;
                }
            );
    }
    
    toggleForm() {
        this.loginPage =!this.loginPage;
    }

    ngOnDestroy() {
        // this.sub.unsubscribe();
        this.loginPageSub.unsubscribe();
    }
}