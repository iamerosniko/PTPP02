import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAddeditComponent } from './department-addedit.component';

describe('DepartmentAddeditComponent', () => {
  let component: DepartmentAddeditComponent;
  let fixture: ComponentFixture<DepartmentAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
