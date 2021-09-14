import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPositionDisplayComponent } from './ui-position-display/ui-position-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiPositionDisplayComponent
  ],
  exports: [
    UiPositionDisplayComponent
  ]
})
export class PositionsUiModule {}
