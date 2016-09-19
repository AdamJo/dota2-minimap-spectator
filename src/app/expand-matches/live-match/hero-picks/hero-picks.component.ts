import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-hero-picks',
  template: `
    <div class="hero-picks">
      <div *ngFor="let player of players">
        <img
          *ngIf="player.hero !== 'None'"
          src="http://cdn.dota2.com/apps/dota2/images/heroes/{{player.hero}}_hphover.png"
          alt="{{player.hero}}">
        <div
          class="blank"
          *ngIf="player.hero === 'None'">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-picks {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
    }

    img, .blank {
      border: 1px solid $black;
      width: 82.27px;
      height: 46px;
    }
  `]
})
export class HeroPicksComponent {
  @Input() players: any;
}
