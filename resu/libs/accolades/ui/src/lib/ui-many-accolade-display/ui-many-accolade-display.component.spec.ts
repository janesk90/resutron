import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiManyAccoladeDisplayComponent } from './ui-many-accolade-display.component';

describe('UiManyAccoladeDisplayComponent', () => {
  let component: UiManyAccoladeDisplayComponent;
  let fixture: ComponentFixture<UiManyAccoladeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiManyAccoladeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiManyAccoladeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
