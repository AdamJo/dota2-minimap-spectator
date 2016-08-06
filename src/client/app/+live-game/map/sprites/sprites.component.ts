import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-sprites',
  template: `
    <div
      ngClass="d2mh {{heroId}}"
      ></div>
  `,
  styleUrls: ['sprites.component.css', './resources/dota2minimapheroes.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpritesComponent {
  @Input() heroId: string;
  @Input() team: string;
}
