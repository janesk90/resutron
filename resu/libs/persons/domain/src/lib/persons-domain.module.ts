import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionOptions } from 'mysql2';
import { DAO } from  '../../../../shared/domain/src/lib/shared-domain.module';
import { UiPersonDisplayComponentComponent } from './ui-person-display-component/ui-person-display-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiPersonDisplayComponentComponent
  ],
})
export class PersonsDomainModule {}
export interface PersonsProps {
  readonly persons_id?: number;
  persons_firstname: string;
  persons_middlename?: string;
  persons_lastname: string;
  persons_phone: string;
}
export class Persons implements PersonsProps {
  readonly persons_id?: number;
  persons_firstname: string;
  persons_middlename?: string;
  persons_lastname: string;
  persons_phone: string;
  constructor(p: PersonsProps) {
    this.persons_id = p.persons_id;
    this.persons_firstname = p.persons_firstname;
    this.persons_middlename = p.persons_middlename;
    this.persons_lastname = p.persons_lastname;
    this.persons_phone = p.persons_phone;
  }
}
export class PersonsDAO extends DAO<Persons> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'persons';
    this.unique_identifier = 'persons_id';
  }
}