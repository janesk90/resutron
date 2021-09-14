import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPositionDisplayComponent } from './ui-position-display.component';

describe('UiPositionDisplayComponent', () => {
  let component: UiPositionDisplayComponent;
  let fixture: ComponentFixture<UiPositionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPositionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPositionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
