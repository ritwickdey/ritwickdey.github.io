import { ISkill } from './../utils/ISkill';
import { SkillsService } from './../services/skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: ISkill[];
  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    console.log(this.skillsService);

    this.skills = this.skillsService.getSkills();
  }

}
