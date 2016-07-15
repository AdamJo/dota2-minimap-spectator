import { Component, OnInit, Renderer, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { Http, Response } from '@angular/http'
import { CalculateXPipe, CalculateYPipe } from '../pipes/index';
//import { testData } from '../resources/testData'
import { SpritesComponent } from './sprites/index'
import { SpriteAnimationComponent } from './sprite-animation/index'
import { ApiService, LiveLeagueGame, Players } from '../services/index'
import { FirebaseObjectObservable } from 'angularfire2'


@Component({
  moduleId: module.id,
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: [
    'map.component.css'
  ],
  pipes: [
    CalculateXPipe,
    CalculateYPipe
  ],
  directives: [
    SpritesComponent,
    SpriteAnimationComponent
  ],
  providers: [
    ApiService
  ]
})
export class  MapComponent implements OnInit {
  radiant : any;
  dire : any;
  firstCheckDone = false;

  constructor(private apiService: ApiService ) {}

  ngOnInit() { 

    let currentGame = this.apiService.grabCurrentGame()
      currentGame.subscribe(data => {  
        if (this.firstCheckDone) {
          this.radiant.map((d: any, i: any)  => {
              data.scoreboard.radiant.players[i].old_position_x = d.position_x
              data.scoreboard.radiant.players[i].old_position_y = d.position_y
          })
          this.dire.map((d: any, i: any) => {
              data.scoreboard.dire.players[i].old_position_x = d.position_x
              data.scoreboard.dire.players[i].old_position_y = d.position_y
          })
          this.radiant = data.scoreboard.radiant.players
          this.dire = data.scoreboard.dire.players
        } else {
          this.radiant = data.scoreboard.radiant.players
          this.dire = data.scoreboard.dire.players
          this.firstCheckDone = true;
        }
    })
  }
  ngAfterViewInit() {
  }
}