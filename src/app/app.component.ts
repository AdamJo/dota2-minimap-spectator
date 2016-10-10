import { Component } from '@angular/core';
import { ApiService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  mobileCheck = false;

  // (TODO): check scrreen width / height,
  // if lower than initial mobile message ( should only be mobile with that size
  constructor(public apiService: ApiService) {
    this.apiService.liveGames();
  }

  ngOnInit() {
    if (window.innerWidth <= 600) {
      this.mobileCheck = true;
    }
  }

  yeup(){
    console.log('yeup')
  }
}
