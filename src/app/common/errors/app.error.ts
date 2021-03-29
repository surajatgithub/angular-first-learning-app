import { HttpResponseBase } from '@angular/common/http';

export class AppError {
    public prop1: Number;
    public prop2: String;
    constructor(public originalError: HttpResponseBase) {
        this.prop1 = 100;
        this.prop2 = "Prop2 value";
    }
}