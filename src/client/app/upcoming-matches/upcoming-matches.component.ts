import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/index';

import { testData } from '../assets/testData';


@Component({
  moduleId: module.id,
  selector: 'app-upcoming-matches',
  templateUrl: 'upcoming-matches.component.html',
  styleUrls: ['upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {

  upcomingMatches: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.upcomingGames
    .debounceTime(300)
    .subscribe((data:any) => {
      this.upcomingMatches = data;
      if (this.upcomingMatches.length === 0) {
        this.upcomingMatches = testData;
      }
      console.log(this.upcomingMatches);
    });
  }
}
