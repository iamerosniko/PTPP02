import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcategoryAddeditComponent } from './projectcategory-addedit.component';

describe('ProjectcategoryAddeditComponent', () => {
  let component: ProjectcategoryAddeditComponent;
  let fixture: ComponentFixture<ProjectcategoryAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectcategoryAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcategoryAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
