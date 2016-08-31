import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// import { UpcomingMatchesComponent } from './upcoming-matches/index';

import { ApiService } from './services/index';

import { LiveGameModule } from './live-game/live-game.module';
import { UpcomingMatchesModule } from './upcoming-matches/upcoming-matches.module';
import { SharedModule } from './shared/shared.module';

import { routes } from './app.routes';

//This is needed to remove namespace errors for windows version.
import 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAgULOLZZOd5IHc5ABgOIm8_dTsrunyYRs',
  authDomain: 'dota2-project-c0fd5.firebaseapp.com',
  databaseURL: 'https://dota2-project-c0fd5.firebaseio.com',
  storageBucket: 'dota2-project-c0fd5.appspot.com'
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    LiveGameModule,
    UpcomingMatchesModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent],
  providers: [
    ApiService,
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
