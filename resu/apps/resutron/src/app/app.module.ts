import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SkillsUiModule } from '@resu/skills/ui';
import { PositionNotesUiModule } from '@resu/position-notes/ui';
import { PositionsUiModule } from '@resu/positions/ui';
import { CompaniesUiModule } from '@resu/companies/ui';
import { AccoladesUiModule } from '@resu/accolades/ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SkillsUiModule, PositionNotesUiModule, PositionsUiModule, CompaniesUiModule, AccoladesUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
