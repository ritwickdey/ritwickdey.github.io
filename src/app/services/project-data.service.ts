import { Injectable } from '@angular/core';

import { IProject } from './../utils/IProject';
import { ALL_PROJECT_DATA } from '../utils/project-data';

@Injectable()
export class ProjectDataService {

  constructor() {}

  getProjects(): IProject[] {
    return ALL_PROJECT_DATA;
  }
}
