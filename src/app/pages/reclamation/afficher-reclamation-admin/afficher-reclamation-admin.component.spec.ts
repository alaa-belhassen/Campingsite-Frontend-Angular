import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherReclamationAdminComponent } from './afficher-reclamation-admin.component';

describe('AfficherReclamationAdminComponent', () => {
  let component: AfficherReclamationAdminComponent;
  let fixture: ComponentFixture<AfficherReclamationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherReclamationAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherReclamationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
