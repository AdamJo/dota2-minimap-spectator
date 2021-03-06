import { inject, TestBed } from '@angular/core/testing';
import { BuildingsComponent } from './buildings.component';

describe('Buildings Component', () => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BuildingsComponent
    ]}));

  it('should create an instance', inject([ BuildingsComponent ], (app: BuildingsComponent) => {
    expect(app.barracks).toBeTruthy();
  }));
  it('should have barracks defined correctly',
    inject([ BuildingsComponent ], (app: BuildingsComponent) => {
    expect(app.barracks).toEqual([
      'barracks-bottom-ranged',
      'barracks-bottom-melee',
      'barracks-middle-ranged',
      'barracks-middle-melee',
      'barracks-top-ranged',
      'barracks-top-melee'
    ]);
  }));
  it('should have towers defined correctly',
    inject([ BuildingsComponent ], (app: BuildingsComponent) => {
    expect(app.towers).toEqual([
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
    ]);
  }));
});
