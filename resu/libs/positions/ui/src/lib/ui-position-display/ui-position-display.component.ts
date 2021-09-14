import { Component, Input, OnInit } from '@angular/core';
import { Positions } from '@resu/positions/domain';

@Component({
  selector: 'resu-ui-position-display',
  templateUrl: './ui-position-display.component.html',
  styleUrls: ['./ui-position-display.component.scss']
})
export class UiPositionDisplayComponent implements OnInit {
  @Input() position!: Positions;
  constructor() { }

  ngOnInit(): void {
  }

}
