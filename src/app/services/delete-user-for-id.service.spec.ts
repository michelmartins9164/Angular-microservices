import { TestBed } from '@angular/core/testing';
import {DeleteteUserForIdService} from '../services/delete-user-for-id.service'

describe('DeteUserIdService', () => {
  let service: DeleteteUserForIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteteUserForIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
