import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPrixComponent } from './chart-prix.component';

describe('ChartPrixComponent', () => {
  let component: ChartPrixComponent;
  let fixture: ComponentFixture<ChartPrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
