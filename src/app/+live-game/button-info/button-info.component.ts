import { Component, HostListener, Input,
  trigger, style, transition, animate, keyframes } from '@angular/core';
import { ApiService } from '../../services/index';

@Component({
  selector: 'lg-button-info',
  templateUrl: 'button-info.component.html',
  styleUrls: ['./button-info.component.css'],
  animations: [
    trigger('transfer', [
      transition('left <=> leftGo', [
        animate('.3s', keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(7px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
      ]),
      transition('right <=> rightGo', [
        animate('.3s', keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(7px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ])
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

  loaded: boolean;
  leftButton: string = 'left';
  rightButton: string = 'right';
  swipeDirection: string = '-';

  constructor(public apiService: ApiService) {}

  // moves games to the right
  decrementTotal() {
    this.apiService.decrementTotal();
    this.leftButton = this.leftButton === 'left' ? 'leftGo' : 'left';
  }

  // moves games to the left
  incrementTotal() {
    this.apiService.incrementTotal();
    this.rightButton = this.rightButton === 'right' ? 'rightGo' : 'right';
  }

  // use arrow keys to navigate
  @HostListener(`document:keydown`, ['$event'])
  keypress(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') {
      if (this.gameCount !== 1) {
        this.incrementTotal();
      }
    } else if (e.key === 'ArrowLeft') {
      if (this.gameCount !== this.allGamesLength) {
        this.decrementTotal();
      }
    }
  }
}
