import { AuthService } from './../common/services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(
        (result) => {
          if (result) {
            let redirectUrl = this.route.snapshot.queryParams['redirectUrl'];
            if (redirectUrl) {
              this.router.navigate([redirectUrl]);
            } else {
              this.router.navigate(['/']);
            }
          }
          else
            this.invalidLogin = true;
        },
        (error) => {
          this.invalidLogin = true;
        });
  }
}
