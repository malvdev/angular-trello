import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { APP_CONFIG } from '@trello/libs/config';

import { ApiService } from '@trello/libs/shared/api';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        AuthService,
        {
          provide: APP_CONFIG,
          useValue: {
            apiUrl: '',
          },
        },
      ],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
