import { AppError } from './app.error';
import { retry, catchError } from 'rxjs/operators';
import {
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';
import { throwError } from 'rxjs';

export class ErrorIntercepter implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ) {
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                console.log('2. error: ', error);
                console.log('2. error: ', typeof (error));
                // return throwError(error);
                return throwError(new AppError(error));
            })
        );
    }
}