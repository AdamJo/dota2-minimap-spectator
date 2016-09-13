import { Routes } from '@angular/router';
import { LiveGameComponent } from './live-game/index';
import { UpcomingMatchesComponent } from './upcoming-matches/index';


export const routes: Routes = [
  { path: '', component: LiveGameComponent },
  { path: 'upcoming', component: UpcomingMatchesComponent },
  { path: '**', component: LiveGameComponent }
];
