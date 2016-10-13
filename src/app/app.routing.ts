import { NgModule } from '@angular/core';
import { Routes, RouterModule,
  PreloadAllModules
} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

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
    path: '404',
    component: PageNotFoundComponent
  }
  // TODO: currently broken, still broken as of 2.1.0, https://github.com/angular/angular/pull/12254
  // forwarding to PageNotFoundComponent until it is fixed: redirectTo: 'live'
  , {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
