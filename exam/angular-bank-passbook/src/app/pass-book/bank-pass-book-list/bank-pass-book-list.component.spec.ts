import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPassBookListComponent } from './bank-pass-book-list.component';

describe('BankPassBookListComponent', () => {
  let component: BankPassBookListComponent;
  let fixture: ComponentFixture<BankPassBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPassBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPassBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
