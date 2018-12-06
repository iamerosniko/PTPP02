import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCentricscoreAddeditComponent } from './customer-centricscore-addedit.component';

describe('CustomerCentricscoreAddeditComponent', () => {
  let component: CustomerCentricscoreAddeditComponent;
  let fixture: ComponentFixture<CustomerCentricscoreAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCentricscoreAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCentricscoreAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
