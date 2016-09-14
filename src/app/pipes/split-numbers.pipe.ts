import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitToNumbers'
})

/*
* value will alwasys be positive
*/
export class SplitNumbersPipe implements PipeTransform {
  transform(value: any): any {
    /*
    * https://dota2api.readthedocs.io/en/latest/responses.html#towers-and-barracks
    * if there is a value
    * - split into an array
    * - convert strings into digits so digits 1 and 0 can be read as boolean.
    * else return undefined ( most likely hasn't loaded in yet )
    */
    if (value) {
      return (value.split('').map((data: any) => parseInt(data, 10)));
    } else {
      return undefined;
    }
  }
}
