import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoploaderComponent } from './shoploader.component';

describe('ShoploaderComponent', () => {
  let component: ShoploaderComponent;
  let fixture: ComponentFixture<ShoploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
