import { Component, ComponentResolver, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { SpyLocation } from '@angular/common/testing';
import {
  beforeEachProviders,
  async,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import {
  UrlSerializer,
  DefaultUrlSerializer,
  RouterOutletMap,
  Router,
  ActivatedRoute,
  RouterConfig
} from '@angular/router';

import { AppComponent } from './app.component';
import { SpritesComponent } from './+sprites/sprites.component';

export function main() {

  describe('App component', () => {
    // Disable old forms
    let providerArr: any[];

    beforeEach(() => { providerArr = [disableDeprecatedForms(), provideForms()]; });

    // Support for testing component that uses Router
    beforeEachProviders(() => {
      let config:RouterConfig = [
        {path: '', component: SpritesComponent},
      ];

      return [
        RouterOutletMap,
        {provide: UrlSerializer, useClass: DefaultUrlSerializer},
        {provide: Location, useClass: SpyLocation},
        {
          provide: Router,
          useFactory: (
            resolver:ComponentResolver,
            urlSerializer:UrlSerializer,
            outletMap:RouterOutletMap,
            location:Location,
            injector:Injector) => {
            const r = new Router(TestComponent, resolver, urlSerializer, outletMap, location, injector, config);
//            r.initialNavigation();
            return r;
          },
          deps: [ComponentResolver, UrlSerializer, RouterOutletMap, Location, Injector]
        },
        {provide: ActivatedRoute, useFactory: (r:Router) => r.routerState.root, deps: [Router]},
      ];
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
