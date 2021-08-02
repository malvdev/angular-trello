import { createReducer, on, Action } from '@ngrx/store';

import { UserEntity } from '../../entities';
import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export enum Status {
  INIT = 'INIT',
  IN_PROGRESS = 'IN_PROGRESS',
}

export interface AuthState {
  loggedIn: boolean;
  user: UserEntity;
  status: Status;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const authInitialState: AuthState = {
  loggedIn: false,
  status: Status.INIT,
  user: {
    id: '',
    username: '',
    email: '',
    accessToken: '',
    refreshToken: '',
  },
};

const reducer = createReducer(
  authInitialState,
  on(AuthActions.getUserSuccess, (state, action) => ({
    ...state,
    loggedIn: true,
    user: action.user,
  })),
  on(AuthActions.getUserFail, () => ({
    ...authInitialState,
  })),
  on(AuthActions.login, AuthActions.register, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(
    AuthActions.registerSuccess,
    AuthActions.loginSuccess,
    (state, action) => ({
      ...state,
      loggedIn: true,
      status: Status.INIT,
      user: action.user,
    })
  ),
  on(AuthActions.registerFail, AuthActions.loginFail, (state) => ({
    ...state,
    status: Status.INIT,
  })),
  on(AuthActions.forgot, (state) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(AuthActions.forgotSuccess, AuthActions.forgotFail, (state) => ({
    ...state,
    status: Status.INIT,
  })),
  on(AuthActions.logout, () => ({
    ...authInitialState,
  }))
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return reducer(state, action);
}
