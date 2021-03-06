import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CustomValidators } from '../common/validators/custom.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signUpForm = new FormGroup({
    account: new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        // Validators.email,
        Validators.minLength(10),
        // CustomValidators.noSpace
      ],
        CustomValidators.shouldBeUnique
      ),
      password: new FormControl(null, Validators.required)
    })
  });

  get username() {
    return this.signUpForm.get('account.username');
  }

  get password() {
    return this.signUpForm.get('account.username');
  }

  login() {
    this.signUpForm.setErrors({
      loginFailed: true
    });
  }
}
