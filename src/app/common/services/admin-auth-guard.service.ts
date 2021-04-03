import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  canActivate() {
    let user = this.authService.currentUser;
    if (user && user.admin) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }
}
