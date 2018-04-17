import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Output('cancellation') cancellation = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  onBgClick(e: Event) {
    this.cancellation.emit();
  }
  onNavItemClick(e: Event, url: string) {
    e.stopPropagation();
    this.router.navigateByUrl(url);
  }
}
