import { TestBed } from '@angular/core/testing';

import { CentreCmpingGuard } from './centre-cmping.guard';

describe('CentreCmpingGuard', () => {
  let guard: CentreCmpingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CentreCmpingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
