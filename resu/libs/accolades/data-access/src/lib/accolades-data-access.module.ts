import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Accolades } from '@resu/accolades/domain';
import { ConnectionOptions } from 'mysql2';
import { DAO } from '@resu/shared/domain';
import { promisify } from 'util';

@NgModule({
  imports: [CommonModule],
})
export class AccoladesDataAccessModule { }
export class AccoladesDAO extends DAO<Accolades> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'accolades';
    this.unique_identifier = 'accolades_id';
  }
  async getByPersonId(id: number) {
    let q = "SELECT accolades.accolades_id as accolades_id, accolades.accolades_name as accolades_name, accolades.accolade_types_id as accolade_types_id FROM accolades JOIN accolades_to_persons ON accolades.accolades_id = accolades_to_persons.accolades_id WHERE accolades_to_persons.persons_id = ?;";
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: Accolades[] = await query({ sql: q, values: [id] })
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
  async getByAccoladeTypeId(id: number) {
    return this.getBy('accolade_types_id', id);
  }
  async getByPersonIdAndAccoladeTypeIds(person_id: number, accolade_types_ids: number[]) {
    let q = "SELECT accolades.accolades_id as accolades_id, accolades.accolades_name as accolades_name, accolades.accolade_types_id as accolade_types_id FROM accolades JOIN accolades_to_persons ON accolades.accolades_id = accolades_to_persons.accolades_id WHERE ((accolades_to_persons.persons_id = ?) AND (accolades.accolade_types_id IN (?)));";
    let query = promisify(this.connection.query).bind(this.connection);
    try {
      let r: Accolades[] = await query({ sql: q, values: [person_id, accolade_types_ids] })
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