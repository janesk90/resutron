import { Component, Input, OnInit } from '@angular/core';
import { Accolades } from '@resu/accolades/domain';

@Component({
  selector: 'resu-ui-many-accolade-display',
  templateUrl: './ui-many-accolade-display.component.html',
  styleUrls: ['./ui-many-accolade-display.component.scss']
})
export class UiManyAccoladeDisplayComponent implements OnInit {
  @Input() title!: string;
  @Input() accolades!: Accolades[];
  constructor() { }

  ngOnInit(): void {
  }

}
