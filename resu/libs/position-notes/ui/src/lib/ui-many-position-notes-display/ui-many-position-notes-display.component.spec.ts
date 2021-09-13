import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiManyPositionNotesDisplayComponent } from './ui-many-position-notes-display.component';

describe('UiManyPositionNotesDisplayComponent', () => {
  let component: UiManyPositionNotesDisplayComponent;
  let fixture: ComponentFixture<UiManyPositionNotesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiManyPositionNotesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiManyPositionNotesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
