/* tslint:disable:no-unused-variable */

import { CalculateXPipe } from './calculate-x.pipe';

export function main() {

  describe('Pipe: CalculateX', () => {
    let pipe: CalculateXPipe;
    let width = 395;
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

    beforeEach(() => {
      pipe = new CalculateXPipe();
    });

    it('should create an instance', () => {
      expect(pipe).toBeTruthy();
    }); 
    it('transforms float to integer', () => {
      testIntegers.map(testData => {
        expect(pipe.transform(testData, width)).toEqual(jasmine.any(Number));    
      })
    });
    it(`transforms are < ${width} && > -1`, () => {
      testIntegers.map(testData => {
        // console.log(testData, pipe.transform(testData, width))
        expect(pipe.transform(testData, width)).toBeLessThan(width);
        expect(pipe.transform(testData, width)).toBeGreaterThan(-1);        
      })
    });
  });
}
