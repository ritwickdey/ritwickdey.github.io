import { ITag } from './../utils/ITags';
import { Injectable, EventEmitter } from '@angular/core';
import { tagData } from '../utils/tags-data';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TagsService {
  tags: ITag[];

  onTagUpdate = new EventEmitter();

  constructor() {
    this.tags = tagData;
  }

  toogleTagSelection(tagName: string) {
    const selectedSkill = this.tags.find(e => e.displayName === tagName);
    selectedSkill.isSelected = !selectedSkill.isSelected;
    this.onTagUpdate.emit({
      tags: this.tags.filter(e => e.isSelected)
    });
  }
}
