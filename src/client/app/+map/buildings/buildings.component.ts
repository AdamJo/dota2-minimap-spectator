import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-buildings',
  template: `
    <i 
      ngClass="buildings radiant_barracks"
    ></i>
    <i 
      ngClass="buildings radiant_tower"
    ></i>
    <i 
      ngClass="buildings dire_tower"
    ></i>
    <i 
      ngClass="buildings dire_barracks"
    ></i>
  `,
  styleUrls: ['./resources/buildings.css'],
  styles: [`
  `]
})
export class BuildingsComponent implements OnInit {
  constructor() {}

  ngOnInit() { console.log('here app-buildings') }

}