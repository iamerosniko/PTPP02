import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMapcodeListComponent } from './customer-mapcode-list.component';

describe('CustomerMapcodeListComponent', () => {
  let component: CustomerMapcodeListComponent;
  let fixture: ComponentFixture<CustomerMapcodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMapcodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMapcodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
