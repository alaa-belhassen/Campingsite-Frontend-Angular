import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampsiteUserComponent } from './campsite-user.component';

describe('CampsiteUserComponent', () => {
  let component: CampsiteUserComponent;
  let fixture: ComponentFixture<CampsiteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampsiteUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampsiteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
