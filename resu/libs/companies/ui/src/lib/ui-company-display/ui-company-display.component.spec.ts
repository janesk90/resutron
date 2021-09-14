import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCompanyDisplayComponent } from './ui-company-display.component';

describe('UiCompanyDisplayComponent', () => {
  let component: UiCompanyDisplayComponent;
  let fixture: ComponentFixture<UiCompanyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCompanyDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCompanyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
