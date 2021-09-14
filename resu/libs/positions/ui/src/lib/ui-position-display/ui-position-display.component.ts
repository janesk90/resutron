import { Component, Input, OnInit } from '@angular/core';
import { Positions } from '@resu/positions/domain';

@Component({
  selector: 'resu-ui-position-display',
  templateUrl: './ui-position-display.component.html',
  styleUrls: ['./ui-position-display.component.scss']
})
export class UiPositionDisplayComponent implements OnInit {
  @Input() position!: Positions;
  start!: any;
  end!: any;
  constructor() { }

  ngOnInit(): void {
    this.start = new Date(this.position.positions_start).toLocaleDateString("en-US");
    this.end = new Date(this.position.positions_end).toLocaleDateString("en-US");
  }

}
