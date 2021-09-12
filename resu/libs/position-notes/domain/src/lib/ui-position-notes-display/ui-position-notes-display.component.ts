import { Component, Input, OnInit } from '@angular/core';
import { PositionNotes } from '../position-notes-domain.module';

@Component({
  selector: 'resu-ui-position-notes-display',
  templateUrl: './ui-position-notes-display.component.html',
  styleUrls: ['./ui-position-notes-display.component.scss']
})
export class UiPositionNotesDisplayComponent implements OnInit {
  @Input() positionNotes!: PositionNotes;
  constructor() { }

  ngOnInit(): void {
  }

}
