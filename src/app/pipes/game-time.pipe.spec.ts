import { GameTimePipe } from './game-time.pipe';

describe('Pipe: GameTime', () => {
  let pipe: GameTimePipe;

  beforeEach(() => {
    pipe = new GameTimePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a string', () => {
    expect(pipe.transform(0)).toEqual(jasmine.any(String));
  });

  it('should transform 0 into 0:00', () => {
    expect(pipe.transform(0)).toEqual('0:00');
  });

  it('should transform 6000 into 100:00', () => {
    expect(pipe.transform(6000)).toEqual('100:00');
  });

  it('should transform 900 into 15:00', () => {
    expect(pipe.transform(900)).toEqual('15:00');
  });

});
