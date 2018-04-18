import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('animate', [
      transition('* => *', [
        query(':leave, :enter', [animateChild()], {
          optional: true
        })
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  showNavigationMenu = false;

  constructor() {}

  ngOnInit() {}
}
