import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-previous-match',
  templateUrl: 'previous-match.component.html',
  styleUrls: ['previous-match.component.scss']
})
export class PreviousMatchComponent implements OnInit {
  @Input() match: any;
  @Input() sortValue: any;

  constructor() {
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
    
  }
}