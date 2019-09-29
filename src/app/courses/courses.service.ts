import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    courses: any[] = [
        { id: 1, name: 'course 1', imgUrl: 'https://www.waketech.edu/sites/default/files/styles/16x9_md_1_400_x_265_/public/program-images/16x9/ComputerProgramming16x9.jpg?itok=-vW5jWc3'},
        { id: 2, name: 'course 2', imgUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        { id: 3, name: 'course 3', imgUrl: 'https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        { id: 4, name: 'course 4', imgUrl: 'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        { id: 5, name: 'course 5', imgUrl: 'https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    ];
}