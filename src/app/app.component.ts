import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/index';

@Component({
  selector: 'app-root',
  template: `
    <sh-browser-message
      *ngIf='browserCheck'
    ></sh-browser-message>

    <sh-nav></sh-nav>

    <router-outlet></router-outlet>

    <sh-footer></sh-footer>
  `
})

export class AppComponent implements OnInit {
  browserCheck: boolean = false;

  constructor(public apiService: ApiService) {
    this.apiService.liveGames();
  }
  ngOnInit() {
    if (!this.apiService.browser) {
      this.browserCheck = true;
    }
  }
}
