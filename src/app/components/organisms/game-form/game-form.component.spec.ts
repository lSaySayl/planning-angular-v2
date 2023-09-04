import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFormComponent } from './game-form.component';
import { InputComponent } from '../../atoms/input/input.component';
import { GamePersonComponent } from '../game-person/game-person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareDataService } from 'src/app/services/share-data.service';

describe('GameFormComponent', () => {
  let component: GameFormComponent;
  let fixture: ComponentFixture<GameFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameFormComponent,InputComponent,GamePersonComponent],
      imports: [ReactiveFormsModule], // Agrega ReactiveFormsModule a los imports
      providers: [ShareDataService], // Si es necesario, agrega los providers necesarios

    });
    fixture = TestBed.createComponent(GameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set show to true when form is valid', () => {
    component.formToCreateGame.get('name')?.setValue('TestGame');
    component.openModal();
    expect(component.show).toBeTruthy();
  });

  it('should capture data and call setInputCreateGame when form is valid', () => {
    const setInputCreateGameSpy = spyOn(component.shareDataService, 'setInputCreateGame');
    component.formToCreateGame.get('name')?.setValue('TestGame'); // Cambia 'TestGame' por un valor válido
    component.captureData();
    expect(setInputCreateGameSpy).toHaveBeenCalled();
  });



});
