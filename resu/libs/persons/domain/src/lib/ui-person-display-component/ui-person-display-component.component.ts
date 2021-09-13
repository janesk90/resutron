import { Component, Input, OnInit } from '@angular/core';
import { Persons } from '../persons-domain.module';

@Component({
  selector: 'resu-ui-person-display-component',
  templateUrl: './ui-person-display-component.component.html',
  styleUrls: ['./ui-person-display-component.component.scss']
})
export class UiPersonDisplayComponentComponent implements OnInit {
  @Input() person!: Persons;
  constructor() { }

  ngOnInit(): void {
  }

} 
