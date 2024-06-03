import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProduitComponent } from './dashboard-produit.component';

describe('DashboardProduitComponent', () => {
  let component: DashboardProduitComponent;
  let fixture: ComponentFixture<DashboardProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
