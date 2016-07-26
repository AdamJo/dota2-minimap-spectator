import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ApiService } from './services/index';
import { FirebaseObjectObservable } from 'angularfire2';

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
  ]
})
export class AppComponent {
  currentGame: FirebaseObjectObservable<any>;
  checked = false;

  constructor(private apiService: ApiService ) {
    this.currentGame = apiService.grabCurrentGame();
    this.currentGame.subscribe(data => {
      apiService.sortScoreboard(data);
    });
  }
}
