import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {
  transform(value: string, maxLength = 10, prettier = false): any {
    let transformedValue = value.slice(0, maxLength);

    if (value.length > maxLength) {
      if (prettier) transformedValue = this.makePrettier(transformedValue);
      transformedValue += '...';
    }
    return transformedValue;
  }

  makePrettier(value: string) {
    return value
      .split(' , ')
      .filter((_, index, arr) => arr.length - 1 !== index && arr.length >= 1)
      .join(', ');
  }
}
