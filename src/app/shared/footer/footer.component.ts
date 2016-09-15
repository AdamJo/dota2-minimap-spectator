import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      Minimal Dota 2 Watcher by <a target="_blank" href="https://github.com/AdamJo">AdamJo</a>
      | Live Game Info by <a href="https://wiki.teamfortress.com/wiki/WebAPI#Dota_2" target="_blank">SteamApi</a>
      | Upcoming Matches Info by <a href="http://dailydota2.com/api" target="_blank">DailyDota</a>
    </footer>
  `,
  styles: [
    `
      a {
        color: #d9d9d9;
      }

      a:visited {
        color: #22627E;
      }

      a:active {
        color: #142958;
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

export class FooterComponent {}
