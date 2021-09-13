import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiManySkillDisplayComponent } from './ui-many-skill-display.component';

describe('UiManySkillDisplayComponent', () => {
  let component: UiManySkillDisplayComponent;
  let fixture: ComponentFixture<UiManySkillDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiManySkillDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiManySkillDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
