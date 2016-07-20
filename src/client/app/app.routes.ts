import { provideRouter, RouterConfig } from '@angular/router';

import { MapRoutes } from './+map/index';

const routes: RouterConfig = [
  ...MapRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
