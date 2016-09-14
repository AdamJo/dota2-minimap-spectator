import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateX'
})
export class CalculateXPipe implements PipeTransform {

  transform(value: number, width: number, maxWdithHeight: number): number {
    return  (((value) + (16000 / 2)) / (16000 / width) / maxWdithHeight) * 100;
  }
}
