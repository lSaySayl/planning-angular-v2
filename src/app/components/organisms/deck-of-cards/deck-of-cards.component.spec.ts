import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckOfCardsComponent } from './deck-of-cards.component';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from 'src/app/state/reducers/card.reducers';
import { CardComponent } from '../../atoms/card/card.component';
import { LoadingCardsComponent } from '../../atoms/loading-cards/loading-cards.component';

describe('DeckOfCardsComponent', () => {
  let component: DeckOfCardsComponent;
  let fixture: ComponentFixture<DeckOfCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckOfCardsComponent,CardComponent,LoadingCardsComponent],
      imports: [
        StoreModule.forRoot({ 'cardReducer':cardReducer }),
      ],
    });
    fixture = TestBed.createComponent(DeckOfCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate the specified number of cards', () => {
    const numberOfCards = 12;
    const cards = component.generateRandomCards(numberOfCards);
    expect(cards.length).toBe(numberOfCards);
  });

  it('should add a card to selectedCards and set isCardSelected to true', () => {
    const chosenCard = { value: 5 }; // Debes ajustar esto según tus necesidades
    component.chooseCard(chosenCard);
    expect(component.selectedCards.length).toBe(1);
    expect(component.isCardSelected).toBe(true);
  });

  it('should calculate the correct card CSS class', () => {
    const position = 3; // Debes ajustar esto según tus necesidades
    const expectedClass = `card-${position}`;
    const result = component.calculateCardClass(position);
    expect(result).toBe(expectedClass);
  });

});
