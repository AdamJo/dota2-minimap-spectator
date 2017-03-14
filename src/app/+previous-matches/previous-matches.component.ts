import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ApiService } from '../services/index';
import { MatchHistory } from '../services/index';

import { loadingPreviousGame } from '../../assets/initialLoadData/loadingPreviousGame';

@Component({
  selector: 'pm-previous-matches',
  templateUrl: 'previous-matches.component.html',
  styleUrls: ['./previous-matches.component.css'],
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
  @ViewChild('team') teamInput: ElementRef;
  @ViewChild('league') leagueInput: ElementRef;
  previousMatches: Array<MatchHistory>;
  sortedMatches: Array<MatchHistory>;
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

  constructor(public apiService: ApiService) {
    this.regionValue = 'disabled';
    this.regions = [];
    this.sortedMatches = [loadingPreviousGame];
  }

  ngOnInit() {
    this.apiService.getPreviousGames()
      .subscribe((data: any) => {
        this.previousMatches = data;
        this.getRegions();
        if (this.regionValue === 'disabled') {
          this.switchRegionValue(this.regionValue);
        }
        if (this.previousMatches && this.previousMatches.length !== this.sortedMatches.length) {
          let oldRegion = this.regionValue;
          this.regionValue = '';
          this.switchRegionValue(oldRegion);
        }
      });
  }

  sliceMatches(matches): Array<MatchHistory> {
    if (matches.length > 52) {
      return matches.slice(0, 52);
    } else {
      return matches;
    }
  }

  // toggles menu and scorebaord
  switchRegionValue(userRegion) {
    this.leagueInput.nativeElement.value = null;
    this.teamInput.nativeElement.value = null;

    if (this.regionInactive) {
      this.regionValue = '';
      this.regionInactive = false;
    }

    if (userRegion === 'disabled') {
      // initial load
      this.sortedMatches = this.sliceMatches(this.previousMatches);
    } else if (this.regionValue !== userRegion) {
      // new region searched
      this.sortedMatches = this.previousMatches;
      this.sortedMatches = this.sortedMatches.filter((data: any) => {
        return data['cluster_name'] === userRegion;
      });
      this.sortedMatches = this.sliceMatches(this.sortedMatches);
      this.regionValue = userRegion;
    } else {
      // remove region, default
      this.sortedMatches = this.sliceMatches(this.previousMatches);
      this.regionValue = '';
    }
  }

  getRegions() {
    this.regions = this.previousMatches.map((data: any) => {
      return data['cluster_name'];
    });
    this.regions = Array.from(new Set(this.regions));
    this.regions.sort();
  }

  sortTeams(event: string) {
    this.regionInactive = true;
    let fuzzyTeams = this.previousMatches.filter((data: any) => {
        return (this.fuzzysearch(event.toLowerCase(), data.dire_name.toLowerCase()) ||
          this.fuzzysearch(event.toLowerCase(), data.radiant_name.toLowerCase()));
    });
    this.sortedMatches = this.sliceMatches(fuzzyTeams);
  }

  sortLeagues(event: string) {
    this.regionInactive = true;
    let fuzzyLeague = this.previousMatches.filter((data: any) => {
        if (data.league_name) {
          return this.fuzzysearch(event.toLowerCase(), data.league_name.toLowerCase());
        }
    });
    if (event.length === 0) {
      this.sortedMatches = this.sliceMatches(this.previousMatches);
    } else {
      this.sortedMatches = this.sliceMatches(fuzzyLeague);
    }
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
    outer: for (let i = 0, j = 0; i < nlen; i++) {
      let nch = needle.charCodeAt(i);
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
