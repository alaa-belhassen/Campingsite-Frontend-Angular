import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampsiteAdminComponent } from './campsite-admin.component';

describe('CampsiteAdminComponent', () => {
  let component: CampsiteAdminComponent;
  let fixture: ComponentFixture<CampsiteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampsiteAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampsiteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
