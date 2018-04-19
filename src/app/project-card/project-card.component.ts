import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../utils/IProject';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input('project') project: IProject;
  constructor() {}

  ngOnInit() {}
}
