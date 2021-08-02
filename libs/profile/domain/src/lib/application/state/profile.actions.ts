import { createAction, props } from '@ngrx/store';

import { ProfileEntity } from '../../entities';

export const getProfile = createAction('[Profile] GET_PROFILE');

export const getProfileSuccess = createAction(
  '[Profile] GET_PROFILE_SUCCESS',
  props<{ profile: ProfileEntity }>()
);

export const getProfileFail = createAction(
  '[Profile] GET_PROFILE_FAIL',
  props<{ error: Error }>()
);

export const updateProfile = createAction(
  '[Profile] UPDATE_PROFILE',
  props<{ profile: ProfileEntity }>()
);

export const updateProfileSuccess = createAction(
  '[Profile] UPDATE_PROFILE_SUCCESS',
  props<{ profile: ProfileEntity }>()
);

export const updateProfileFail = createAction(
  '[Profile] UPDATE_PROFILE_FAIL',
  props<{ error: Error }>()
);

export const updatePassword = createAction(
  '[Profile] UPDATE_PASSWORD',
  props<{ password: { password: string; passwordNew: string } }>()
);

export const updatePasswordSuccess = createAction(
  '[Profile] UPDATE_PASSWORD_SUCCESS',
  props<{ status: boolean }>()
);

export const updatePasswordFail = createAction(
  '[Profile] UPDATE_PASSWORD_FAIL',
  props<{ error: Error }>()
);
