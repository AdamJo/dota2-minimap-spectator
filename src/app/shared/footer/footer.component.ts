import { Component } from '@angular/core';

@Component({
  selector: 'sh-footer',
  template: `
    <footer>
      <a [routerLink]="['/about']"
        routerLinkActive="active">
          About &
        <span class="donations">Donations</span></a>
    </footer>
  `,
  styles: [
    `
      a {
        color: #d9d9d9;
      }

      a:active {
        color: #142958;
      }

      a:visited {
        color: #22627E;
      }

      footer {
        background: transparent;
        color: #d9d9d9;
        margin-top: 5px;
        min-width: 1100px;
        text-align: center;
      }

      .donations {
        color: #c18d0b
      }

      a:active > .donations {
        color: #142958;
      }

      a:visited > .donations {
        color: #c18d0b;
      }
    `
  ]
})
export class FooterComponent {}
