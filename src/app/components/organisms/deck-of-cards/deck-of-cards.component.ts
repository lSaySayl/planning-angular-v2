import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/core/models/card.interface';
import { ShareDataService } from 'src/app/services/share-data.service';
import { updateCard } from 'src/app/state/actions/card.actions';
import { CardState } from 'src/app/state/reducers/card.reducers';

@Component({
  selector: 'app-deck-of-cards',
  templateUrl: './deck-of-cards.component.html',
  styleUrls: ['./deck-of-cards.component.scss']
})
export class DeckOfCardsComponent {
  inputCreatePlayer: string = '';
  inputCreateGame: string = '';
  isPlayer: boolean = false;
  isCardSelected: boolean = false;
  isAdminProcessing: boolean = false;
  cards: any[] = [];

  selectedCards: Card[] = [];

  constructor ( private sharedDataService: ShareDataService,
    private store: Store<{ cardReducer: CardState }>,
    private router: Router) {

    }

    ngOnInit(): void {
      this.inputCreateGame = this.sharedDataService.getInputCreateGame();
      this.inputCreatePlayer = this.sharedDataService.getInputCreatePlayer();
      this.isPlayer = this.sharedDataService.getIsPlayer();



        this.cards = this.generateRandomCards(12);

      console.log(this.cards);
    }

    generateRandomCards(numberOfCards: number): Card[] {
      const cards: Card[] = [];
      for (let i = 0; i < numberOfCards; i++) {
        const randomValue = Math.floor(Math.random() * 50) + 1;
        const card: Card = { value: randomValue };
        cards.push(card);
      }
      return cards;
    }



  chooseCard(chosenCard: Card) {
    if (this.selectedCards.length < 7) {
      this.selectedCards.push(chosenCard); // Almacenar la carta seleccionada en el estado
      this.isCardSelected = true;
      setTimeout(() => {
        this.isCardSelected = false;
      }, 1000);

      this.store.dispatch(updateCard({ card: chosenCard })); //Despacho acción para el store
      console.log('Cartas seleccionadas:', this.selectedCards);

      if (this.selectedCards.length === 7) {
        setTimeout(() => {
          this.isAdminProcessing = true;
          setTimeout(() => {
            this.router.navigate(['/admin']);
          }, 7000);
        }, 1000);
      }
    }
  }

  calculateCardClass(position: number): string {
    return `card-${position}`;
  }



}
