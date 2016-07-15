import {
  Component,
  Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-sprites',
  template: `<i ngClass="d2mh hero-{{heroId}}"></i>`,
  styleUrls: ['./resources/dota2minimapheroes.css']
})
export class SpritesComponent {
  @Input() heroId: number;

  constructor() {
    
  }

}
