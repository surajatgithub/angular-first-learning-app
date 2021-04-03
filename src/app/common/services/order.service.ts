import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() {
    return this.http.get('/api/orders', { responseType: 'text' })
      .pipe(
        map(response => {
          return JSON.parse(response);
        })
      );
  }
}
