import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ApiService } from './services/index';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';

import { ExpandMatchesModule } from './expand-matches/expand-matches.module'
import { LiveGameModule } from './live-game/live-game.module';
import { SharedModule } from './shared/shared.module';
import { UpcomingMatchesModule } from './upcoming-matches/upcoming-matches.module';
import { PreviousMatchesModule } from './previous-matches/previous-matches.module';
import { RankedMatchesModule } from './ranked-matches/ranked-matches.module';


// TODO: this fixes the error "Cannot find namespace 'firebase'."
//       Need for applications since errors fail build process
import 'firebase';

import 'rxjs/add/operator/debounceTime';

const firebaseConfig = {
  apiKey: 'AIzaSyAgULOLZZOd5IHc5ABgOIm8_dTsrunyYRs',
  authDomain: 'dota2-project-c0fd5.firebaseapp.com',
  databaseURL: 'https://dota2-project-c0fd5.firebaseio.com',
  storageBucket: 'dota2-project-c0fd5.appspot.com'
};

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    LiveGameModule,
    UpcomingMatchesModule,
    SharedModule,
    ExpandMatchesModule,
    PreviousMatchesModule,
    RankedMatchesModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ]
})

export class AppModule {}
