import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiManySkillsDisplayComponent } from './ui-many-skills-display.component';

describe('UiManySkillsDisplayComponent', () => {
  let component: UiManySkillsDisplayComponent;
  let fixture: ComponentFixture<UiManySkillsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiManySkillsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiManySkillsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
