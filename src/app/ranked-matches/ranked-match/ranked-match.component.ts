import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranked-match',
  templateUrl: 'ranked-match.component.html',
  styleUrls: ['ranked-match.component.scss']
})
export class RankedMatchComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('ranked match')
  }
}