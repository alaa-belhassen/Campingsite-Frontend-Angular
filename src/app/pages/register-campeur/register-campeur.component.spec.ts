import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCampeurComponent } from './register-campeur.component';

describe('RegisterCampeurComponent', () => {
  let component: RegisterCampeurComponent;
  let fixture: ComponentFixture<RegisterCampeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCampeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCampeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
