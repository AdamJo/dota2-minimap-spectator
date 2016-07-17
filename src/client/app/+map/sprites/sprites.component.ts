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
      ></i>`,
  styleUrls: ['./resources/dota2minimapheroes.css'],
  styles: [`
    .radiant {
      background: rgba(170,197,107, 1);
      border-radius: 25px;
    }
    .dire {
      background: rgba(120,51,46, 1);
      border-radius: 25px;
    }
  `]
})
export class SpritesComponent {
  @Input() heroId: number;
  @Input() team: string;

  constructor() {

  }
  ngOnInit() {  
  }
}
