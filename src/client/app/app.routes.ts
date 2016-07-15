import { provideRouter, RouterConfig } from '@angular/router';

//import { SpritesRoutes } from './+sprites/index';
import { MapRoutes } from './+map/index';

const routes: RouterConfig = [
  //...SpritesRoutes,
  ...MapRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
