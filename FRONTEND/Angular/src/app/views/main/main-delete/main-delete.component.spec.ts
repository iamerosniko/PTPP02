import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeleteComponent } from './main-delete.component';

describe('MainDeleteComponent', () => {
  let component: MainDeleteComponent;
  let fixture: ComponentFixture<MainDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
