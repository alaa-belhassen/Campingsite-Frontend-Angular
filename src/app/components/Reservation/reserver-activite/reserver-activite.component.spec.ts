import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverActiviteComponent } from './reserver-activite.component';

describe('ReserverActiviteComponent', () => {
  let component: ReserverActiviteComponent;
  let fixture: ComponentFixture<ReserverActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverActiviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserverActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
