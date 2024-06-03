import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningWheelComponent } from './spinning-wheel.component';

describe('SpinningWheelComponent', () => {
  let component: SpinningWheelComponent;
  let fixture: ComponentFixture<SpinningWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinningWheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinningWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
