import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcategoryDeleteComponent } from './projectcategory-delete.component';

describe('ProjectcategoryDeleteComponent', () => {
  let component: ProjectcategoryDeleteComponent;
  let fixture: ComponentFixture<ProjectcategoryDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectcategoryDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcategoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
