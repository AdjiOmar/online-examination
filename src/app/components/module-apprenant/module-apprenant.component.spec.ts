import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleApprenantComponent } from './module-apprenant.component';

describe('ModuleApprenantComponent', () => {
  let component: ModuleApprenantComponent;
  let fixture: ComponentFixture<ModuleApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
