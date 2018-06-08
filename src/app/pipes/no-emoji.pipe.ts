import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noEmoji'
})
export class NoEmojiPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, '');
  }

}
