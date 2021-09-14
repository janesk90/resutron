import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionOptions } from 'mysql2';
import { DAO } from '@resu/shared/domain';
import { Companies } from '@resu/companies/domain';

@NgModule({
  imports: [CommonModule],
})
export class CompaniesDataAccessModule {}
export class CompaniesDAO extends DAO<Companies> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'companies';
    this.unique_identifier = 'companies_id';
  }
}