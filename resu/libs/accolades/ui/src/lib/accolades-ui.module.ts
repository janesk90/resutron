import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiAccoladeDisplayComponent } from './ui-accolade-display/ui-accolade-display.component';
import { UiManyAccoladeDisplayComponent } from './ui-many-accolade-display/ui-many-accolade-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiAccoladeDisplayComponent,
    UiManyAccoladeDisplayComponent
  ],
  exports: [
    UiAccoladeDisplayComponent,
    UiManyAccoladeDisplayComponent
  ]
})
export class AccoladesUiModule {}
