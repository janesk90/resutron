import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '../skills-domain.module';

@Component({
  selector: 'resu-ui-skills-display-component',
  templateUrl: './ui-skills-display-component.component.html',
  styleUrls: ['./ui-skills-display-component.component.scss']
})
export class UiSkillsDisplayComponentComponent implements OnInit {

  @Input() skill!: Skills;
  constructor() { }

  ngOnInit(): void {
  }

}
