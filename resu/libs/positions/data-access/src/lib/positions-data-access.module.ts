import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Positions} from '@resu/positions/domain';
import {DAO} from '@resu/shared/domain';
import { ConnectionOptions } from 'mysql2';

@NgModule({
  imports: [CommonModule],
})
export class PositionsDataAccessModule {}
export class PositionsDAO extends DAO<Positions> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'positions';
    this.unique_identifier = 'positions_id';
  }
  getByPersonsId(persons_id: number): Promise<Positions[]> {
    return this.getBy('persons_id', persons_id);
  }
  getByCompaniesId(companies_id: number): Promise<Positions[]> {
    return this.getBy('companies_id', companies_id);
  }
}