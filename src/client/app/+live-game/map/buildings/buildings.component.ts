import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-buildings',
  templateUrl: 'buildings.component.html',
  styleUrls: ['buildings.component.css', './resources/buildings.css']
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
    'barracks_bottom_ranged',
    'barracks_bottom_melee',
    'barracks_middle_ranged',
    'barracks_middle_melee',
    'barracks_top_ranged',
    'barracks_top_melee'
  ];
  /*
  * order matters
  */
  towers = [
    'ancient_1',
    'ancient_2',
    'bottom_3',
    'bottom_2',
    'bottom_1',
    'middle_3',
    'middle_2',
    'middle_1',
    'top_3',
    'top_2',
    'top_1'
  ];
}