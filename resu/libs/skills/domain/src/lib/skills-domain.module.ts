import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionOptions } from 'mysql2';
import { DAO } from '../../../../shared/domain/src/lib/shared-domain.module';
import { UiSkillsDisplayComponentComponent } from './ui-skills-display-component/ui-skills-display-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiSkillsDisplayComponentComponent
  ],
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
export class SkillsDAO extends DAO<Skills> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'skills';
    this.unique_identifier = 'skills_id';
  }
}
export class SkillsValidator {
  static validateSkillsName(name: string): boolean {
    return null != name && name.length <= 255;
  }
}