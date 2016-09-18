import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { ApiService } from '../services/index';

import { Router } from '@angular/router';

@Component({
  selector: 'app-expand-matches',
  templateUrl: 'expand-matches.component.html',
  styleUrls: ['./expand-matches.component.scss'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'scale(1)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(.95)'
        }),
        animate('0.2s ease-in')
      ])
    ])
  ]
})

export class ExpandMatchesComponent {

  allGames: any;
  status: string;


  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  constructor(private apiService: ApiService, private router: Router) {}

  SwitchToGame($event) {
    this.apiService.SwitchToGame($event.index);
    this.router.navigate(['']);
  }
}
