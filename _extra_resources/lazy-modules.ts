import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LiveGameComponent } from './live-game/index';
import { UpcomingMatchesComponent } from './upcoming-matches/index';
import { ExpandMatchesComponent } from './expand-matches/index';
import { PreviousMatchesComponent } from './previous-matches/index';
import { RankedMatchesComponent } from './ranked-matches/index';

const routes: Routes = [
  { path: '', redirectTo: 'live', pathMatch: 'full' },
  { path: 'previous', loadChildren: "app/previous-matches/previous-matches.module#PreviousMatchesModule" },
  { path: 'expand', loadChildren: "app/expand-matches/expand-matches.module#ExpandMatchesModule" },
  { path: 'live', loadChildren: "app/live-games/live-games.module#LiveGamesModule" },
  { path: 'ranked', loadChildren: "app/ranked-matches/ranked-matches.module#RankedMatchesModule" },
  { path: 'upcoming', loadChildren: "app/upcoming-matches/upcoming-matches.module#UpcomingMatchesModule" },
  { path: '**', loadChildren: "app/live-games/live-games.module#LiveGamesModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
