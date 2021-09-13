import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSkillDisplayComponent } from './ui-skill-display/ui-skill-display.component';
import { UiManySkillDisplayComponent } from './ui-many-skill-display/ui-many-skill-display.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    UiSkillDisplayComponent,
    UiManySkillDisplayComponent
  ],
  declarations: [
    UiSkillDisplayComponent,
    UiManySkillDisplayComponent
  ],
})
export class SkillsUiModule {}
