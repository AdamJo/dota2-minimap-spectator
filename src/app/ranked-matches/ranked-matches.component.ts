import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';

import { ApiService } from '../services/index';
import { loadingMmr } from '../../assets/initialLoadData/loadingMmr';
import { MMR } from '../services/index'

@Component({
  selector: 'app-ranked-matches',
  templateUrl: 'ranked-matches.component.html',
  styleUrls: ['ranked-matches.component.scss'],
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
          opacity: .5,
          transform: 'scale(.95)'
        }),
        animate('0.3s ease-in')
      ])
    ])
  ]
})

export class RankedMatchesComponent implements OnInit {

  rankedGames: Array<MMR>;
  games: any;

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  constructor(public apiService: ApiService) {
    this.rankedGames = [loadingMmr];
  }

  ngOnInit() {
    this.apiService.getMmrTop()
      .subscribe(data => {
        this.rankedGames = data
      })
  }
}
