import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { GameHeaderComponent } from '../../molecules/game-header/game-header.component';
import { GameFormComponent } from '../../organisms/game-form/game-form.component';
import { InputComponent } from '../../atoms/input/input.component';
import { FichaComponent } from '../../atoms/ficha/ficha.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent,GameHeaderComponent,GameFormComponent,InputComponent,FichaComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
