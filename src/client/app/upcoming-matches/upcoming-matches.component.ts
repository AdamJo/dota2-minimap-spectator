import { Component, DoCheck } from '@angular/core';
import { ApiService } from '../services/index';


@Component({
  moduleId: module.id,
  selector: 'app-upcoming-matches',
  templateUrl: 'upcoming-matches.component.html',
  styleUrls: ['upcoming-matches.component.css']
})
export class UpcomingMatchesComponent {

  upcomingMatches: any;
  status: string;


  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.upcomingMatches = this.apiService.upcomingMatches;
    this.upcomingMatches = this.apiService.upcomingMatches
    this.apiService.upcomingGames
    .subscribe((data:any) => {
      this.upcomingMatches = data;
      if (this.upcomingMatches.length === 0) {
        this.status = 'No scheduled games'
      } else {
        this.status = '';
      }
    }) 
  }
}
