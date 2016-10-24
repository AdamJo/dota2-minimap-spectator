import { Component } from '@angular/core';

@Component({
  selector: 'sh-footer',
  template: `
    <footer>
      Minimal Dota 2 Watcher by 
      <a target="_blank" href="https://github.com/AdamJo">AdamJo</a>
      | Live Game Info by 
      <a href="https://wiki.teamfortress.com/wiki/WebAPI#Dota_2" target="_blank">SteamApi</a>
      | Upcoming Matches Info by
      <a href="http://dailydota2.com/api" target="_blank">DailyDota</a>
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
        background: #000;
        color: #d9d9d9;
        margin-top: 10px;
        min-width: 1100px;
        text-align: center;
      }
    `
  ]
})
// TODO replace SteamApi with Donate (stripe/paypal/bitcoin) 
export class FooterComponent {}
