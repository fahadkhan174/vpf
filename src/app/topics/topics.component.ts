import { Component, OnInit } from '@angular/core';
import { TopicsService } from './topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: any[];

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.topics = this.topicsService.topics;
  }

}
