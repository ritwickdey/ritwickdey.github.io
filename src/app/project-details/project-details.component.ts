import { Component, OnInit, Input } from '@angular/core';

import { IProject } from '../utils/IProject';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input('project') project: IProject;

  constructor() {}

  ngOnInit() {}
}
