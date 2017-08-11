import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { APP_DECLARATIONS } from './app.declarations';
import { APP_IMPORTS } from './app.imports';
import { APP_PROVIDERS } from './app.providers';

import 'firebase';
import 'rxjs/add/operator/debounceTime';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ APP_IMPORTS ],
      providers: [ APP_PROVIDERS, { provide: APP_BASE_HREF, useValue: '/' } ],
      declarations: [ AppComponent, APP_DECLARATIONS ]
    }).compileComponents();
  }));

  it('should create the app', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
