import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { RouterModule } from '@angular/router';

// angular2-starter
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { ENV_PROVIDERS } from './environment';
import { AppState, InteralStateType } from './app.service';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ApiService } from './services/index';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { routes } from './app.routes';

import { ExpandMatchesModule } from './expand-matches/expand-matches.module'
import { LiveGameModule } from './live-game/live-game.module';
import { SharedModule } from './shared/shared.module';
import { UpcomingMatchesModule } from './upcoming-matches/upcoming-matches.module';
import { PreviousMatchesModule } from './previous-matches/previous-matches.module';
import { RankedMatchesModule } from './ranked-matches/ranked-matches.module';


// TODO: this fixes the error "Cannot find namespace 'firebase'."
//       Need for applications since errors fail build process
import 'firebase';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

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
    RouterModule.forRoot(routes)
  ],
  providers: [
    ApiService,
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})

export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
