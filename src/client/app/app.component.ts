import { Component } from '@angular/core';
import { ApiService } from './services/index';

@Component({
  moduleId: module.id,
  selector: 'root-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  constructor(public apiService: ApiService) {
    this.apiService.main();
  }
}
