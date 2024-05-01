import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPipesComponent } from './chart-pipes.component';

describe('ChartPipesComponent', () => {
  let component: ChartPipesComponent;
  let fixture: ComponentFixture<ChartPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
