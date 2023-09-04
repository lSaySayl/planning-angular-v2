import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-game-person',
  templateUrl: './game-person.component.html',
  styleUrls: ['./_game-person.component.scss']
})
export class GamePersonComponent {
  public formPerson: FormGroup;

  constructor(private formBuilder: FormBuilder, private shareDataService: ShareDataService, public router: Router) {
    this.formPerson = this.initializeFormPerson();
  }

  public initializeFormPerson(): FormGroup {
    return this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(/^(?=(?:[^0-9]*[0-9]){0,3}[^0-9]*$)(?!.*[_.*#/-])/),
        ],
      ],
      isPlayer: [false],
      isAdmin: [false],
    });
  }

  //Método para enviar el formulario y capturar la información de mi input name.

  public submitForm(): void {
    if (this.formPerson.valid) {
      const inputValue = this.formPerson.get('name')?.value;
      this.shareDataService.setInputCreatePlayer(inputValue);

      // Verificar si es administrador y establecer el rol correspondiente
      const isAdmin = this.formPerson.get('isAdmin')?.value;
      const isPlayer = isAdmin ? false : this.formPerson.get('isPlayer')?.value;
      this.shareDataService.setIsPlayer(isPlayer);

      console.log(`Nombre: ${inputValue}`);
      console.log(`Es administrador: ${isAdmin}`);
      console.log(`Es jugador: ${isPlayer}`);

      // Después de establecer los valores, navegar a la siguiente ruta
      if (isPlayer) {
        this.router.navigate(['/table']);
      } else {
        this.router.navigate(['']);
      }
    }
  }

  getErrorMessage(controlName: string): string | undefined {
    const control = this.formPerson.get(controlName);
    if (control?.touched) {
      for (const errorType in control?.errors) {
        if (control?.hasError(errorType)) {
          return this.getErrorByType(errorType, control.errors[errorType]);
        }
      }
    }
    return undefined;
  }

  private getErrorByType(errorType: string, errorDetails: any): string {
    switch (errorType) {
      case 'required':
        return 'El nombre es obligatorio';
      case 'minlength':
        return `El nombre debe tener al menos ${errorDetails.requiredLength} caracteres.`;
      case 'maxlength':
        return `El nombre debe tener máximo ${errorDetails.requiredLength} caracteres`;
      case 'pattern':
        return 'El nombre no puede tener solo números y debe tener máximo 3 números';
      default:
        return '';
    }
  }

}
