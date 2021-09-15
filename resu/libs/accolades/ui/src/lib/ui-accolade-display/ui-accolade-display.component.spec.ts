import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAccoladeDisplayComponent } from './ui-accolade-display.component';

describe('UiAccoladeDisplayComponent', () => {
  let component: UiAccoladeDisplayComponent;
  let fixture: ComponentFixture<UiAccoladeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAccoladeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAccoladeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
