import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LiveGameComponent } from './live-game/live-game.component';
import { MenuComponent, ButtonInfoComponent } from './shared/index';
import { ApiService } from './services/index';

//This is needed to remove namespace errors for windows version.
import 'firebase';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

const firebaseConfig = {
  apiKey: 'AIzaSyAgULOLZZOd5IHc5ABgOIm8_dTsrunyYRs',
  authDomain: 'dota2-project-c0fd5.firebaseapp.com',
  databaseURL: 'https://dota2-project-c0fd5.firebaseio.com',
  storageBucket: 'dota2-project-c0fd5.appspot.com'
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    LiveGameComponent,
    ButtonInfoComponent,
    MenuComponent
  ],
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
