import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCompanyDisplayComponent } from './ui-company-display/ui-company-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiCompanyDisplayComponent
  ],
  exports: [
    UiCompanyDisplayComponent
  ]
})
export class CompaniesUiModule {} 
