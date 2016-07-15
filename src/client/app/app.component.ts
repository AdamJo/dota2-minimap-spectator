import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

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
  ],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  constructor() {}
}