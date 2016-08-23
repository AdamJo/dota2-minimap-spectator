import { Component, HostListener,
  trigger, state, style, transition, animate,  } from '@angular/core';
import { ApiService } from './services/index';
// import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'root-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
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
      transition('left <=> leftGo', animate('300ms linear')),
      transition('right <=> rightGo', animate('300ms linear'))
    ])
  ]
})

export class AppComponent {
  loaded: boolean;
  leftButton: string = 'left';
  rightButton: string = 'right';
  swipeDirection: string = '-';

  constructor(private apiService: ApiService) {
    this.apiService.main();
    this.loaded = this.apiService.loadDone;
  }

  decrementTotal() {
    this.apiService.decrementTotal();
    this.rightButton = this.rightButton === 'right' ? 'rightGo' : 'right';
  }

  incrementTotal() {
    this.apiService.incrementTotal();
    this.leftButton = this.leftButton === 'left' ? 'leftGo' : 'left';
  }

  @HostListener(`document:keydown`, ['$event'])
  keypress(e: KeyboardEvent) {
      switch(e.key) {
        case 'ArrowLeft':
          if (this.apiService.gameCount !== 1) {
            this.incrementTotal();
          }
          break;
        case 'ArrowRight':
          if (this.apiService.gameCount !== this.apiService.allData.length) {
            this.decrementTotal();
          }
          break;
      }
  }
}
