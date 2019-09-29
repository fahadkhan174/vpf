import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'user', component: UserComponent }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
