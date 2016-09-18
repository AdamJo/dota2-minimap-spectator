import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-buildings',
  templateUrl: 'buildings.component.html',
  styleUrls: ['./buildings.component.scss', './resources/buildings.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingsComponent {
  @Input() direBarracks: Array<number>;
  @Input() direTowers: Array<number>;
  @Input() radiantBarracks: Array<number>;
  @Input() radiantTowers: Array<number>;

  /*
  * order matters
  */
  barracks = [
    'barracks-bottom-ranged',
    'barracks-bottom-melee',
    'barracks-middle-ranged',
    'barracks-middle-melee',
    'barracks-top-ranged',
    'barracks-top-melee'
  ];
  /*
  * order matters
  */
  towers = [
    'ancient-1',
    'ancient-2',
    'bottom-3',
    'bottom-2',
    'bottom-1',
    'middle-3',
    'middle-2',
    'middle-1',
    'top-3',
    'top-2',
    'top-1'
  ];

  // ngOnInit() {
    // this.radiantTowers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // this.direTowers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  // }
}
