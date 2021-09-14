import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class CompaniesValidator {
  static validateCompaniesName(name: string): boolean {
    return null != name && name.length <= 255;
  }
}