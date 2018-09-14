import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMapcodeAddeditComponent } from './customer-mapcode-addedit.component';

describe('CustomerMapcodeAddeditComponent', () => {
  let component: CustomerMapcodeAddeditComponent;
  let fixture: ComponentFixture<CustomerMapcodeAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMapcodeAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMapcodeAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
