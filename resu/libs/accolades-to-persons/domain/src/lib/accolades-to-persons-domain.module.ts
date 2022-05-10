import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionOptions } from 'mysql2';
import { DAO, EntityProps } from '../../../../shared/domain/src/lib/shared-domain.module';

@NgModule({
  imports: [CommonModule],
})
export class AccoladesToPersonsDomainModule {}
export interface AccoladesToPersonsProps extends EntityProps {
  readonly accolades_to_persons_id?: number;
  accolades_id: number;
  persons_id: number;
}
export class AccoladesToPersons implements AccoladesToPersonsProps {
  readonly accolades_to_persons_id?: number;
  accolades_id: number;
  persons_id: number;
  constructor(p: AccoladesToPersonsProps) {
    this.accolades_to_persons_id = p.accolades_to_persons_id;
    this.accolades_id = p.accolades_id;
    this.persons_id = p.persons_id;
  }
}
export class AccoladesToPersonsDAO extends DAO<AccoladesToPersons> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'accolades_to_persons';
    this.unique_identifier = 'accolades_to_persons_id';
  }
}