import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-respawn',
  template: `
    <div class="respawn"><div class="value">{{playerValue}}</div></div>
    `,
  styles: [`
    .respawn {
      border: 1px solid #000;
      background-color: rgba(0, 0, 0, .50);
      height: 46px;
      width: 82.27px;
      position: absolute;
      top: 0;
    }

    .value {

      overflow: hidden;
      text-overflow: clipped;
      white-space: nowrap;
      max-width: 82.27px;
      min-width: 82.27px;

      color: #ddd;
      font-size: .8rem;
      height: 46px;
      vertical-align: middle;
      text-align: center;
      display: table-cell;
    }
  `]
})

export class HeroRespawnComponent {
  @Input() playerValue: number;

  ngChanges() {
    console.log(this.playerValue);
  }
}
