import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upcomingGameStart'
})

// determines when a new game will be up.
export class UpcomingGameStartPipe implements PipeTransform {
  transform(value: number): string {
    let gameStart: number;
    let timeSelect: string;

    if (value >= 3600) {
      gameStart = Math.round(value / 60 / 60);
      timeSelect = 'hour';
    } else {
      gameStart = Math.round(value / 60);
      timeSelect = 'minute';
    }

    if (timeSelect === 'minute' && gameStart > 1 || gameStart < -1 ) {
      timeSelect = timeSelect + 's';
    }

    if (timeSelect === 'hour' && gameStart > 1) {
      timeSelect = timeSelect + 's';
    }

    return `${gameStart} ${timeSelect}`;
  }
}
