import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/core/models/card.interface';
import { updateCard } from 'src/app/state/actions/card.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card = { value: 0 };

  constructor(private store: Store) {}

  chooseCard () {
    //Actualizando el estado usando ngrx
    this.store.dispatch(updateCard({card: this.card}))
  }

}
