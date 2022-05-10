import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntityProps} from '../../../../shared/domain/src/lib/shared-domain.module';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: []
})
export class SkillsDomainModule {}
export interface SkillsProps extends EntityProps {
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