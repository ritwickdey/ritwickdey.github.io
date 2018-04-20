import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import {
  transition,
  trigger,
  query,
  animateChild,
  style,
  group,
  animate,
  sequence,
  stagger,
  keyframes
} from '@angular/animations';

import { IProject } from '../utils/IProject';
import { TagsService } from './../services/tags.service';
import { ProjectDataService } from './../services/project-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        query(':enter', style({ transform: 'translateY(-25%)', opacity: 0 }), {
          optional: true
        }),
        query(':leave', style({ transform: 'translateY(0%)', opacity: 1 }), {
          optional: true
        }),
        query(
          ':enter',
          [
            stagger('0.2s', [
              animate(
                '0.3s ease-out',
                keyframes([
                  style({
                    transform: 'translateY(-25%)',
                    opacity: 0,
                    offset: 0
                  }),
                  style({ transform: 'translateY(0%)', opacity: 1, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger('0.2s', [
              animate(
                '0.3s ease-in',
                keyframes([
                  style({ transform: 'translateY(0%)', offset: 0 }),
                  style({ transform: 'translateY(25%)', opacity: 0, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: IProject[];
  tagSubscription$: EventEmitter<any>;
  selectedProject: IProject;

  constructor(
    private tagsService: TagsService,
    private projectService: ProjectDataService
  ) {}

  ngOnInit() {
    this.renderProjects();
    this.tagSubscription$ = this.tagsService.onTagUpdate;
    this.tagSubscription$.subscribe(() => {
      if (this.projects.length === 0) this.renderProjects();
      else this.projects = [];
    });
  }

  ngOnDestroy() {
    if (this.tagSubscription$) this.tagSubscription$.unsubscribe();
  }

  onProjectCardClick(data) {
    this.selectedProject = data.project;
  }

  renderProjects() {
    this.projects = this.projectService
      .getProjects()
      .filter(project =>
        this.tagsService.tags
          .filter(tag => tag.isSelected)
          .reduce(
            (prev, tag) =>
              prev || project.tags.includes(tag.displayName.toLowerCase()),
            false
          )
      );
  }
}
