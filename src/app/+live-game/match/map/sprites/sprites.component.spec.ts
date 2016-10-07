import { inject, TestBed } from '@angular/core/testing';
import { SpritesComponent } from './sprites.component';

describe('Sprites Component', () => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SpritesComponent
    ]}));

  it('should create an instance', inject([ SpritesComponent ], (app: SpritesComponent) => {
    expect(app).toBeTruthy();
  }));
});
