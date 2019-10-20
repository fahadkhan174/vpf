import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../model/course.model';
import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  sub: Subscription;
  course: Course;

  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.course = this.coursesService.courses.find((p: Course) => p['id'] === +params['course_id']);
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
