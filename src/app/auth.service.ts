import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './model/user.model';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Subject<User>;

    users: User[] = [ new User( 'test@test.com', 'test'), new User( 'test1@test.com','test1')];

    private _isAuthenticated$ = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
        //this.user = <Observable<User>>this.http.get('http://localhost:8080/user');
    }

    getUser() {
        return this.user$;
    }

    login(user: User) {
        console.log(user);
        let isPresent = this.users.indexOf(user);
        console.log(isPresent);
        if(isPresent >= 0) {
            this._isAuthenticated$.next(true);
        }

        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);

        this.router.navigate([returnUrl]);
    }

    logout() {
        console.log('Inside Auth Service logout method');
        this._isAuthenticated$.next(false);
    }

    get isAuthenticated() {
        return this._isAuthenticated$;
    }
}