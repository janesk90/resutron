import { Component, Input, OnInit } from '@angular/core';
import {Skills} from '@resu/skills/domain';

@Component({
  selector: 'resu-ui-many-skill-display',
  templateUrl: './ui-many-skill-display.component.html',
  styleUrls: ['./ui-many-skill-display.component.scss']
})
export class UiManySkillDisplayComponent implements OnInit {
  @Input() skills!: Skills[];

  constructor() { }

  ngOnInit(): void {
  }
}
