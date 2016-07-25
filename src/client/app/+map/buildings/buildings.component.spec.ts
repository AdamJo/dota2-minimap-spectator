import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';
import { Renderer } from '@angular/core';
import { BuildingsComponent } from './buildings.component';

export function main() {
  describe('Buildings Component', () => {

    beforeEachProviders(() => [
      BuildingsComponent
    ]);
    
    it('should create an instance', inject([ BuildingsComponent ], (app:any) => {
      expect(app.barracks).toBeTruthy();
    }));
    it('should have barracks defined correctly', inject([ BuildingsComponent ], (app:any) => {
      expect(app.barracks).toEqual([
        'barracks_bottom_ranged',
        'barracks_bottom_melee',
        'barracks_middle_ranged',
        'barracks_middle_melee',
        'barracks_top_ranged',
        'barracks_top_melee'
      ]);
    }));
    it('should have towers defined correctly', inject([ BuildingsComponent ], (app:any) => {
      expect(app.towers).toEqual([
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
      ]);
    }));
  });
}
