import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  Renderer2
} from '@angular/core';
import {
  stagger,
  keyframes,
  style,
  animate,
  query,
  transition,
  trigger
} from '@angular/animations';

import { IProject } from '../utils/IProject';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':leave', [
        style({
          transform: 'translateX(0%)'
        }),

        animate(
          '0.3s ease-out',
          keyframes([
            style({
              transform: 'translateX(0%)',
              offset: 0
            }),
            style({
              transform: 'translateX(100%)',
              offset: 1
            })
          ])
        )
      ]),
      transition(':enter', [
        style({
          transform: 'translateX(100%)'
        }),

        animate(
          '0.3s ease-out',
          keyframes([
            style({
              transform: 'translateX(100%)',
              offset: 0
            }),
            style({
              transform: 'translateX(0%)',
              offset: 1
            })
          ])
        )
      ])
    ])
  ]
})
export class ProjectDetailsComponent implements OnInit {
  @Input('project') project: IProject;
  @Output('cancellation') cancellation = new EventEmitter();

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'isSideDrawerOpen');
  }

  onCancellation(e, force = false) {
    const cancelAttribute =
      force || e.target.attributes.getNamedItem('enable-cancellation');
    if (force || (cancelAttribute && cancelAttribute.value))
      this.cancellation.emit();
    this.renderer.removeClass(document.body, 'isSideDrawerOpen');
  }
}
