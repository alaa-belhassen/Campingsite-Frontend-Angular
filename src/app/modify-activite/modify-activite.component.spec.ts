import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyActiviteComponent } from './modify-activite.component';

describe('ModifyActiviteComponent', () => {
  let component: ModifyActiviteComponent;
  let fixture: ComponentFixture<ModifyActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyActiviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
