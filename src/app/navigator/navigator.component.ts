import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  group,
  query,
  animate,
  state
} from '@angular/animations';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  animations: [
    trigger('slideIn', [
      state('void', style({ marginLeft: '50%', opacity: 0.1 })),
      transition('void <=> *', animate('0.5s ease-in-out'))
    ])
  ]
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

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') this.onBgClick();
  }

  onBgClick() {
    this.cancellation.emit();
  }
  onNavItemClick(e: Event, url: string) {
    e.stopPropagation();
    this.router.navigateByUrl(url);
  }
}
