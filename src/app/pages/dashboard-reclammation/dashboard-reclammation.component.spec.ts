import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReclammationComponent } from './dashboard-reclammation.component';

describe('DashboardReclammationComponent', () => {
  let component: DashboardReclammationComponent;
  let fixture: ComponentFixture<DashboardReclammationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReclammationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardReclammationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
