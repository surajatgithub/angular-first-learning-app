import { MatComponentsModule } from './mat-components/mat-components.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Angular animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Auth Service
import { AuthService } from './common/services/auth.service';
import { AdminAuthGuardService } from './common/services/admin-auth-guard.service';
import { AuthGuardService } from './common/services/auth-guard.service';

// Services
import { GithubFollowersService } from './common/services/github-followers.service';
import { PostService } from './common/services/post.service';
import { OrderService } from './common/services/order.service';

// Components
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { MaterialComponent } from './material/material.component';
import { CoursesComponent } from './courses/courses.component';
import { DialogDataComponent } from './dialog-data/dialog-data.component';

// Error Handling
import { ErrorIntercepter } from './common/errors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    ContactFormComponent,
    RegisterComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    NoAccessComponent,
    CoursesComponent,
    MaterialComponent,
    DialogDataComponent
  ],
  imports: [
    // Browser
    BrowserModule,

    // Form
    FormsModule,
    ReactiveFormsModule,

    // Http 
    HttpClientModule,

    // Angular material
    MatComponentsModule,
    BrowserAnimationsModule,

    // Routing
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'login', component: LoginComponent },
      { path: 'followers/:id/:username', component: GithubProfileComponent, canActivate: [AuthGuardService] },
      { path: 'followers', component: GithubFollowersComponent, canActivate: [AuthGuardService] },
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuardService] },
      { path: 'courses', component: CoursesComponent, canActivate: [AuthGuardService] },
      { path: 'material', component: MaterialComponent, canActivate: [AuthGuardService] },
      { path: 'no-access', component: NoAccessComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    PostService,
    GithubFollowersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercepter,
      multi: true
    },
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }