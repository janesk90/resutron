import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSkillDisplayComponent } from './ui-skill-display.component';

describe('UiSkillDisplayComponent', () => {
  let component: UiSkillDisplayComponent;
  let fixture: ComponentFixture<UiSkillDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSkillDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSkillDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
