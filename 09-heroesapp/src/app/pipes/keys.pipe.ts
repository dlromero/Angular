import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    const keys = [];

    for (const key in value) {
      if (true) {
        keys.push(key);
      }
    }
    return keys;

  }

}