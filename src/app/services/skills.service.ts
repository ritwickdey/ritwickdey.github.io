import { Injectable } from '@angular/core';
import { ISkill } from '../utils/ISkill';
import { SKILLS_DATA } from '../utils/data/skills.data';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): ISkill[] {
    return SKILLS_DATA;
  }
}
