import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementDoneComponent } from './payement-done.component';

describe('PayementDoneComponent', () => {
  let component: PayementDoneComponent;
  let fixture: ComponentFixture<PayementDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayementDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
