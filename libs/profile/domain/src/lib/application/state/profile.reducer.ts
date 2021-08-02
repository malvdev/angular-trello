import { createReducer, on, Action } from '@ngrx/store';

import * as ProfileAction from './profile.actions';
import { ProfileEntity } from '../../entities';

export const PROFILE_FEATURE_KEY = 'profile';

export interface State {
  loaded: boolean;
  error?: Error;
  profile: ProfileEntity;
}

export interface ProfilePartialState {
  readonly [PROFILE_FEATURE_KEY]: State;
}

export const initialState: State = {
  loaded: false,
  profile: {
    email: '',
    username: '',
  },
};

const reducer = createReducer(
  initialState,
  on(ProfileAction.getProfileSuccess, (state, action) => ({
    ...state,
    profile: { ...action.profile },
    loaded: true,
  })),
  on(ProfileAction.getProfileFail, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ProfileAction.updateProfileSuccess, (state, action) => ({
    ...state,
    profile: { ...action.profile },
    loaded: true,
  })),
  on(ProfileAction.updateProfileFail, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ProfileAction.updatePasswordSuccess, (state, { status }) => ({
    ...state,
    status,
    loaded: true,
  })),
  on(ProfileAction.updatePasswordFail, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function profileReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
