import { Component } from '@angular/core';
import { ApiService } from './services/index';
// import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'root-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  constructor(private apiService: ApiService) {
    this.apiService.main();
  }
}
