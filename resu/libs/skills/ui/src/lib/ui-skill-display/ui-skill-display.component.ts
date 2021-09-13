import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '@resu/skills/domain';

@Component({
  selector: 'resu-ui-skill-display',
  templateUrl: './ui-skill-display.component.html',
  styleUrls: ['./ui-skill-display.component.scss']
})
export class UiSkillDisplayComponent implements OnInit {
  @Input() skill!: Skills;

  constructor() { }

  ngOnInit(): void {
  }

}
