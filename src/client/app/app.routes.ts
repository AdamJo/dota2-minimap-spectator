import { provideRouter, RouterConfig } from '@angular/router';

import { LiveGameComponent } from './+live-game/index';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/live',
    pathMatch: 'full'
  },
  {
    path: 'live',
    component: LiveGameComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
