import { NotFoundError } from './not-fountd.error';
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
                let e = new AppError(error);
                console.log('An Error Occured.');
                console.log(e);
                if (error.status === 404) {
                    return throwError(new NotFoundError(error));
                }
                return throwError(e);
            })
        );
    }
}