import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionOptions } from 'mysql2';
import { DAO } from '../../../../shared/domain/src/lib/shared-domain.module';

@NgModule({
  imports: [CommonModule],
})
export class CompaniesDomainModule {}
export interface CompaniesProps {
  readonly companies_id?: number;
  companies_name: string;
}
export class Companies implements CompaniesProps {
  readonly companies_id?: number;
  companies_name: string;
  constructor(p: CompaniesProps) {
    this.companies_id = p.companies_id;
    this.companies_name = p.companies_name;
  }
}
export class CompaniesDAO extends DAO<Companies> {
  constructor(connectionConfig: ConnectionOptions) {
    super(connectionConfig);
    this.entity_name = 'companies';
    this.unique_identifier = 'companies_id';
  }
}
export class CompaniesValidator {
  static validateCompaniesName(name: string): boolean {
    return null != name && name.length <= 255;
  }
}