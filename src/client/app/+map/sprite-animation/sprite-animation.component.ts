import { Component, Directive, Input, Renderer, ElementRef, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';

import { SpritesComponent } from '../sprites/index'

@Component({
  moduleId: module.id,
  selector: 'app-sprite-animation',
  directives: [SpritesComponent],
  template: `
    <div #position
      class="icons">
      <app-sprites [heroId]='heroId'></app-sprites>
    </div>
  `,
  styles: [
    `
      .icons {
        position: absolute;
      }
    `
  ]
})
export class SpriteAnimationComponent {
  @Input() heroId: number;
  @Input() posX: number;
  @Input() posY: number;
  @Input() oldPosX: number;
  @Input() oldPosY: number;
  @ViewChild('position') coordinates : ElementRef
  @Input() respawnTimer: number;

  constructor(public renderer: Renderer) {}

  ngOnInit() {}
  ngAfterViewInit() {
    /*
    * if old pos X/Y exists set sprites to old pos then animate to new else it is a fresh restart
    */ 
    if (!Number.isNaN(this.oldPosX)) {
        //console.log('heroId ' + this.heroId + 'posX ' + this.posX, 'posY ' +  this.posY, 'X ' +  this.oldPosX, 'Y ' + this.oldPosY)
        this.renderer.invokeElementMethod(
          this.coordinates.nativeElement,
          'animate',
          [
            [
              {left: this.oldPosX+'px', top: this.oldPosY +'px'},
              {left: this.posX+'px', top: this.posY +'px'}
            ],
            {
              duration: 1000,
              delay: 0,
              fill: 'forwards'
            }
          ]
        );
      } 
      else {
          //console.log('posX ' + this.posX, 'posY ' +  this.posY, 'X ' +  this.oldPosX, 'Y ' + this.oldPosY)
          this.renderer.setElementStyle(this.coordinates.nativeElement, 'left', this.posX+'px')
          this.renderer.setElementStyle(this.coordinates.nativeElement, 'top', this.posY+'px')
      }
  }
}