import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DAO } from '@resu/shared/domain';
import { Skills } from '@resu/skills/domain';
import {promisify} from 'util';

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

  async getByPersonId(id: number): Promise<Skills[]> {
    let q = "SELECT skills.skills_name as skills_name, skills.skills_id as skills_id FROM skills JOIN skills_to_persons ON skills.skills_id = skills_to_persons.skills_id WHERE skills_to_persons.persons_id = ?;";
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: Skills[] = await query({ sql: q, values: [id] });
      if (!r) {
        throw Error("entity not found");
      }
      return r;
    }
    catch (x) {
      throw x;
    } finally {
      this.connection.end();
    }
  }
}