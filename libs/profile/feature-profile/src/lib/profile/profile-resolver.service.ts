import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProfileActions, ProfileEntity } from '@trello/libs/profile/domain';

@Injectable()
export class ProfileResolverService implements Resolve<ProfileEntity> {
  constructor(private readonly _store: Store) {}

  resolve(): Observable<any> | Promise<any> | any {
    this._store.dispatch(ProfileActions.getProfile());
  }
}
