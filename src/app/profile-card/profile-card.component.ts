import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Output() ExploreMe = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onExploreMeClick() {
    this.ExploreMe.emit();
  }
}
