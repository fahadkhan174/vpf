import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  topics: any[] = [
    { id: 1, name: 'Developement', url: 'developement'},
    { id: 2, name: 'Business', url: 'business'},
    { id: 3, name: 'Finance and Accounting', url: 'finance&accounting'},
    { id: 4, name: 'IT & Software', url: 'it&software'},
    { id: 5, name: 'Office Productivity', url: 'office-productivity'},
    { id: 6, name: 'Personal Developement', url: 'personal-developement'},
    { id: 7, name: 'Design', url: 'design'},
    { id: 8, name: 'Marketing', url: 'marketing'},
    { id: 8, name: 'Lifestyle', url: 'lifestyle'}
  ];

  constructor() { }
}
