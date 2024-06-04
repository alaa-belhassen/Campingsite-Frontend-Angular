import { TestBed } from '@angular/core/testing';

import { SuiviReclamationService } from './suivi-reclamation.service';

describe('SuiviReclamationService', () => {
  let service: SuiviReclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviReclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
