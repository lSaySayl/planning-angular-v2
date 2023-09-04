import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePersonComponent } from './game-person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareDataService } from 'src/app/services/share-data.service';

describe('GamePersonComponent', () => {
  let component: GamePersonComponent;
  let fixture: ComponentFixture<GamePersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamePersonComponent],
      imports: [ReactiveFormsModule], // Agrega ReactiveFormsModule a los imports
      providers: [ShareDataService], // Si es necesario, agrega los providers necesarios
    });
    fixture = TestBed.createComponent(GamePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
