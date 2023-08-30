import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent {
  public formToCreateGame: FormGroup;

  constructor(private FormBuilder: FormBuilder, private shareDataService: ShareDataService) {
    this.formToCreateGame = this.initializeFormToCreateGame();
  }

  public initializeFormToCreateGame(): FormGroup {
    return this.FormBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(/^(?=(?:[^0-9]*[0-9]){0,3}[^0-9]*$)(?!.*[_.*#/-])/)
        ],
      ],
    });
  }

  public captureData(): void {
    console.log(this.formToCreateGame.value.name);
    if (this.formToCreateGame.valid) {
      const inputCreateGame = this.formToCreateGame.get('name')?.value;
      this.shareDataService.setInputCreateGame(inputCreateGame)
    }
  }

  show: boolean = false;

  public openModal(): void {
    console.log("hola")
    if (this.formToCreateGame.valid) {
      this.show = true;
    }
  }

  getErrorMessage(controlName: string): string | undefined {
    const control = this.formToCreateGame.get(controlName);
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
        return 'No puedes tener solo números, usar signos y debe tener máximo 3 números';
      default:
        return '';
    }
  }

}
