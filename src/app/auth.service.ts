import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(private http: HttpClient) { 
    //this.user = <Observable<User>>this.http.get('http://localhost:8080/user');
  }

  getUser() {
    return this.user;
  }
}
