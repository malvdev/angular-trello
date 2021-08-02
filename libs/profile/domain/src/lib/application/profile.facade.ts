import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { PasswordEntity, ProfileEntity } from '../entities';
import { ProfileActions, ProfileSelectors } from './state';

@Injectable()
export class ProfileFacade {
  profile$ = this._store.pipe(select(ProfileSelectors.getProfile));

  constructor(private readonly _store: Store) {}

  getProfile(): void {
    this._store.dispatch(ProfileActions.getProfile());
  }

  updateProfile(profile: ProfileEntity): void {
    this._store.dispatch(ProfileActions.updateProfile({ profile }));
  }

  updatePassword(password: PasswordEntity): void {
    this._store.dispatch(ProfileActions.updatePassword({ password }));
  }
}
