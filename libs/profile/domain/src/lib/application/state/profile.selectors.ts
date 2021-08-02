import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PROFILE_FEATURE_KEY, State } from './profile.reducer';

export const getProfileState =
  createFeatureSelector<State>(PROFILE_FEATURE_KEY);

export const getProfileLoaded = createSelector(
  getProfileState,
  (state: State) => state.loaded
);

export const getProfileError = createSelector(
  getProfileState,
  (state: State) => state.error
);

export const getProfile = createSelector(
  getProfileState,
  (state: State) => state.profile
);
