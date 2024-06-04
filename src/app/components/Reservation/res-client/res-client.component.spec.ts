import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResClientComponent } from './res-client.component';

describe('ResClientComponent', () => {
  let component: ResClientComponent;
  let fixture: ComponentFixture<ResClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
