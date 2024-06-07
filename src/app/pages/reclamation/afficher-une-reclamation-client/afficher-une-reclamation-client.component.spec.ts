import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherUneReclamationClientComponent } from './afficher-une-reclamation-client.component';

describe('AfficherUneReclamationClientComponent', () => {
  let component: AfficherUneReclamationClientComponent;
  let fixture: ComponentFixture<AfficherUneReclamationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherUneReclamationClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherUneReclamationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
