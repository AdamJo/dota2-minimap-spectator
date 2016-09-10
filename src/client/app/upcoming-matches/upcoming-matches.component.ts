import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/index';

import { testData } from '../assets/testData';


@Component({
  moduleId: module.id,
  selector: 'app-upcoming-matches',
  templateUrl: 'upcoming-matches.component.html'
})
export class UpcomingMatchesComponent implements OnInit {
  newGames: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.upcomingGames
    .debounceTime(300)
    .subscribe((data:any) => {
      this.newGames = data;
      if (this.newGames.length === 0) {
        this.newGames = testData;
      }
      console.log(this.newGames);
    });
  }
}
