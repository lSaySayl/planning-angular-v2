import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent {
  inputCreateGame: string = '';
  inputCreatePlayer: string = '';
  isPlayer: boolean = false;
  playerInvitationModal = false; // Inicialmente el modal está cerrado

  modalGame(): void {
    this.playerInvitationModal = true;
  }

  closeModal(): void {
    this.playerInvitationModal = false;
  }


  constructor (private sharedDataService: ShareDataService) {

  }

  ngOnInit(): void {
    this.inputCreateGame = this.sharedDataService.getInputCreateGame();
    this.inputCreatePlayer = this.sharedDataService.getInputCreatePlayer();
    this.isPlayer = this.sharedDataService.getIsPlayer();

  }



}
