import { Component, Input, OnInit } from '@angular/core';
import { CompaniesUiModule } from '../companies-ui.module';
import { Companies } from '@resu/companies/domain';

@Component({
  selector: 'resu-ui-company-display',
  templateUrl: './ui-company-display.component.html',
  styleUrls: ['./ui-company-display.component.scss']
})
export class UiCompanyDisplayComponent implements OnInit {
  @Input() company!: Companies;
  constructor() { }

  ngOnInit(): void {
  }

}
