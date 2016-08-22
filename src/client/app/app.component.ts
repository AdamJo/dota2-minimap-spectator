import { Component, HostListener, ElementRef, Renderer, ViewChild,
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
  @ViewChild('screen') screen: ElementRef;

  newWidth: string;

  constructor(private apiService: ApiService, private renderer: Renderer ) {
    this.apiService.main();
    this.loaded = this.apiService.loadDone;
    // Observable.fromEvent(window, 'resize')
    //     .debounceTime(200)
    //     .subscribe((event: any) => {
    //       this.onResize(event);
    // });
  }

  onResize(event: any) {
    // console.log(event);
    // if (!this.apiService.currentGame.scoreboard.did_game_start) {
    //   this.newWidth = ((event.target.innerWidth / 1102) * .85).toFixed(2);
    // } else {
    //   // if (event.target.innerHeight > )
    //   console.log(event.target.innerHeight);
    //   this.newWidth = ((event.target.innerHeight / 1102)).toFixed(2);
    // }
    // console.log(this.newWidth);
    // this.renderer.setElementStyle(this.screen.nativeElement, 'zoom', `${this.newWidth}`);
    // this.renderer.setElementStyle(this.screen.nativeElement, 'transform', `scale(${this.newWidth})`);
    // this.renderer.setElementStyle(this.screen.nativeElement, 'transform-origin', `top`);
  }

  decrementTotal() {
    this.apiService.decrementTotal();
    this.rightButton = this.rightButton === 'right' ? 'rightGo' : 'right';
  }

  incrementTotal() {
    this.apiService.incrementTotal();
    this.leftButton = this.leftButton === 'left' ? 'leftGo' : 'left';
  }

  onSwipe(event: any) {
    // console.log('inside swipe');
    this.apiService.currentGame.spectators = 99;
    if (event.deltaX > 0) {
      this.decrementTotal();
    } else {
      this.incrementTotal();
    }
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
