import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteAdminComponent } from './activite-admin.component';

describe('ActiviteAdminComponent', () => {
  let component: ActiviteAdminComponent;
  let fixture: ComponentFixture<ActiviteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiviteAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiviteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
