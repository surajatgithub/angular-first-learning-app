import { Router } from '@angular/router';
import { AuthService } from './../common/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  logout(): void {
    this.authService.logout()
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }

  get currentUser() {
    return this.authService.currentUser;
  }
}