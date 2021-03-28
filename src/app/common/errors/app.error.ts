import { HttpResponseBase } from '@angular/common/http';

export class AppError {
    constructor(public originalError: HttpResponseBase) {
        console.log('1. originalError: ', originalError);
    }
}