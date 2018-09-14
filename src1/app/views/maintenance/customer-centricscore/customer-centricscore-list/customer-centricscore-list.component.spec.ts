import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCentricscoreListComponent } from './customer-centricscore-list.component';

describe('CustomerCentricscoreListComponent', () => {
  let component: CustomerCentricscoreListComponent;
  let fixture: ComponentFixture<CustomerCentricscoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCentricscoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCentricscoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
