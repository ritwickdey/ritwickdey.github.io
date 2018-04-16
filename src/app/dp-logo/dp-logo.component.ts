import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dp-logo',
  templateUrl: './dp-logo.component.html',
  styleUrls: ['./dp-logo.component.scss']
})
export class DpLogoComponent implements OnInit {
  imgStyle: {};
  logoStyles: {};
  @Input('height') height: string;
  @Input('width') width: string;
  @Input('borderWidth') borderWidth: string;
  constructor() {}

  ngOnInit() {
    this.logoStyles = {
      height: this.height,
      width: this.width
    };
    this.imgStyle = {
      borderWidth: this.borderWidth
    };
    console.log(this.height);
    console.log(this.width);
    console.log(this.borderWidth);
  }
}
