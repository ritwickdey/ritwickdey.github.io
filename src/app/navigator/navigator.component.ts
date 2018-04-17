import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  navLinks = [
    { displayName: 'Portfolio', url: '/portfolio' },
    { displayName: 'About', url: '/about' },
    { displayName: 'Contact', url: '/contact' }
  ];
  constructor() {}

  ngOnInit() {}
}
