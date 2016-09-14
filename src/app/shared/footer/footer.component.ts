import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      Made by <a href="https://github.com/AdamJo">AdamJo</a>
    </footer>
  `,
  styles: [
    `
      a {
        color: #d9d9d9;

        &:active {
          color: #142958;
        }

        &:visited {
          color: #22627E;
        }
      }
      footer {
        background: #000;
        color: #d9d9d9;
        margin-top: 10px;
        text-align: center;
      }
    `
  ]
})

export class FooterComponent {}
