import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    courses: any[];
    
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
      this.courses = this.coursesService.courses;
  }

}
