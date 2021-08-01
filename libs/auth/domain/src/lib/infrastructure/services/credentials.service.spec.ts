import { TestBed } from '@angular/core/testing';

import { StoragesModule } from '../storages';
import { CredentialsService } from './credentials.service';

describe('CredentialsService', () => {
  let service: CredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoragesModule],
      providers: [CredentialsService],
    });
    service = TestBed.inject(CredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
