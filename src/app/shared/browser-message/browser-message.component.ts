import { Component } from '@angular/core';

@Component({
  selector: 'sh-browser-message',
  template: `
    <div class="container" >
      <div class="browser-message">
        Alert: Best viewed in CHROME or FIREFOX!
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      min-width: 1102px;
    }
    .browser-message {
      background: #a94442;
      font-size: 1.5rem;

      text-align: center;
      line-height: 60px;

      white-space: nowrap;
      overflow: hidden;

      width: 1102px;

      animation: remove 3s ease-out forwards;
      animation-delay: 5s;
    }

    @keyframes remove {
      from {
        height: 60px
      }
      to {
        height: 0
      }
    }

  `]
})

export class BrowserMessageComponent {}
