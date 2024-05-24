import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCentreCampingComponent } from './register-centre-camping.component';

describe('RegisterCentreCampingComponent', () => {
  let component: RegisterCentreCampingComponent;
  let fixture: ComponentFixture<RegisterCentreCampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCentreCampingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCentreCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
