import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenReclamationComponent } from './open-reclamation.component';

describe('OpenReclamationComponent', () => {
  let component: OpenReclamationComponent;
  let fixture: ComponentFixture<OpenReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenReclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
