import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenName'
})
export class ShortenName implements PipeTransform {

  transform(value: string): string {
    if (value.length > 21) {
      return value.slice(0, 20) + '...';
    }
    else {
      return value;
    }
  }
}
