import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionOptions } from 'mysql2';
import { DAO, EntityProps } from '../../../../shared/domain/src/lib/shared-domain.module';

@NgModule({
  imports: [CommonModule],
})
export class SkillsToPersonsDomainModule {}
export interface SkillsToPersonsProps extends EntityProps {
  readonly skills_to_persons_id?: number;
  skills_id: number;
  persons_id: number;
}
export class SkillsToPersons implements SkillsToPersonsProps {
  readonly skills_to_persons_id?: number;
  skills_id: number;
  persons_id: number;
  constructor(p: SkillsToPersonsProps) {
    this.skills_to_persons_id = p.skills_to_persons_id;
    this.skills_id = p.skills_id;
    this.persons_id = p.persons_id;
  }
}
export class SkillsToPersonsDAO extends DAO<SkillsToPersons> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'skills_to_persons';
    this.unique_identifier = 'skills_to_persons_id';
  }
}