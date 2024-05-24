import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResComponent } from './update-res.component';

describe('UpdateResComponent', () => {
  let component: UpdateResComponent;
  let fixture: ComponentFixture<UpdateResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
