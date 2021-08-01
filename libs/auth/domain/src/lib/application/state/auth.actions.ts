import { createAction, props } from '@ngrx/store';

import { UserEntity } from '@trello/libs/shared/api';

export const getUser = createAction('[auth] GET_USER');

export const getUserSuccess = createAction(
  '[auth] GET_USER_SUCCESS',
  props<{ user: UserEntity }>()
);

export const getUserFail = createAction(
  '[auth] GET_USER_FAIL',
  props<{ error: Error }>()
);

export const login = createAction('[auth] LOGIN');

export const loginSuccess = createAction(
  '[auth] LOGIN_SUCCESS',
  props<{ user: UserEntity }>()
);

export const loginFail = createAction(
  '[auth] LOGIN_FAIL',
  props<{ error: Error }>()
);

export const register = createAction('[auth] REGISTER');

export const registerSuccess = createAction(
  '[auth] REGISTER_SUCCESS',
  props<{ user: UserEntity }>()
);

export const registerFail = createAction(
  '[auth] REGISTER_FAIL',
  props<{ error: Error }>()
);

export const logout = createAction('[auth] LOGOUT');
