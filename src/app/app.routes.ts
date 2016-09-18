import { Routes } from '@angular/router';
import { LiveGameComponent } from './live-game/index';
import { UpcomingMatchesComponent } from './upcoming-matches/index';
import { ExpandMatchesComponent } from './expand-matches/index';

export const routes: Routes = [
  { path: '', component: LiveGameComponent },
  { path: 'Expand', component: ExpandMatchesComponent },
  { path: 'Upcoming', component: UpcomingMatchesComponent },
  { path: '**', component: LiveGameComponent }
];
