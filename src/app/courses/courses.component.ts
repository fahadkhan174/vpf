import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from './courses.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TopicsComponent } from '../topics/topics.component';
import { TopicsService } from '../topics/topics.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  courses: any[] = [];
  topic: any;
  paramSub: Subscription;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private topicsService: TopicsService) { }

  ngOnInit() {
    this.paramSub = this.route.params.subscribe(params => {
      this.topic = this.topicsService.topics.find(topic => topic.url === params['topic']);

      setTimeout(() => {
        this.courses = this.coursesService.courses.filter(course => course.topics.indexOf(this.topic.title) >= 0);
      }, 1000);
    });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }



}
