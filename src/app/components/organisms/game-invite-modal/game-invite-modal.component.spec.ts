import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInviteModalComponent } from './game-invite-modal.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

describe('GameInviteModalComponent', () => {
  let component: GameInviteModalComponent;
  let fixture: ComponentFixture<GameInviteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameInviteModalComponent],
      imports: [
        ClipboardModule, // Agrega ClipboardModule a los imports
      ],
    });
    fixture = TestBed.createComponent(GameInviteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate random part with the correct length', () => {
    const component = new GameInviteModalComponent();
    const randomPart = component.generateRandomPart();
    expect(randomPart.length).toBe(8); // Longitud esperada de la parte aleatoria
  });

  it('should initialize value property correctly', () => {
    const component = new GameInviteModalComponent();
    expect(component.value).toContain('http://localhost:4200/');
    expect(component.value.length).toBe(30); // Longitud total esperada
  });
});
