import { Component, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  public formRegister: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.formRegister = this.initializeFormLogin();
  }

  initializeFormLogin(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }



  registerWithEmailAndPassword(form: FormGroup) {
    console.log("hola")
    this.authService
      .registerWithEmailAndPassword(form.value)
      .then((response: any) => {
        this.router.navigate(['/login']);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}


