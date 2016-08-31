import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/index';

@Component({
  moduleId: module.id,
  selector: 'app-upcoming-matches',
  templateUrl: 'upcoming-matches.component.html'
})
export class UpcomingMatchesComponent implements OnInit {
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    //  this.apiService.getUpcomingGames()
  }
}
