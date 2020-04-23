import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutQuestionComponent } from './ajout-question.component';

describe('AjoutQuestionComponent', () => {
  let component: AjoutQuestionComponent;
  let fixture: ComponentFixture<AjoutQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
