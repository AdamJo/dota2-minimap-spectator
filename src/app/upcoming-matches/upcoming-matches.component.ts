import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { ApiService } from '../services/index';

@Component({
  selector: 'app-upcoming-matches',
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

  upcomingMatches: any;
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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.upcomingMatches = this.apiService.upcomingMatches;
    this.apiService.upcomingGames
      .subscribe((data: any) => {
        this.upcomingMatches = data;
        if (this.upcomingMatches.length === 0) {
          this.status = 'No scheduled games';
        } else {
          this.status = '';
        }
      });
  }
}
