import { Component, OnInit, Input, Renderer, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { SpritesComponent } from '../sprites/index';

@Component({
  moduleId: module.id,
  selector: 'app-sprite-animation',
  directives: [SpritesComponent],
  template: `
    <div #position
      class="icons">
      <app-sprites 
        [team]='team' 
        [heroId]='heroId'>
        </app-sprites>
    </div>
  `,
  styles: [
    `
      .icons {
        position: absolute;
        z-index: 2
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SpriteAnimationComponent implements OnInit {
  @Input() team: boolean;
  @Input() heroId: number;
  @Input() posX: number;
  @Input() posY: number;
  @Input() oldPosX: number;
  @Input() oldPosY: number;
  @Input() index: number;

  @ViewChild('position') coordinates : ElementRef;
  @Input() respawnTimer: number;

  constructor(public renderer: Renderer) {}

  ngOnInit() {
    this.animateMovement();
    if (this.respawnTimer > 0) {
      this.animateDeath();
    }
  }
  /* 
  * if old pos X/Y exists set sprites to old pos then animate to new, else it is a fresh restart
  * Using this instead of onChanges since onChanges only captures actual values and not object references like int he *ngFor
  */
  animateMovement() {
    if (!Number.isNaN(this.oldPosX )) {
        //console.log('heroId ' + this.heroId + 'posX ' + this.posX, 'posY ' +  this.posY, 'X ' +  this.oldPosX, 'Y ' + this.oldPosY)
        //[this.oldPosX, this.oldPosY] = this.transformPosition(this.oldPosX, this.oldPosY)
        this.renderer.invokeElementMethod(
          this.coordinates.nativeElement,
          'animate',
          [
            [
              {left: this.oldPosX+'px', top: this.oldPosY +'px'},
              {left: this.posX+'px', top: this.posY +'px'}
            ],
            {
              duration: 2000,
              delay: 0,
              fill: 'forwards'
            }
          ]
        );
      } else {
        this.renderer.setElementStyle(this.coordinates.nativeElement, 'left', this.posX+'px');
        this.renderer.setElementStyle(this.coordinates.nativeElement, 'top', this.posY+'px');
      }
  }
  animateDeath() {
    this.renderer.invokeElementMethod(
      this.coordinates.nativeElement,
      'animate',
      [
        [
          {opacity: .75},
          {opacity: .25},
          {opacity: .75}
        ],
        {
          duration: 3000,
          delay: 0,
          iterations: this.respawnTimer/3
        }
      ]
    );
  }
}
