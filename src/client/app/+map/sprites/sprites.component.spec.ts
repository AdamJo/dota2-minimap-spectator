import { Component, provide } from '@angular/core';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  HTTP_PROVIDERS
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { SpritesComponent } from './sprites.component';

export function main() {
  describe('Home component', () => {
    // Disable old forms
    let providerArr: any[];

    beforeEach(() => { providerArr = [disableDeprecatedForms(), provideForms()]; });

    it('should work',
      inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.overrideProviders(TestComponent, providerArr)
          .createAsync(TestComponent)
          .then((rootTC: any) => {
            rootTC.detectChanges();
          });
      }));
  });
}

@Component({
  providers: [
    HTTP_PROVIDERS,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
  ],
  selector: 'test-cmp',
  template: '<sd-home></sd-home>',
  directives: [SpritesComponent]
})
class TestComponent {}
