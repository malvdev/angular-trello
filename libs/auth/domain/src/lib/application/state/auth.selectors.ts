import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

export const getAuth = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const getLoggedIn = createSelector(
  getAuth,
  (auth: AuthState) => auth.loggedIn
);
export const getUser = createSelector(getAuth, (auth: AuthState) => auth.user);

export const authQuery = {
  getAuth,
  getLoggedIn,
  getUser,
};
