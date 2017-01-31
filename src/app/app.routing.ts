import { NgModule } from '@angular/core';
import { Routes, RouterModule,
  PreloadAllModules
} from '@angular/router';

import { IdlePreload, IdlePreloadModule } from '@angularclass/idle-preload';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'live',
    pathMatch: 'full'
  },
  {
    path: 'all',
    loadChildren: './+expand-matches/expand-matches.module#ExpandMatchesModule'
  },
  {
    path: 'live',
    loadChildren: './+live-game/live-game.module#LiveGameModule'
  },
  {
    path: 'ranked',
    loadChildren: './+ranked-matches/ranked-matches.module#RankedMatchesModule'
  },
  {
    path: 'previous',
    loadChildren: './+previous-matches/previous-matches.module#PreviousMatchesModule'
  },
  {
    path: 'upcoming',
    loadChildren: './+upcoming-matches/upcoming-matches.module#UpcomingMatchesModule'
  },
  {
    path: 'about',
    loadChildren: './+about/about.module#AboutModule'
  },
  {
    path: '**',
    redirectTo: 'live'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      { useHash: false, preloadingStrategy: IdlePreload }
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
