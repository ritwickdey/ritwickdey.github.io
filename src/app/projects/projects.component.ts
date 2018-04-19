import { ProjectDataService } from './../services/project-data.service';
import { Component, OnInit } from '@angular/core';
import { IProject } from '../utils/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[];

  constructor(private projectService: ProjectDataService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
