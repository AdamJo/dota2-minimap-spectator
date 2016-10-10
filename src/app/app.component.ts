import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  mobileCheck: boolean = false;

  constructor(public apiService: ApiService) {
    this.apiService.liveGames();
  }

  ngOnInit() {
    if (window.innerWidth <= 600) {
      this.mobileCheck = true;
    }
  }
}
