import { Component, OnInit, OnDestroy } from '@angular/core';


import { AuthService } from '../auth.service';
import { TopicsService } from '../topics/topics.service';
import { User } from '../model/user.model';
import { Observable, Subscription } from 'rxjs'; 

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit, OnDestroy{
    topics: any[] = [];
    currentUser: User;
    sub: Subscription;

    constructor(private authService: AuthService, private topicsService: TopicsService) {}

    ngOnInit() {
        this.topics = this.topicsService.topics;
        this.sub = this.authService.currentUser$.subscribe( user => {
            this.currentUser = user;
        });
    }
    
    logout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.sub.unsubscribe;
    }
}