import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TopicsService } from '../topics/topics.service';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    user: {
        name: string;
    };

    topics: any[] = [];

    isAuthenticated$: any;

    constructor(private authService: AuthService, private topicsService: TopicsService) {}

    ngOnInit() {
        // this.authService.getUser().subscribe(data => {
        //   this.user = data;
        // });

        this.topics = this.topicsService.topics;
        this.isAuthenticated$ = this.authService.isAuthenticated;
    }
    
    logout() {
        this.authService.logout();
    }
}