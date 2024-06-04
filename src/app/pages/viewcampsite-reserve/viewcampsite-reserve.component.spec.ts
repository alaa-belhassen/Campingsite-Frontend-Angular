import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcampsiteReserveComponent } from './viewcampsite-reserve.component';

describe('ViewcampsiteReserveComponent', () => {
  let component: ViewcampsiteReserveComponent;
  let fixture: ComponentFixture<ViewcampsiteReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcampsiteReserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcampsiteReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
