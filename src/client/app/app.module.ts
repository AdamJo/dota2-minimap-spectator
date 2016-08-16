import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LiveGameComponent } from './+live-game/live-game.component';
import { ApiService } from './services/index';

import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyAgULOLZZOd5IHc5ABgOIm8_dTsrunyYRs',
  authDomain: 'dota2-project-c0fd5.firebaseapp.com',
  databaseURL: 'https://dota2-project-c0fd5.firebaseio.com',
  storageBucket: 'dota2-project-c0fd5.appspot.com'
};

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  // ],
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ LiveGameComponent, AppComponent ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>',
    ApiService
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
