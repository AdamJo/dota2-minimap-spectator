import { Component, Input } from '@angular/core';

import { Players } from '../../../services/index';

@Component({
  selector: 'em-hero-picks',
  template: `
    <div class="hero-picks">
      <div class="hero" *ngFor="let player of players">
        <picture *ngIf="player.hero !== 'None'">
          <source 
            srcset="http://cdn.dota2.com/apps/dota2/images/heroes/{{player.hero}}_hphover.png"
            sizes="100%" media="screen and (min-device-width: 500px)">
          <img src='../../../../assets/img/heroes/{{player.hero}}.png' alt="{{player.hero}}">
        </picture>
        <div
          class="blank"
          *ngIf="player.hero === 'None'">          
        </div>
        <em-player-value
          [playerValue]="ScoreboardSelect(player)"
        ></em-player-value>
      </div>
    </div>
  `,
  styles: [`
    .hero-picks {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      
      position: relative;
    }

    img, .blank {
      border: 1px solid #000;
      width: 82.27px;
      height: 46px;
    }

    .blank {
      margin-bottom: 5px;
    }
  `]
})

export class HeroPicksComponent {
  @Input() players: Players;
  @Input() scoreboardValue: string;

  ScoreboardSelect(player): string {
    if (this.scoreboardValue === 'kills') {
      return `${player['kills']} / ${player['death']} / ${player['assists']}`;
    } else if (this.scoreboardValue === 'last_hits') {
      return `${player['last_hits']} / ${player['denies']}`;
    } else if (this.scoreboardValue === 'None') {
      return `${player['name']}`;
    } else {
      // adds comma if value is a number and greater than 3
      return player[this.scoreboardValue].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
}
