import { Component, Input, OnInit } from '@angular/core';
import { PositionNotes } from '@resu/position-notes/domain';

@Component({
  selector: 'resu-ui-position-notes-display',
  templateUrl: './ui-position-notes-display.component.html',
  styleUrls: ['./ui-position-notes-display.component.scss']
})
export class UiPositionNotesDisplayComponent implements OnInit {
  @Input() positionNote!: PositionNotes;
  constructor() { }

  ngOnInit(): void {
  }

}
