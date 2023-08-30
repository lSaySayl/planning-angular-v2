import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePersonComponent } from './game-person.component';

describe('GamePersonComponent', () => {
  let component: GamePersonComponent;
  let fixture: ComponentFixture<GamePersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamePersonComponent]
    });
    fixture = TestBed.createComponent(GamePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
