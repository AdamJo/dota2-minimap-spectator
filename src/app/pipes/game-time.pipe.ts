import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameTime'
})

export class GameTimePipe implements PipeTransform {
  transform(time: number): string {
    let minutes = Math.floor(time / 60);
    let seconds = '00' + Math.floor(time % 3600 % 60);

    seconds = seconds.substring(seconds.length - 2);

    return `${minutes}:${seconds}`;
  }
}
