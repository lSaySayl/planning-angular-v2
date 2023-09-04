import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  public errorMessage: string | null = null;

  public formRegister: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
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
    console.log('hola');
    this.authService
      .registerWithEmailAndPassword(form.value)
      .then((response: any) => {
        this.router.navigate(['/login']);
        console.log(response);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          this.errorMessage = 'Este correo ya existe.';
        } else if (error.code === 'auth/weak-password') {
          this.errorMessage = 'La contraseña es demasiado débil. Debe contener al menos 6 caracteres.';
        } else if (error.code === 'auth/missing-password') {
          this.errorMessage = 'La contraseña es obligatoria.';
        } else if (error.code === 'auth/invalid-email') {
          this.errorMessage = 'La dirección de correo electrónico no es válida.';
        } else {
          console.log(error);
          this.errorMessage = 'Se produjo un error durante el registro.';
        }
      });
  }
}
