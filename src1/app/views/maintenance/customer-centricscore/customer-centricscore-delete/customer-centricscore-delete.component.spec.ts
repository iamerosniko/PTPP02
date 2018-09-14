import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCentricscoreDeleteComponent } from './customer-centricscore-delete.component';

describe('CustomerCentricscoreDeleteComponent', () => {
  let component: CustomerCentricscoreDeleteComponent;
  let fixture: ComponentFixture<CustomerCentricscoreDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCentricscoreDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCentricscoreDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
