import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from 'src/app/state/reducers/card.reducers';
import { TableHeaderComponent } from '../../organisms/table-header/table-header.component';
import { GamePokerComponent } from '../../molecules/game-poker/game-poker.component';
import { FichaComponent } from '../../atoms/ficha/ficha.component';
import { PokerTableComponent } from '../../atoms/table/poker-table.component';
import { DeckOfCardsComponent } from '../../organisms/deck-of-cards/deck-of-cards.component';
import { CardComponent } from '../../atoms/card/card.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent,TableHeaderComponent,GamePokerComponent,FichaComponent,PokerTableComponent,DeckOfCardsComponent,CardComponent],
      imports: [
        // Agrega StoreModule.forRoot() aquí si aún no está importado en tu proyecto
        StoreModule.forRoot({ 'cardReducer':cardReducer }),
      ],
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate card class correctly', () => {
    const position = 3; // Cambia la posición según tu necesidad
    const calculatedClass = component.calculateCardClass(position);
    expect(calculatedClass).toBe(`card-${position}`);
  });

  it('should generate random cards', () => {
    const numberOfCards = 10; // Cambia el número de tarjetas según tus necesidades
    const cards = component.generateRandomCards(numberOfCards);
    expect(cards.length).toBe(numberOfCards);
    for (const card of cards) {
      expect(card.value).toBeGreaterThanOrEqual(1);
      expect(card.value).toBeLessThanOrEqual(50);
    }
  });
});
