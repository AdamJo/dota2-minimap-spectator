import {
  Component,
  Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-sprites',
  template: `
    <i 
      ngClass="d2mh hero-{{heroId}} {{ team ? 'radiant' : 'dire' }}"
      ></i>
  `,
  styleUrls: ['sprites.component.css', './resources/dota2minimapheroes.css']
})
export class SpritesComponent {
  @Input() heroId: number;
  @Input() team: string;
}
