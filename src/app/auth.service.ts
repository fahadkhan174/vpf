import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

interface User {
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: Observable<User>;

    private _isAuthenticated$ = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) {
        //this.user = <Observable<User>>this.http.get('http://localhost:8080/user');
    }

    getUser() {
        return this.user;
    }

    login() {
        this._isAuthenticated$.next(true);
    }

    logout() {
        console.log('Inside Auth Service logout method');
        this._isAuthenticated$.next(false);
    }

    get isAuthenticated() {
        return this._isAuthenticated$;
    }
}