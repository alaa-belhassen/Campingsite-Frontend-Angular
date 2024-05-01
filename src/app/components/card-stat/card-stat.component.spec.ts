import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatComponent } from './card-stat.component';

describe('CardStatComponent', () => {
  let component: CardStatComponent;
  let fixture: ComponentFixture<CardStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
