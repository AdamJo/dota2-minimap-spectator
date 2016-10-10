import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { ApiService, UpcomingGames } from '../services/index';

@Component({
  selector: 'um-upcoming-matches',
  templateUrl: 'upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css'],
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

export class UpcomingMatchesComponent implements OnInit {

  upcomingMatches: Array<UpcomingGames>;
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

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUpcomingGames()
      .subscribe(games => this.upcomingMatches = games)
  }
}