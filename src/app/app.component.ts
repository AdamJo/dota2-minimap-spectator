import { Component } from '@angular/core';
import { ApiService } from './services/index';

@Component({
  selector: 'root-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(public apiService: ApiService) {
    this.apiService.liveGames();
    this.apiService.newGames();
    this.apiService.oldGames();
  }
}
