import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionOptions } from 'mysql2';
import {DAO} from '../../../../shared/domain/src/lib/shared-domain.module';

@NgModule({
  imports: [CommonModule],
})
export class PositionsDomainModule {}
export interface PositionsProps {
  readonly positions_id?: number;
  positions_title: string;
  positions_start: Date;
  positions_end: Date;
  companies_id: number;
  persons_id: number;
}
export class Positions implements PositionsProps {
  readonly positions_id?: number;
  positions_title: string;
  positions_start: Date;
  positions_end: Date;
  companies_id: number;
  persons_id: number;
  constructor(p: PositionsProps) {
    this.positions_id = p.positions_id;
    this.positions_title = p.positions_title;
    this.positions_start = p.positions_start;
    this.positions_end = p.positions_end;
    this.companies_id = p.companies_id;
    this.persons_id = p.persons_id;
  }
}
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