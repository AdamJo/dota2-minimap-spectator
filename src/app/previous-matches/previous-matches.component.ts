import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { ApiService } from '../services/index';

@Component({
  selector: 'app-previous-matches',
  templateUrl: 'previous-matches.component.html',
  styleUrls: ['./previous-matches.component.scss'],
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

export class PreviousMatchesComponent implements OnInit {
  previousMatches: any;
  sortedMatches: any;
  regions: Array<string>;
  regionValue: string;

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  constructor(private apiService: ApiService) {
    this.regionValue = 'disabled';
    this.regions = [];
    this.sortedMatches = [];
  }

  ngOnInit() {
    this.apiService.getPreviousGames()
      .subscribe((data: any) => {
        this.previousMatches = data;
        this.getRegions();
        if (this.regionValue === 'disabled') {
          this.switchRegionValue(this.regionValue)
        }
        if (this.previousMatches && this.previousMatches.length !== this.sortedMatches.length) {
          let oldRegion = this.regionValue;
          this.regionValue = '';
          this.switchRegionValue(oldRegion)
        }
      });
  }

  sliceMatches(matches) {
    if (matches.length > 52) {
      return matches.slice(0, 52);
    } else {
      return matches;
    }
  }

  // toggles menu and scorebaord
  switchRegionValue(userRegion) {
    if (userRegion === 'disabled') {
      this.sortedMatches = this.sliceMatches(this.previousMatches);
    }
    else if (this.regionValue !== userRegion) {
      this.sortedMatches = this.previousMatches;
      this.sortedMatches = this.sortedMatches.filter((data:any) => {
        return data['cluster_name'] === userRegion;  
      })
      this.sortedMatches = this.sliceMatches(this.sortedMatches);
      this.regionValue = userRegion;
    } else {
      console.log('here')
      this.sortedMatches = this.sliceMatches(this.previousMatches);
      this.regionValue = '';
    }
  }

  getRegions() {
    this.regions = this.previousMatches.map((data:any) => {
      return data['cluster_name'];
    })
    this.regions = Array.from(new Set(this.regions));
    this.regions.sort();
  }
}
