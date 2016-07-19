import { Injectable } from '@angular/core'
import { provideRouter, RouterConfig, Resolve } from '@angular/router';

import { MapRoutes } from './+map/index';

const routes: RouterConfig = [
  ...MapRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
