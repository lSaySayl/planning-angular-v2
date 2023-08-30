import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGoogleComponent } from './button-google.component';

describe('ButtonGoogleComponent', () => {
  let component: ButtonGoogleComponent;
  let fixture: ComponentFixture<ButtonGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonGoogleComponent]
    });
    fixture = TestBed.createComponent(ButtonGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
