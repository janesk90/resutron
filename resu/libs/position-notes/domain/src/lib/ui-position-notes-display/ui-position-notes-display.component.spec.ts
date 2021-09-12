import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPositionNotesDisplayComponent } from './ui-position-notes-display.component';

describe('UiPositionNotesDisplayComponent', () => {
  let component: UiPositionNotesDisplayComponent;
  let fixture: ComponentFixture<UiPositionNotesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPositionNotesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPositionNotesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
