/* tslint:disable: max-line-length */
import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { APP_DECLERATIONS } from './app.declerations';
import { APP_IMPORTS } from './app.imports';
import { APP_PROVIDERS } from './app.providers';

import 'firebase';
import 'rxjs/add/operator/debounceTime';

describe('App Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        APP_IMPORTS
        ],
      providers: [APP_PROVIDERS, { provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [ AppComponent, APP_DECLERATIONS]
    });
  });

  it('should create instance', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeTruthy();
  }));
});
