import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { IProject } from '../utils/IProject';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input('project') project: IProject;
  @Output('cancellation') cancellation = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onCancellation(e) {
    const cancelAttribute = e.target.attributes.getNamedItem(
      'enable-cancellation'
    );
    if (cancelAttribute && cancelAttribute.value) this.cancellation.emit();
  }
}
