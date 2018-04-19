import { TagsService } from './../services/tags.service';
import { ProjectDataService } from './../services/project-data.service';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { IProject } from '../utils/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: IProject[];
  tagSubscription$: EventEmitter<any>;

  constructor(
    private tagsService: TagsService,
    private projectService: ProjectDataService
  ) {}

  ngOnInit() {
    this.renderProjects();
    this.tagSubscription$ = this.tagsService.onTagUpdate;
    this.tagSubscription$.subscribe(() => this.renderProjects());
  }

  ngOnDestroy() {
    if (this.tagSubscription$) this.tagSubscription$.unsubscribe();
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
