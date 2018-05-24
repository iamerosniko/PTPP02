import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcategoryListComponent } from './projectcategory-list.component';

describe('ProjectcategoryListComponent', () => {
  let component: ProjectcategoryListComponent;
  let fixture: ComponentFixture<ProjectcategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectcategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
