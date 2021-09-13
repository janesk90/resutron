import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSkillsDisplayComponentComponent } from './ui-skills-display-component/ui-skills-display-component.component';
import { UiManySkillsDisplayComponent } from './ui-many-skills-display/ui-many-skills-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiSkillsDisplayComponentComponent,
    UiManySkillsDisplayComponent
  ],
  exports: [
    UiSkillsDisplayComponentComponent,
    UiManySkillsDisplayComponent
  ]
})
export class SkillsDomainModule {}
export interface SkillsProps {
  readonly skills_id?: number;
  skills_name: string;
}
export class Skills implements SkillsProps {
  readonly skills_id?: number;
  skills_name: string;
  constructor(p: SkillsProps) {
    this.skills_id = p.skills_id;
    this.skills_name = p.skills_name;
  }
}
export class SkillsValidator {
  static validateSkillsName(name: string): boolean {
    return null != name && name.length <= 255;
  }
}
export { UiSkillsDisplayComponentComponent } from './ui-skills-display-component/ui-skills-display-component.component';
export { UiManySkillsDisplayComponent } from './ui-many-skills-display/ui-many-skills-display.component';