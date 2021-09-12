import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPersonDisplayComponentComponent } from './ui-person-display-component.component';

describe('UiPersonDisplayComponentComponent', () => {
  let component: UiPersonDisplayComponentComponent;
  let fixture: ComponentFixture<UiPersonDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPersonDisplayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPersonDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
