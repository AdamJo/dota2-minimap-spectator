import { Routes } from '@angular/router';
import { LiveGameComponent } from './live-game/index';
import { UpcomingMatchesComponent } from './upcoming-matches/index';


export const routes: Routes = [
  { path: '', component: LiveGameComponent },
  { path: 'Live', component: LiveGameComponent },
  { path: 'Upcoming', component: UpcomingMatchesComponent },
  { path: '**', component: LiveGameComponent }
];
