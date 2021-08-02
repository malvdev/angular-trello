import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  withLatestFrom,
} from 'rxjs/operators';

import { AuthFacade } from '@trello/libs/auth/domain';

import * as ProfileActions from './profile.actions';
import { ProfileService } from '../../infrastructure';

@Injectable()
export class ProfileEffects {
  getProfile$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(ProfileActions.getProfile),
      withLatestFrom(this._authFacade.user$),
      exhaustMap(([action, data]) =>
        this._profileService.getProfile(data.id).pipe(
          map((response) =>
            ProfileActions.getProfileSuccess({ profile: response })
          ),
          catchError((error) => of(ProfileActions.getProfileFail(error)))
        )
      )
    );
  });

  updateProfile$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(ProfileActions.updateProfile),
      withLatestFrom(this._authFacade.user$),
      exhaustMap(([action, data]) =>
        this._profileService.updateProfile(data.id, action.profile).pipe(
          map((response) =>
            ProfileActions.updateProfileSuccess({ profile: response.profile })
          ),
          catchError((error) => of(ProfileActions.updateProfileFail(error)))
        )
      )
    );
  });

  updatePassword$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(ProfileActions.updatePassword),
      withLatestFrom(this._authFacade.user$),
      exhaustMap(([action, data]) =>
        this._profileService.updatePassword(data.id, action.password).pipe(
          map((response) =>
            ProfileActions.updatePasswordSuccess({
              status: response.status,
            })
          ),
          catchError((error) => of(ProfileActions.updatePasswordFail(error)))
        )
      )
    );
  });

  constructor(
    private readonly _actions$: Actions,
    private readonly _authFacade: AuthFacade,
    private readonly _profileService: ProfileService
  ) {}
}
