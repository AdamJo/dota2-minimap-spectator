import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { IdlePreload, IdlePreloadModule } from '@angularclass/idle-preload';

const firebaseConfig = {
  apiKey: 'AIzaSyAgULOLZZOd5IHc5ABgOIm8_dTsrunyYRs',
  authDomain: 'dota2-project-c0fd5.firebaseapp.com',
  databaseURL: 'https://dota2-project-c0fd5.firebaseio.com',
  storageBucket: 'dota2-project-c0fd5.appspot.com',
  messagingSenderId: '158994092281'
};

export const APP_IMPORTS = [
  AngularFireModule.initializeApp(firebaseConfig),
  SharedModule,
  IdlePreloadModule.forRoot(),
  AppRoutingModule
];
