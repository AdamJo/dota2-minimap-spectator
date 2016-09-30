import { Routes } from '@angular/router';
import { LiveGameComponent } from './live-game/index';
import { UpcomingMatchesComponent } from './upcoming-matches/index';
import { ExpandMatchesComponent } from './expand-matches/index';
import { PreviousMatchesComponent } from './previous-matches/index';
import { RankedMatchesComponent } from './ranked-matches/index';

export const routes: Routes = [
  { path: '', redirectTo: 'live', pathMatch: 'full' },
  { path: 'live', component: LiveGameComponent },
  { path: 'expand', component: ExpandMatchesComponent },
  { path: 'upcoming', component: UpcomingMatchesComponent },
  { path: 'previous', component: PreviousMatchesComponent },
  { path: 'ranked', component: RankedMatchesComponent },
  { path: '**', component: LiveGameComponent }
];
