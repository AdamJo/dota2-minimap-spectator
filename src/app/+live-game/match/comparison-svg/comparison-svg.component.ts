import { Component, Input, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lg-comparison-svg',
  templateUrl: 'comparison-svg.component.html',
  styleUrls: ['./comparison-svg.component.scss'],

})

export class ComparisonSvg implements OnInit, AfterContentChecked  {
  @Input() playerTeam: string;
  @Input() player: object;
  @Input() sortValue: string;
  @Input() maxPlayerValue: number;
  playerValue: number;
  maxValue: number;

  ngOnInit() {
    this.playerValue = this.player[this.sortValue];
    this.maxValue = this.maxPlayerValue[this.sortValue];
  }

  ngAfterContentChecked() {
    this.playerValue = this.player[this.sortValue];
    this.maxValue = this.maxPlayerValue[this.sortValue];
  }
}
