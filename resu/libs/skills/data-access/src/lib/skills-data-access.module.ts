import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DAO } from '@resu/shared/domain';
import { Skills } from '@resu/skills/domain';
import { ConnectionOptions } from 'mysql2';

@NgModule({
  imports: [CommonModule],
})
export class SkillsDataAccessModule {}
export class SkillsDAO extends DAO<Skills> {
  constructor(connectionConfig: any) {
    super(connectionConfig);
    this.entity_name = 'skills';
    this.unique_identifier = 'skills_id';
  }
}