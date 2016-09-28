import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-picks',
  template: `
    <div class="hero-picks">
      <div class="hero" *ngFor="let player of players">
        <img
          *ngIf="player.hero !== 'None'"
          src="http://cdn.dota2.com/apps/dota2/images/heroes/{{player.hero}}_hphover.png"
          alt="{{player.hero}}">
        <div
          class="blank"
          *ngIf="player.hero === 'None'">          
        </div>
        <app-player-value
          [playerValue]="ScoreboardSelect(player)"
        ></app-player-value>
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
  @Input() players: any;
  @Input() scoreboardValue: any;

  ScoreboardSelect(player) {
    if (this.scoreboardValue === "kills") {
      return `${player['kills']} / ${player['assists']} / ${player['death']}`
    }
    else if (this.scoreboardValue === "last_hits") {
      return `${player['last_hits']} / ${player['denies']}`
    }
    else if (this.scoreboardValue === "disabled") {
      return `${player['name']}`
    }
    // else if (this.scoreboardValue === "disabled") {
    //   return this.scoreboardValue
    // }
    else {
      //adds comma if value is a number and greater than 3
      return player[this.scoreboardValue].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
}
