import { Component, OnInit } from '@angular/core';


import { AuthService } from '../auth.service';
import { TopicsService } from '../topics/topics.service';
import { User } from '../model/user.model';
import { Observable } from 'rxjs'; 

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    topics: any[] = [];
    currentUser: User;

    constructor(private authService: AuthService, private topicsService: TopicsService) {}

    ngOnInit() {
        // this.authService.getUser().subscribe(data => {
        //   this.user = data;
        // });

        this.topics = this.topicsService.topics;
        this.authService.currentUser$.subscribe( data => {
            this.currentUser = data;
        });
    }
    
    logout() {
        this.authService.logout();
    }
}