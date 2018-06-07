import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  @Output('ExploreMe')
  ExploreMe = new EventEmitter();

  startTadaAnimation = false;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.startTadaAnimation = !this.startTadaAnimation;
    }, 3000);
  }

  onExploreMeClick() {
    this.ExploreMe.emit();
  }
}
