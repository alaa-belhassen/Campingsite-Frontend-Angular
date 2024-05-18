import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDetailsCampsiteComponent } from './all-details-campsite.component';

describe('AllDetailsCampsiteComponent', () => {
  let component: AllDetailsCampsiteComponent;
  let fixture: ComponentFixture<AllDetailsCampsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDetailsCampsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDetailsCampsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
