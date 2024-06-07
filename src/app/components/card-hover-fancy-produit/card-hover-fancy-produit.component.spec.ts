import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoverFancyProduitComponent } from './card-hover-fancy-produit.component';

describe('CardHoverFancyProduitComponent', () => {
  let component: CardHoverFancyProduitComponent;
  let fixture: ComponentFixture<CardHoverFancyProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHoverFancyProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHoverFancyProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
