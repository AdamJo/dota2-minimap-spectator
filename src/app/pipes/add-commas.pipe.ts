import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addCommas'
})

// formats scoreboard values
export class AddCommasPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
