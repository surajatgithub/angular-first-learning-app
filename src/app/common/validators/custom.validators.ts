import { AbstractControl, ValidationErrors } from "@angular/forms"

export class CustomValidators {
    static noSpace(control: AbstractControl): ValidationErrors | null {
        if (control.value && (control.value as String).indexOf(' ') >= 0) {
            return { nospace: true }
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value && (control.value as String) == 'Suraj Yadav') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}