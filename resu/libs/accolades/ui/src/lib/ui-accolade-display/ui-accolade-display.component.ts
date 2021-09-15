import { Component, Input, OnInit } from '@angular/core';
import { Accolades } from '@resu/accolades/domain';

@Component({
  selector: 'resu-ui-accolade-display',
  templateUrl: './ui-accolade-display.component.html',
  styleUrls: ['./ui-accolade-display.component.scss']
})
export class UiAccoladeDisplayComponent implements OnInit {
  @Input() accolade!: Accolades;
  constructor() { }

  ngOnInit(): void {
  }

}
