import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AuthService } from './auth.service';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicsComponent } from './topics/topics.component';
import { CoursesComponent } from './courses/courses.component';
import { AngularMaterialModule } from './shared/angular-material.module';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { MiniNavComponent } from './mini-nav/mini-nav.component';
import { CourseComponent } from './course/course.component';

@NgModule({
    declarations: [
        AppComponent,
        BsNavbarComponent,
        ChatroomComponent,
        LoginComponent,
        HomeComponent,
        UserComponent,
        DropdownDirective,
        TopicsComponent,
        CoursesComponent,
        AdminComponent,
        MiniNavComponent,
        CourseComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularMaterialModule
    ],
    providers: [AuthService, AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {}