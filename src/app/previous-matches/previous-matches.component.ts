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
  regionInactive: boolean;

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
    if (this.regionInactive) {
      this.regionValue = ''
      this.regionInactive = false;
    }

    if (userRegion === 'disabled') {
      // initial load
      this.sortedMatches = this.sliceMatches(this.previousMatches);
    }
    else if (this.regionValue !== userRegion) {
      // new region searched
      this.sortedMatches = this.previousMatches;
      this.sortedMatches = this.sortedMatches.filter((data:any) => {
        return data['cluster_name'] === userRegion;  
      })
      this.sortedMatches = this.sliceMatches(this.sortedMatches);
      this.regionValue = userRegion;
    } else {
      // remove region, default
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

  fuzzySearch(event: string) {
    this.regionInactive = true;
    let fuzzyMatches = this.previousMatches.filter((data:any) => {
        return this.fuzzysearch(event.toLowerCase(), data.dire_name.toLowerCase()) || this.fuzzysearch(event.toLowerCase(), data.radiant_name.toLowerCase())
    })
    this.sortedMatches = this.sliceMatches(fuzzyMatches);
  }

  // https://github.com/bevacqua/fuzzysearch
  fuzzysearch (needle: string, haystack: string): boolean {
    const hlen = haystack.length;
    const nlen = needle.length;
    if (nlen > hlen) {
      return false;
    }
    if (nlen === hlen) {
      return needle === haystack;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
      var nch = needle.charCodeAt(i);
      while (j < hlen) {
        if (haystack.charCodeAt(j++) === nch) {
          continue outer;
        }
      }
      return false;
    }
    return true;
  }
}
