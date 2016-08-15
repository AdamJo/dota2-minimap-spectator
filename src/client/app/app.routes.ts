import { Routes } from '@angular/router';

import { LiveGameComponent } from './+live-game/index';

export const routes: Routes = [
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
