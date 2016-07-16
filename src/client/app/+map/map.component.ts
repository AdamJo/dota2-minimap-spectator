import { Component, Input, OnInit, Renderer, ElementRef, ViewChild, ViewChildren, SimpleChange } from '@angular/core';
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
  providers: []
})
export class  MapComponent implements OnInit {
  width = 395;
  height = 380;
  @Input() radiant: any;
  @Input() dire: any
  oldPosX: number;
  oldPosY: number;
  //radiant: any;
  //dire : any;
  firstCheckDone = false;
  currentGame: FirebaseObjectObservable<any>

  constructor(private apiService: ApiService ) {
    
    console.log('construct', this.radiant)
  }

  ngOnInit() {
    console.log('ngOnInit', this.radiant)
    /*
    this.currentGame = this.apiService.grabCurrentGame()
    this.currentGame.subscribe(data => {
      this.apiService.sortScoreboard(data);
      this.radiant = this.apiService.radiant
      this.dire = this.apiService.dire
    })
    */
  }
  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }
  ngAfterViewInit() {
    
  }
  ngOnDestroy() {
    
  }
}