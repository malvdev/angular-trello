import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@trello/libs/shared/api';

import {
  PasswordEntity,
  PasswordResponse,
  ProfileEntity,
  ProfileResponse,
  UpdatePasswordRequest,
  UpdateProfileRequest,
} from '../../entities';

@Injectable()
export class ProfileService {
  constructor(private readonly _apiService: ApiService) {}

  getProfile(id: string): Observable<ProfileEntity> {
    return this._apiService.get('/users/' + id);
  }

  updateProfile(
    id: string,
    profile: ProfileEntity
  ): Observable<ProfileResponse> {
    return this._apiService.put<ProfileResponse, UpdateProfileRequest>(
      `/users/${id}`,
      { profile }
    );
  }

  updatePassword(
    id: string,
    password: PasswordEntity
  ): Observable<PasswordResponse> {
    return this._apiService.put<PasswordResponse, UpdatePasswordRequest>(
      `/users/updatepassword/${id}`,
      {
        ...password,
      }
    );
  }
}
