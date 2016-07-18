import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-buildings',
  template: `
    <div class="icons dire_barracks_bottom_ranged">
      <i
        ngClass="buildings dire_barracks"
      ></i>
    </div>
    <div class="icons dire_barracks_bottom_melee">
      <i
        ngClass="buildings dire_barracks"
      ></i>
    </div>
    <div class="icons dire_bottom_3">
      <i
        ngClass="buildings dire_tower"
      ></i>
    </div>
    <div class="icons dire_barracks_middle_ranged">
      <i
        ngClass="buildings dire_barracks"
      ></i>
    </div>
    <div class="icons dire_barracks_middle_melee">
      <i
        ngClass="buildings dire_barracks"
      ></i>
    </div>
    <div class="icons dire_middle_3">
      <i
        ngClass="buildings dire_tower"
      ></i>
    </div>
    <div class="icons dire_barracks_top_ranged">
      <i
        ngClass="buildings dire_barracks"
      ></i>
    </div>
    <div class="icons dire_barracks_top_melee">
      <i
        ngClass="buildings dire_barracks"
      ></i>
    </div>
    <div class="icons dire_top_3">
      <i
        ngClass="buildings dire_tower"
      ></i>
    </div>
    <div class="icons dire_ancient_1">
      <i
        ngClass="buildings dire_tower"
      ></i>
    </div>
    <div class="icons dire_ancient_building">
      <i
        ngClass="buildings dire_ancient"
      ></i>
    </div>
    <div class="icons dire_ancient_2">
      <i
        ngClass="buildings dire_tower"
      ></i>
    </div>
    <div class="icons radiant_bottom_3">
      <i
        ngClass="buildings radiant_tower"
      ></i>
    </div>
    <div class="icons radiant_barracks_bottom_ranged">
      <i
        ngClass="buildings radiant_barracks"
      ></i>
    </div>
    <div class="icons radiant_barracks_bottom_melee">
      <i
        ngClass="buildings radiant_barracks"
      ></i>
    </div>
    <div class="icons radiant_middle_3">
      <i
        ngClass="buildings radiant_tower"
      ></i>
    </div>
    <div class="icons radiant_barracks_middle_ranged">
      <i
        ngClass="buildings radiant_barracks"
      ></i>
    </div>
    <div class="icons radiant_barracks_middle_melee">
      <i
        ngClass="buildings radiant_barracks"
      ></i>
    </div>
    <div class="icons radiant_top_3">
      <i
        ngClass="buildings radiant_tower"
      ></i>
    </div>
    <div class="icons radiant_barracks_top_ranged">
      <i
        ngClass="buildings radiant_barracks"
      ></i>
    </div>
    <div class="icons radiant_barracks_top_melee">
      <i
        ngClass="buildings radiant_barracks"
      ></i>
    </div>
    <div class="icons radiant_ancient_1">
      <i
        ngClass="buildings radiant_tower"
      ></i>
    </div>
    <div class="icons radiant_ancient_building">
      <i
        ngClass="buildings radiant_ancient"
      ></i>
    </div>
    <div class="icons radiant_ancient_2">
      <i
        ngClass="buildings radiant_tower"
      ></i>
    </div>
  `,
  styleUrls: ['buildings.component.css', './resources/buildings.css']
})
export class BuildingsComponent implements OnInit {
  towers = [
    'radiant_bottom_1',
    'radiant_bottom_2',
    'radiant_bottom_3'
  ];

  constructor() {
    console.log('const - BuildingsComponent');
  }

  ngOnInit() {
    console.log('here app-buildings');
  }

}
