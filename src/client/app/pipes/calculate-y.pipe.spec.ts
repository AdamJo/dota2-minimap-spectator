/* tslint:disable:no-unused-variable */

import {
  addProviders,
  async,
  inject
} from '@angular/core/testing';

import { CalculateYPipe } from './calculate-y.pipe';
import { CalculateXPipe } from './calculate-x.pipe';

export function main() {

  describe('Pipe: CalculateY', () => {
    let height = 380;
    let testIntegers = [
        7999,
        6000,
        4000,
        2000,
        0,
        -2000,
        -4000,
        -6000,
        -7999
      ];
      
    let pipe: CalculateYPipe;
    beforeEach(() => {
      pipe = new CalculateYPipe();
    });

    it('should create an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('transforms (possible) float to integer', () => {
      testIntegers.map(testData => {
        expect(pipe.transform(testData, height)).toEqual(jasmine.any(Number))        
      });
    });
    it(`transforms are < ${height} && > -1`, () => {
      testIntegers.map(testData => {
        // console.log(testData, pipe.transform(testData, height))
        expect(pipe.transform(testData, height)).toBeLessThan(height);
        expect(pipe.transform(testData, height)).toBeGreaterThan(-1);        
      })
    });
  });
}
