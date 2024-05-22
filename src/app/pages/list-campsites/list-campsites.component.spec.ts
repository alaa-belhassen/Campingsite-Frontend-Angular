import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCampsitesComponent } from './list-campsites.component';

describe('ListCampsitesComponent', () => {
  let component: ListCampsitesComponent;
  let fixture: ComponentFixture<ListCampsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCampsitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCampsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
