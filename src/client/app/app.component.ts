import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { ApiService } from './services/index'
import { FirebaseObjectObservable } from 'angularfire2'
import { MapComponent } from './+map/index'
/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'root-app',
  viewProviders: [
    HTTP_PROVIDERS
  ],
  templateUrl: 'app.component.html',
  directives: [
    ROUTER_DIRECTIVES,
    MapComponent
  ],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  radiant : any;
  dire : any;
  firstCheckDone = false;
  currentGame: FirebaseObjectObservable<any>

  constructor(private apiService: ApiService ) {
    this.currentGame = apiService.grabCurrentGame()
    this.currentGame.subscribe(data => {
      
      apiService.sortScoreboard(data);
      this.radiant = apiService.radiant
      this.dire = apiService.dire
    })
  }

  ngOnInit() {}
}