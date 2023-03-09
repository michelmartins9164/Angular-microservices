import { TestBed } from '@angular/core/testing';

import { GetAllPatientService } from './get-all-patient.service';

describe('GetAllPatientService', () => {
  let service: GetAllPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
