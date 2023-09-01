import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private inputCreateGame = '';

  setInputCreateGame(value: string): void {
    this.inputCreateGame = value;
  }

  getInputCreateGame(): string {
    return this.inputCreateGame;
  }

  private inputValue = '';

  setInputCreatePlayer(value: string): void {
    this.inputValue = value;
  }

  getInputCreatePlayer(): string {
    return this.inputValue;
  }

  //Rastrear si el usuario es un jugador o un espectador.
  private isPlayer = false;

  setIsPlayer(value: boolean): void {
    this.isPlayer = value;
  }

  getIsPlayer(): boolean {
    return this.isPlayer;
  }
}
