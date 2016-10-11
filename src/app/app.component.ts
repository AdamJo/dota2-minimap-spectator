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
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.mobileCheck = true;
    }
  }
}
