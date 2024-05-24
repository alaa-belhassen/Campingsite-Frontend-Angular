import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActiviteComponent } from './update-activite.component';

describe('UpdateActiviteComponent', () => {
  let component: UpdateActiviteComponent;
  let fixture: ComponentFixture<UpdateActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActiviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
