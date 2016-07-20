import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toBinary'
})

/*
* value will alwasys be positive
*/
export class ConvertTopBinaryPipe implements PipeTransform {
  transform(value: any, building: string): any {
    /*
    * https://dota2api.readthedocs.io/en/latest/responses.html#towers-and-barracks
    * if there is a value
    * - toString(2) - convert to bindary
    * - "000..." + pad with 0's so all values are the same length
    * - slice given string into correct length, see above link
    * - split into an array
    * - convert strings into digits so digits 1 and 0 can be read as boolean.
    * else return undefined ( most likely hasn't loaded in yet )
    */
    if (value !== null) {
      if (building === 'tower') {
        return ('00000000000'+value.toString(2)).slice(-11).split('').map(data => parseInt(data));
      } else {
        return ('000000'+value.toString(2)).slice(-6).split('').map(data => parseInt(data));
      }
    } else {
      return undefined;
    }
  }
}
