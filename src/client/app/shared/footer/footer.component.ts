import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  template: `
    <footer>
      Made by <a href="https://github.com/AdamJo">AdamJo</a>
    </footer>
  `,
  styles: [
    `
      a {
        color: #fff;

        &:active {
          color: #777;
        }

        &:visited {
          color: #555;
        }
      }
      footer {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        background: #000;
        color: #fff;
        margin-top: 10px;
      }
    `
  ]
})

export class FooterComponent {}
