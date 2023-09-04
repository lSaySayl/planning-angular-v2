import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,public authService: AuthService, private router:Router) {
    this.formLogin = this.initializeFormLogin();
  }

  initializeFormLogin(): FormGroup {
    return this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  loginWithGoogle(){
    this.authService.signInWithGoogle()
    .then((response: any )=> {
      this.router.navigate(['/game']);
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
    })

  }


  loginWithEmailAndPassword(form: FormGroup) {
    this.authService
      .signInWithEmailAndPassword(form.value)
      .then((response: any) => {
        this.router.navigate(['/game']);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
