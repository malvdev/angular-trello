import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@trello/libs/shared/api';

import {
  UserResponse,
  ForgotUserEntity,
  ForgotUserRequest,
  ForgotUserResponse,
  LoginUserEntity,
  LoginUserRequest,
  RegisterUserEntity,
  RegisterUserRequest,
} from '../../entities';

@Injectable()
export class AuthService {
  constructor(private readonly _apiService: ApiService) {}

  user(): Observable<UserResponse> {
    return this._apiService.get<UserResponse>('/user');
  }

  login(credentials: LoginUserEntity): Observable<UserResponse> {
    return this._apiService.post<UserResponse, LoginUserRequest>(
      '/users/login',
      { user: credentials }
    );
  }

  register(credentials: RegisterUserEntity): Observable<UserResponse> {
    return this._apiService.post<UserResponse, RegisterUserRequest>('/users', {
      user: credentials,
    });
  }

  forgotPassword(
    credentials: ForgotUserEntity
  ): Observable<ForgotUserResponse> {
    return this._apiService.post<ForgotUserResponse, ForgotUserRequest>(
      '/users/forgot',
      {
        user: credentials,
      }
    );
  }
}
