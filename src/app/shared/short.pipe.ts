import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (value.length > args) {
      const trimmedVal = value.substr(0, args);
      return `${trimmedVal}...`;
    } else {
      return value;
    }
  }
}
