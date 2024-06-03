import { TestBed } from '@angular/core/testing';

import { CampeurGuardGuard } from './campeur-guard.guard';

describe('CampeurGuardGuard', () => {
  let guard: CampeurGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CampeurGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
