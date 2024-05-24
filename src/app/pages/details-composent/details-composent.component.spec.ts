import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComposentComponent } from './details-composent.component';

describe('DetailsComposentComponent', () => {
  let component: DetailsComposentComponent;
  let fixture: ComponentFixture<DetailsComposentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComposentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComposentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
