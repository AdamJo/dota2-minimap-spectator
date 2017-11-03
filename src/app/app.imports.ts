import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAgULOLZZOd5IHc5ABgOIm8_dTsrunyYRs',
  authDomain: 'dota2-project-c0fd5.firebaseapp.com',
  databaseURL: 'https://dota2-project-c0fd5.firebaseio.com'
};

export const APP_IMPORTS = [
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule,
  SharedModule,
  AppRoutingModule
];
