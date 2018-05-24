import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMapcodeDeleteComponent } from './customer-mapcode-delete.component';

describe('CustomerMapcodeDeleteComponent', () => {
  let component: CustomerMapcodeDeleteComponent;
  let fixture: ComponentFixture<CustomerMapcodeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMapcodeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMapcodeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
