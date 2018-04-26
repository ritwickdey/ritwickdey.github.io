import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements OnInit, OnChanges {
  @Input('text') text = '';
  @Input('time') time = 1000;
  @Input('delay') delay = 500;
  @ViewChild('cursor') cursorRef: ElementRef;

  displayText = '';

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes) {
    this.startRendering();
  }

  startRendering() {
    setTimeout(() => {
      const eachTime = Math.round(this.time / this.text.length);
      const textArr = this.text.split('');
      console.log(eachTime);
      this.renderTextByLetter(textArr, eachTime);
    }, this.delay);
  }

  renderTextByLetter(
    textArr: string[],
    timeInterval: number,
    letter = textArr[0]
  ) {
    if (!textArr || textArr.length <= 0) {
      const cursor = this.cursorRef.nativeElement as HTMLSpanElement;
      cursor.classList.add('cursor__animate');
      return;
    }
    setTimeout(() => {
      this.displayText += letter;
      const newTextArr = textArr.slice(1);
      this.renderTextByLetter(newTextArr, timeInterval, newTextArr[0]);
    }, timeInterval);
  }
}
