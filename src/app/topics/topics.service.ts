import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  topics: any[] = [
    { id: 1, title: 'Developement', url: 'developement'},
    { id: 2, title: 'Business', url: 'business'},
    { id: 3, title: 'Finance and Accounting', url: 'finance&accounting'},
    { id: 4, title: 'IT & Software', url: 'it&software'},
    { id: 5, title: 'Office Productivity', url: 'office-productivity'},
    { id: 6, title: 'Personal Developement', url: 'personal-developement'},
    { id: 7, title: 'Design', url: 'design'},
    { id: 8, title: 'Marketing', url: 'marketing'},
    { id: 8, title: 'Lifestyle', url: 'lifestyle'}
  ];

  constructor() { }
}
