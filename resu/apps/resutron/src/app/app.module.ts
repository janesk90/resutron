import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SkillsUiModule } from '@resu/skills/ui';
import { PositionNotesUiModule } from '@resu/position-notes/ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SkillsUiModule, PositionNotesUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
