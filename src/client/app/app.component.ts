import { Component, HostListener,
  trigger, state, style, transition, animate } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ApiService } from './services/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'root-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ],
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
  leftButton = 'left';
  rightButton = 'right';

  constructor(private apiService: ApiService ) {
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
