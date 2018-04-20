import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appEscCancelation]'
})
export class EscCancelationDirective {
  constructor() {}

  @Output('appEscCancelation') appEscCancelation = new EventEmitter();

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape')
      this.appEscCancelation.emit({
        msg: 'Escape Btn Clicked',
        event
      });
  }
}
