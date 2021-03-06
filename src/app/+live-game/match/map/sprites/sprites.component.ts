import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lg-sprites',
  template: `
    <div
      ngClass="d2mh {{heroId}}"
      ></div>
  `,
  styleUrls: ['./resources/dota2minimapheroes.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpritesComponent {
  @Input() heroId: string;
  @Input() team: string;
}
