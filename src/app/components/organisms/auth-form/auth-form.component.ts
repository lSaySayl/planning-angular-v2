import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  public errorMessage: string | null = null;
  public formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
    this.formLogin = this.initializeFormLogin();
  }

  initializeFormLogin(): FormGroup {
    return this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  loginWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((response: any) => {
        this.router.navigate(['/game']);
        console.log(response);
      })
      .catch((error) => {
        if (error.code === 'auth/cancelled-popup-request') {
          this.errorMessage = 'Se canceló la solicitud de inicio de sesión.';
        } else if (error.code === 'auth/popup-blocked') {
          this.errorMessage = 'Se ha cerrado la ventana emergente.'
            'El inicio de sesión emergente fue bloqueado por el navegador.';
        } else if (error.code === 'auth/popup-closed-by-user') {
          this.errorMessage = 'La ventana emergente de inicio de sesión fue cerrada por el usuario.';
        } else if (error.code === 'auth/network-request-failed') {
          this.errorMessage = 'Hubo un problema de red al intentar iniciar sesión. Verifica tu conexión a Internet.';
        } else {
          console.log(error);
          // Maneja otros errores según tus necesidades
        }
      });
  }



  loginWithEmailAndPassword(form: FormGroup) {
    this.authService
      .signInWithEmailAndPassword(form.value)
      .then((response: any) => {
        this.router.navigate(['/game']);
        console.log(response);
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          this.errorMessage = 'La contraseña es incorrecta.';
        } else if (error.code === 'auth/user-not-found') {
          this.errorMessage =
            'No se encontró una cuenta con este correo electrónico.';
        } else if (error.code === 'auth/invalid-email') {
          this.errorMessage =
            'La dirección de correo electrónico no es válida.';
        } else {
          console.log(error);
          this.errorMessage =
            'Se produjo un error durante el inicio de sesión.';
        }
      });
  }
}
