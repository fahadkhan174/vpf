import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'course/:course_id', component: CourseComponent },
            { path: 'courses/:topic', component: CoursesComponent },
            { path: 'user', component: UserComponent },
            {
                path: 'admin',
                canActivate: [AuthGuardService],
                component: AdminComponent
            }
        ]
    },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}