import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sprites',
  template: `
    <div
      ngClass="d2mh {{heroId}}"
      ></div>
  `,
  styleUrls: ['./resources/dota2minimapheroes.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpritesComponent {
  @Input() heroId: string;
  @Input() team: string;
}
