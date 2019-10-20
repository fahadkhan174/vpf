import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    courses: any[] = [
        { id: 1, title: 'Complete Python Bootcamp: Go from zero to hero in Python 3', author: 'Jose Portilla', imgUrl: 'https://www.waketech.edu/sites/default/files/styles/16x9_md_1_400_x_265_/public/program-images/16x9/ComputerProgramming16x9.jpg?itok=-vW5jWc3', topics: [ 'Developement']},
        { id: 2, title: 'Java Programming Masterclass for Software Developers', author: 'Tim Buchalka', imgUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', topics: [ 'Developement', '']},
        { id: 3, title: 'Angular 8 (formerly Angular 2) - The Complete Guide', author: 'Maximilian Schwarzmüller', imgUrl: 'https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', topics: [ 'Developement']},
        { id: 4, title: 'Complete C# Unity Developer 2D: Learn to Code Making Games', author: 'Ben Tristem', imgUrl: 'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', topics: [ 'Developement']},
        { id: 5, title: 'The Complete Node.js Developer Course (3rd Edition)', author: 'Andrew Mead, Rob Percival', imgUrl: 'https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', topics: [ 'Business']},
    ];
}