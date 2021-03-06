import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-meta-info',
  templateUrl: 'meta-info.component.html',
  styleUrls: ['meta-info.component.scss']
})

export class MetaInfoComponent {
  @Input() gameTime: number;
  @Input() spectators: number;
  @Input() radiantScore: number;
  @Input() direScore: number;
  @Input() mmr: number;

  gameTimeCalculator(time: number): string {
    let minutes = Math.floor(time / 60);
    let seconds = '00' + Math.floor(time % 3600 % 60);

    seconds = seconds.substring(seconds.length - 2);

    return `${minutes}:${seconds}`;
  }
}
