import { createReducer,on } from "@ngrx/store"; //importando el reducer
import { clearSelectedCards, updateCard } from '../actions/card.actions';
import { Card } from "src/app/core/models/card.interface";

export interface CardState {
  cards: Card[];
  selectedCards: Card[];

}


//Estado inicial. Similar a inicializar mis variables.
const initialState: CardState = {
  cards:[],
  selectedCards: []

}

//Creando nuestro reducer. "Funciones puras"
export const cardReducer = createReducer(
  initialState, //Lo primero que hace es revisar el estado inicial y luego escucha las acciones. pueden tener muchas (on)
  on(updateCard, (state, { card }) => {
    const updatedCards = state.cards.map(existingCard => {
      return existingCard.value === card.value ? card : existingCard;
    });

    // Agregar la carta actualizada a la matriz de cartas seleccionadas
    const updatedSelectedCards = [...state.selectedCards, card];

    // Devolver un nuevo estado con las cartas actualizadas y seleccionadas
    return { ...state, cards: updatedCards, selectedCards: updatedSelectedCards };
}),
  on(clearSelectedCards, state => ({
    ...state,
    selectedCards: [] // Limpiar las cartas seleccionadas
  }))


)
