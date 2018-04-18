import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key-skill-btns',
  templateUrl: './key-skill-btns.component.html',
  styleUrls: ['./key-skill-btns.component.scss']
})
export class KeySkillBtnsComponent implements OnInit {
  keySkills = [
    { displayName: 'Angular', isSelected: true },
    { displayName: 'React.js', isSelected: true },
    { displayName: 'Node.js', isSelected: true },
    { displayName: 'ASP.NET', isSelected: true },
    { displayName: 'Others', isSelected: !true }
  ];

  constructor() {}

  ngOnInit() {}

  toogleSkillSelection(keySkill) {
    const selectedSkill = this.keySkills.find(
      e => e.displayName === keySkill.displayName
    );
    selectedSkill.isSelected = !selectedSkill.isSelected;
  }
}
