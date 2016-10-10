import { UpcomingGameStartPipe } from './upcoming-game-start.pipe';

describe('Pipe: UpcomingGameStart', () => {
  let pipe: UpcomingGameStartPipe;

  beforeEach(() => {
    pipe = new UpcomingGameStartPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a string', () => {
    expect(pipe.transform(0)).toEqual(jasmine.any(String));
  });

  it('should transform 60 into "1 minute"', () => {
    expect(pipe.transform(60)).toEqual('1 minute');
  });

  it('should transform 120 into "2 minutes"', () => {
    expect(pipe.transform(120)).toEqual('2 minutes');
  });

  it('should transform -120 into "-2 minutes"', () => {
    expect(pipe.transform(-120)).toEqual('-2 minutes');
  });

  it('should transform -60 into "-1 minute"', () => {
    expect(pipe.transform(-60)).toEqual('-1 minute');
  });

  it('should transform -3600 into "-60 minutes"', () => {
    expect(pipe.transform(-3600)).toEqual('-60 minutes');
  });

  it('should transform 3600 into "1 hour"', () => {
    expect(pipe.transform(3600)).toEqual('1 hour');
  });

  it('should transform 7200 into "2 hours"', () => {
    expect(pipe.transform(7200)).toEqual('2 hours');
  });
});
