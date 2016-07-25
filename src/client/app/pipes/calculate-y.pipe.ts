import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateY'
})
export class CalculateYPipe implements PipeTransform {

  transform(value: number, height : number): number {
    return  Math.floor(((-value) + (16000 / 2)) / (16000 / height));
  }
}
