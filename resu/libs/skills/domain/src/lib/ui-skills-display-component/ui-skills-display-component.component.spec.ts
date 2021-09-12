import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSkillsDisplayComponentComponent } from './ui-skills-display-component.component';

describe('UiSkillsDisplayComponentComponent', () => {
  let component: UiSkillsDisplayComponentComponent;
  let fixture: ComponentFixture<UiSkillsDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSkillsDisplayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSkillsDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
