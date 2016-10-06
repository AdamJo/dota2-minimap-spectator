import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveGameComponent } from './live-game/index';
import { UpcomingMatchesComponent } from './upcoming-matches/index';
import { ExpandMatchesModule } from './expand-matches/expand-matches.module';
import { PreviousMatchesComponent } from './previous-matches/index';
import { RankedMatchesComponent } from './ranked-matches/index';

import { LiveGameModule } from './live-game/live-game.module'


const routes: Routes = [
  { path: '', redirectTo: 'live', pathMatch: 'full' },
  { path: 'all', loadChildren: "app/expand-matches/expand-matches.module#ExpandMatchesModule" },
  { path: 'live', loadChildren: "app/live-game/live-game.module#LiveGameModule" },
  { path: 'ranked', loadChildren: "app/ranked-matches/ranked-matches.module#RankedMatchesModule" },
  { path: 'previous', loadChildren: "app/previous-matches/previous-matches.module#PreviousMatchesModule" },
  { path: 'upcoming', loadChildren: "app/upcoming-matches/upcoming-matches.module#UpcomingMatchesModule" },
  { path: '**', loadChildren: "app/live-game/live-game.module#LiveGameModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
