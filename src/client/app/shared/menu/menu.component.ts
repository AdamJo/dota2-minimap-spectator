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
      state('true', style({
        opacity: 1
      })),
      state('false', style({
        opacity: .8
      })),
      transition('true <=> false', animate('750ms ease-in'))
    ])
  ]
})

export class MenuComponent {
  @Input() apiStatus: boolean;
  menuOpen: boolean;

  constructor() {
    this.menuOpen = true;
  }

  toggle() {
    this.menuOpen = this.menuOpen ? false : true;
  }
}
