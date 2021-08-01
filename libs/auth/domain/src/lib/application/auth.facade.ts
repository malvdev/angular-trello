import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthState, authQuery, AuthActions } from './state';

@Injectable()
export class AuthFacade {
  auth$ = this._store.select(authQuery.getAuth);
  user$ = this._store.select(authQuery.getUser);
  isLoggedIn$ = this._store.select(authQuery.getLoggedIn);
  status$ = this._store.select(authQuery.getStatus);

  constructor(private readonly _store: Store<AuthState>) {}

  login(): void {
    this._store.dispatch(AuthActions.login());
  }

  logout(): void {
    this._store.dispatch(AuthActions.logout());
  }

  register(): void {
    this._store.dispatch(AuthActions.register());
  }

  user(): void {
    this._store.dispatch(AuthActions.getUser());
  }
}
