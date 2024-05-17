import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteCardsComponent } from './activite-cards.component';

describe('ActiviteCardsComponent', () => {
  let component: ActiviteCardsComponent;
  let fixture: ComponentFixture<ActiviteCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiviteCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiviteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
