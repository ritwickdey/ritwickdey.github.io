import { ITag } from './../utils/ITags';
import { Injectable } from '@angular/core';
import { tagData } from '../utils/tags-data';

@Injectable()
export class TagsService {
  tags: ITag[];

  constructor() {
    this.tags = tagData;
  }

  toogleTagSelection(tagName: string) {
    const selectedSkill = this.tags.find(e => e.displayName === tagName);
    selectedSkill.isSelected = !selectedSkill.isSelected;
  }
}
