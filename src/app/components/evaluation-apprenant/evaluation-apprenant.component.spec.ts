import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationApprenantComponent } from './evaluation-apprenant.component';

describe('EvaluationApprenantComponent', () => {
  let component: EvaluationApprenantComponent;
  let fixture: ComponentFixture<EvaluationApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
