import {
  Component,
  Input,
  OnInit
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
export class SpritesComponent implements OnInit {
  @Input() heroId: number;
  @Input() team: string;

  constructor() {
    console.log('const - SpritesComponent');
  }
  ngOnInit() {
    console.log('ngOnInit - SpritesComponent');
  }
}
