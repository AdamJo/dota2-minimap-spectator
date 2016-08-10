import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameTime'
})

export class GameTimePipe implements PipeTransform {
  transform(time: number): string {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 3600 % 60);
    return `${minutes}:${seconds}`;
  }
}
