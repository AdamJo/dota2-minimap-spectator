/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CalculateYPipe } from './calculate-y.pipe';

describe('Pipe: CalculateY', () => {
  it('create an instance', () => {
    let pipe = new CalculateYPipe();
    expect(pipe).toBeTruthy();
  });
});
