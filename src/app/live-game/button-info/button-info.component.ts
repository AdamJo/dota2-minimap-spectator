import { Component, HostListener, Input,
  trigger, state, style, transition, animate } from '@angular/core';
import { ApiService } from '../../services/index';

@Component({
  selector: 'app-button-info',
  templateUrl: 'button-info.component.html',
  styleUrls: ['./button-info.component.scss'],
  animations: [
    trigger('transfer', [
      state('left', style({
        transform: 'rotate(0)'
      })),
      state('leftGo', style({
        transform: 'rotate(360deg)'
      })),
      state('right', style({
        transform: 'rotate(0)'
      })),
      state('rightGo', style({
        transform: 'rotate(360deg)'
      })),
      transition('left <=> leftGo', animate('.3s linear')),
      transition('right <=> rightGo', animate('.3s linear'))
    ])
  ]
})

export class ButtonInfoComponent {
  @Input() gameCount: number;
  @Input() leagueUrl: string;
  @Input() leagueName: string;
  @Input() gamesLength: number;
  @Input() spectators: number;
  @Input() allGamesLength: number;
  @Input() apiStatus: boolean;

  locked: boolean;
  loaded: boolean;
  leftButton: string = 'left';
  rightButton: string = 'right';
  swipeDirection: string = '-';

  constructor(private apiService: ApiService) {}

  // moves games to the right
  decrementTotal() {
    console.log(this.gameCount, this.allGamesLength)
    this.apiService.decrementTotal();
    this.rightButton = this.rightButton === 'right' ? 'rightGo' : 'right';
  }

  // moves games to the left
  incrementTotal() {
    console.log(this.gameCount, this.allGamesLength)
    this.apiService.incrementTotal();
    this.leftButton = this.leftButton === 'left' ? 'leftGo' : 'left';
  }

  // use arrow keys to navigate
  @HostListener(`document:keydown`, ['$event'])
  keypress(e: KeyboardEvent) {
    if (e.key === 'ArrowRight' && !this.locked) {
      if (this.gameCount !== 1) {
        this.incrementTotal();
      }
    } else if (e.key === 'ArrowLeft' && !this.locked) {
      if (this.gameCount !== this.allGamesLength) {
        this.decrementTotal();
      }
    }
  }

  lockMatch() {
    this.apiService.locked = !this.apiService.locked;
    if (this.apiService.locked) {
      this.apiService.lockedMatchId = this.apiService.currentGame.match_id
    } else {
      this.apiService.unlockCurrentMatch()
    }
  }
}
