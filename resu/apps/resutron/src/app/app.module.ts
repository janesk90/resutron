import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SkillsDomainModule } from '@resu/skills/domain';
import { UiManySkillsDisplayComponent } from '@resu/skills/domain';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SkillsDomainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
