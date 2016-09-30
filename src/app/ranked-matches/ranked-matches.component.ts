import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranked-matches',
  templateUrl: 'ranked-matches.component.html',
  styleUrls: ['ranked-matches.component.scss']
})
export class RankedMatchesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('ranked matchES')
  }
}