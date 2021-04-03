import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials) {
    // return this.http.post('/api/authenticate',
    //   JSON.stringify(credentials));

    return new Observable((observer) => {
      setTimeout(() => {
        if (credentials.email == 'suraj' && credentials.password == '123') {
          let tokenAdmin = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IlN1cmFqIFlhZGF2IiwiYWRtaW4iOnRydWV9.Us8yeTP8jJtLDL1UnCthndWnQf4I0WUq3xcdN2gpVWo';
          let tokenNotAdmin = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwibmFtZSI6IlN1cmFqIFlhZGF2IiwiYWRtaW4iOmZhbHNlfQ.0w1LBzzj9SfQYWcjf_UwMo4AzVHtr77Wfrrpl0embx0';
          let responseData = { token: tokenAdmin };
          if (responseData.token) {
            localStorage.setItem('token', responseData.token);
            observer.next(true);
          } else {
            observer.next(false);
          }
          observer.complete();
        } else {
          observer.error({ error: 'Invalid username and/or password.' });
        }
      }, 1000);
    });
  }

  logout(): void {
    return localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    let jwtHelper = new JwtHelperService();
    let tokenExpired = jwtHelper.isTokenExpired(token);
    return !tokenExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    return new JwtHelperService().decodeToken(token);
  }
}