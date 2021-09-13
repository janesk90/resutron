import { Component, Input, NgModule, OnInit } from '@angular/core';
import {Skills, UiSkillsDisplayComponentComponent} from '@resu/skills/domain';

@Component({
  selector: 'resu-ui-many-skills-display',
  templateUrl: './ui-many-skills-display.component.html',
  styleUrls: ['./ui-many-skills-display.component.scss'],
})
export class UiManySkillsDisplayComponent implements OnInit {
  @Input() skills!: Skills[];

  constructor() { }

  ngOnInit(): void {
  }

}
