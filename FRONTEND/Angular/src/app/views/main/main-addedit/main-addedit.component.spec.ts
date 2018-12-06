import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddeditComponent } from './main-addedit.component';

describe('MainAddeditComponent', () => {
  let component: MainAddeditComponent;
  let fixture: ComponentFixture<MainAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
