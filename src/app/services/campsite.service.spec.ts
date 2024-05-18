import { TestBed } from '@angular/core/testing';

import { CampsiteService } from './campsite.service';

describe('CampsiteService', () => {
  let service: CampsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
