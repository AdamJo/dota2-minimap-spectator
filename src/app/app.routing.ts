import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'live', pathMatch: 'full' },
  { path: 'all', loadChildren: "./+expand-matches/expand-matches.module#ExpandMatchesModule" },
  { path: 'live', loadChildren: "./+live-game/live-game.module#LiveGameModule" },
  { path: 'ranked', loadChildren: "./+ranked-matches/ranked-matches.module#RankedMatchesModule" },
  { path: 'previous', loadChildren: "./+previous-matches/previous-matches.module#PreviousMatchesModule" },
  { path: 'upcoming', loadChildren: "./+upcoming-matches/upcoming-matches.module#UpcomingMatchesModule" },
  // TODO: currently broken, fix in master waiting on release
  // { path: '**', loadChildren: "./live-game/live-game.module#LiveGameModule" } 
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes
      // { preloadingStrategy: PreloadAllModules } // does not work with AoT
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }