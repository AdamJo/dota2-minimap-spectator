import { Component, Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  animations: [
    trigger('menu', [
      state('closed', style({
        borderBottom: '17px double black'
      })),
      state('open', style({
        borderBottom: '6px solid black'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('200ms ease-out'))
    ])
  ]
})

export class MenuComponent {
  @Input() apiStatus: boolean;
  menuOption: string;

  constructor() {
    this.menuOption = 'closed';
  }

  toggle() {
    this.menuOption = this.menuOption === 'open' ? 'closed' : 'open';
  }
}
