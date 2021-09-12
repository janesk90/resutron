import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionOptions } from 'mysql2';
import { DAO } from '../../../../shared/domain/src/lib/shared-domain.module';

@NgModule({
  imports: [CommonModule],
})
export class AccoladesDomainModule {}
export interface AccoladesProps {
  readonly accolades_id?: number;
  accolades_name: string;
  accolade_types_id: number;
}
export class Accolades implements AccoladesProps {
  readonly accolades_id?: number;
  accolades_name: string;
  accolade_types_id: number;
  constructor(p: AccoladesProps) {
    this.accolades_id = p.accolades_id;
    this.accolades_name = p.accolades_name;
    this.accolade_types_id = p.accolade_types_id;
  }
}
export class AccoladesDAO extends DAO<Accolades> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'accolades';
    this.unique_identifier = 'accolades_id';
  }
}
