import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './model/user.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnInit {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser$: Observable<User>;

    users: User[] = [new User('a', 'a'), new User('a1', 'a1')];
    user: User;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(
            JSON.parse(localStorage.getItem('currentUser'))
        );
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    ngOnInit() {

    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:5000/api/auth/signin`, { usernameOrEmail: username, password: password })
            .pipe(map(data => {

                this.user = new User(data['email'], password);
                this.user.token = data['token'];

                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(this.user));
                this.currentUserSubject.next(this.user);
                return this.user;
            }));


    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/']);
    }
}