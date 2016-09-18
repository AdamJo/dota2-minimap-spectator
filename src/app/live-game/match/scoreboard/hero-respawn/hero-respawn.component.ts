import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-respawn',
  template: '<div class="respawn"><div>{{respawn}}</div></div>',
  styles: [`
    .respawn {
      background: black;
      opacity: 0.75;
      height: 46px;
      width: 82.27px;
      position: absolute;
      left: 3px;
    }

    .respawn div {
      height: 46px;
      width: 82.27px;
      vertical-align: middle;
      text-align: center;
      background: #000;
      display: table-cell;
    }
  `]
})

export class HeroRespawnComponent {
  @Input() respawn: number;
}
