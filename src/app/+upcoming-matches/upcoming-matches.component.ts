import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ApiService, UpcomingGames } from '../services/index';

@Component({
  selector: 'um-upcoming-matches',
  templateUrl: 'upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.scss'],
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
  status: boolean;

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
      .subscribe(games => {
        this.upcomingMatches = games;
        if (this.upcomingMatches.length > 0) {
          this.status = true;
        } else {
          this.status = false;
        }
      });
  }
}
