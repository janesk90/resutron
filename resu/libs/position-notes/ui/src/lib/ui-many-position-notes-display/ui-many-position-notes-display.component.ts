import { Component, Input, OnInit } from '@angular/core';
import { PositionNotes } from '@resu/position-notes/domain';

@Component({
  selector: 'resu-ui-many-position-notes-display',
  templateUrl: './ui-many-position-notes-display.component.html',
  styleUrls: ['./ui-many-position-notes-display.component.scss']
})
export class UiManyPositionNotesDisplayComponent implements OnInit {
  @Input() positionNotes!: PositionNotes[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.positionNotes);
  }

}
