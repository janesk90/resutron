import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionOptions } from 'mysql2';
import { DAO, EntityProps } from '../../../../shared/domain/src/lib/shared-domain.module';

@NgModule({
  imports: [CommonModule],
})
export class AccoladeTypesDomainModule {}
export interface AccoladeTypesProps  extends EntityProps {
  readonly accolade_types_id?: number;
  accolade_types_name: string;
}
export class AccoladeTypes implements AccoladeTypesProps {
  readonly accolade_types_id?: number;
  accolade_types_name: string;
  constructor(p: AccoladeTypesProps) {
    this.accolade_types_id = p.accolade_types_id;
    this.accolade_types_name = p.accolade_types_name;
  }
}
export class AccoladeTypesDAO extends DAO<AccoladeTypes> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'accolade_types';
    this.unique_identifier = 'accolade_types_id';
  }
}