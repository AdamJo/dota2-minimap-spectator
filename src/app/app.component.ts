import { Component } from '@angular/core';
import { ApiService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(public apiService: ApiService) {
    this.apiService.liveGames();
  }
}
