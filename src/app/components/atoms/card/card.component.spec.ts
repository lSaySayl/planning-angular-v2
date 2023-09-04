import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store'; // Importa StoreModule
import { CardComponent } from './card.component';
import { cardReducer } from 'src/app/state/reducers/card.reducers';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ 'cardReducer': cardReducer }),
      ],
      declarations: [CardComponent],
      providers: [Store], // Agrega Store como proveedor
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the card value when card.value is not undefined and not 0', () => {
    const cardValue = 5; // Cambia el valor según tus necesidades
    component.card = { value: cardValue };
    fixture.detectChanges();

    const cardContentElement = fixture.nativeElement.querySelector('.card__content');
    expect(cardContentElement.textContent).toBe(cardValue.toString());
  });



});
