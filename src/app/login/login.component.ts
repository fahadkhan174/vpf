import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPage: boolean = true;

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  toggleForm() {
    this.loginPage = !this.loginPage;
  }

  backClicked() {
    this._location.back();
  }

}
