import { Component } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { TestComponentBuilder } from '@angular/compiler/testing';

import {
  addProviders,
  async,
  inject
} from '@angular/core/testing';
import {
  RouterConfig
} from '@angular/router';

import {provideFakeRouter} from '../testing/router/router-testing-providers';

import { AppComponent } from './app.component';
import { SpritesComponent } from './+map/sprites/sprites.component';

export function main() {

  describe('App component', () => {
    // Disable old forms
    let providerArr: any[];

    beforeEach(() => {
      providerArr = [disableDeprecatedForms(), provideForms()];

      // Support for testing component that uses Router
      let config:RouterConfig = [
        {path: '', component: SpritesComponent},
      ];

      addProviders([
        provideFakeRouter(TestComponent, config)
      ]);
    });

    it('should build without a problem',
      async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        tcb.overrideProviders(TestComponent, providerArr)
          .createAsync(TestComponent)
          .then((fixture) => {
            expect(fixture.nativeElement.innerText.indexOf('HOME')).toBeTruthy();
          });
      })));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<root-app></sd-app>',
  directives: [AppComponent]
})
class TestComponent {
}
