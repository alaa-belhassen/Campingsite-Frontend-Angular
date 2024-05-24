import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProduitComponent } from './admin-produit.component';

describe('AdminProduitComponent', () => {
  let component: AdminProduitComponent;
  let fixture: ComponentFixture<AdminProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
