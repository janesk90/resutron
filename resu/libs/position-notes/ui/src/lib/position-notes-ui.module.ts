import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPositionNotesDisplayComponent } from './ui-position-notes-display/ui-position-notes-display.component';
import { UiManyPositionNotesDisplayComponent } from './ui-many-position-notes-display/ui-many-position-notes-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiPositionNotesDisplayComponent,
    UiManyPositionNotesDisplayComponent
  ],
  exports: [
    UiPositionNotesDisplayComponent,
    UiManyPositionNotesDisplayComponent
  ]
})
export class PositionNotesUiModule {}
