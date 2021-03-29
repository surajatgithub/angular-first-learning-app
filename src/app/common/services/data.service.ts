import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(@Inject(String) private apiUrl: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.apiUrl, { responseType: 'text' })
            .pipe(
                map(response => {
                    return JSON.parse(response);
                })
            );
    }

    create(resource) {
        return this.http.post(this.apiUrl, resource, { responseType: 'text' })
            .pipe(
                map(response => {
                    return JSON.parse(response);
                })
            );;
    }

    update(id: Number, resource) {
        return this.http.patch(this.apiUrl + '/' + id, resource, { responseType: 'text' })
            .pipe(
                map(response => {
                    return JSON.parse(response);
                })
            );;
    }

    delete(id: Number) {
        return this.http.delete(this.apiUrl + '/' + id, { responseType: 'text' })
            .pipe(
                map(response => {
                    return JSON.parse(response);
                })
            );;
    }
}
