/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CalculateXPipe } from './calculate-x.pipe';

describe('Pipe: CalculateX', () => {
  it('create an instance', () => {
    let pipe = new CalculateXPipe();
    expect(pipe).toBeTruthy();
  });
});
