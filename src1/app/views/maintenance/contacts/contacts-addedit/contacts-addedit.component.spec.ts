import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsAddeditComponent } from './contacts-addedit.component';

describe('ContactsAddeditComponent', () => {
  let component: ContactsAddeditComponent;
  let fixture: ComponentFixture<ContactsAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
