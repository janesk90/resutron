import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resu-ui-skills-display-component',
  templateUrl: './ui-skills-display-component.component.html',
  styleUrls: ['./ui-skills-display-component.component.scss']
})
export class UiSkillsDisplayComponentComponent implements OnInit {

  @Input() skill!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
