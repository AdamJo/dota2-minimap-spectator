import { Component } from '@angular/core';

@Component({
  selector: 'my-not-found',
  template: '<div><h3>Error 404: Page Not Found</h3><div>',
  styles: [`
    div {
      display: flex;
      justify-content: center;
      height: 600px;
    }
    `]
})

export class PageNotFoundComponent { }