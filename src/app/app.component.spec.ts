import {
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { ApiService } from './services/index';
import { AngularFireModule, AngularFire } from 'angularfire2';

import 'firebase';
import 'rxjs/add/operator/debounceTime';

const firebaseConfig = {
  apiKey: 'AIzaSyAgULOLZZOd5IHc5ABgOIm8_dTsrunyYRs',
  authDomain: 'dota2-project-c0fd5.firebaseapp.com',
  databaseURL: 'https://dota2-project-c0fd5.firebaseio.com',
  storageBucket: 'dota2-project-c0fd5.appspot.com'
};

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireModule.initializeApp(firebaseConfig),
    ],
    providers: [
      ApiService,
      AngularFire,
      AppComponent
    ]}));
});
