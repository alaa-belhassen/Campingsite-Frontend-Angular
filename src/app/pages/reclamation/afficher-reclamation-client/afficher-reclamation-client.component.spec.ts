import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherReclamationClientComponent } from './afficher-reclamation-client.component';

describe('AfficherReclamationClientComponent', () => {
  let component: AfficherReclamationClientComponent;
  let fixture: ComponentFixture<AfficherReclamationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherReclamationClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherReclamationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
