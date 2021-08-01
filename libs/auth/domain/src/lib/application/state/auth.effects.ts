import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

import { DynamicFormFacade, setErrors } from '@trello/libs/shared/dynamic-form';

import { AuthService, CredentialsService } from '../../infrastructure';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  getUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.getUser),
      switchMap(() =>
        this._authService.user().pipe(
          map((data) => AuthActions.getUserSuccess({ user: data.user })),
          catchError((error) => of(AuthActions.getUserFail(error)))
        )
      )
    )
  );

  login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.login),
      withLatestFrom(this._dynamicFormFacade.data$),
      exhaustMap(([action, data]) =>
        this._authService.login(data).pipe(
          map((response) => AuthActions.loginSuccess({ user: response.user })),
          catchError((result) =>
            of(
              setErrors({
                errors: result.error.errors,
              }),
              AuthActions.loginFail(result.error.errors)
            )
          )
        )
      )
    )
  );

  loginOrRegisterSuccess$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.loginSuccess, AuthActions.registerSuccess),
        tap((action) => {
          this._credentialsService.setItem(action.user);
          this._router.navigate(['/boards']);
        })
      ),
    { dispatch: false }
  );

  register$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.register),
      withLatestFrom(this._dynamicFormFacade.data$),
      exhaustMap(([action, data]) =>
        this._authService.register(data).pipe(
          map((response) =>
            AuthActions.registerSuccess({ user: response.user })
          ),
          catchError((result) =>
            of(
              setErrors({ errors: result.error.errors }),
              AuthActions.registerFail(result.error.errors)
            )
          )
        )
      )
    )
  );

  forgot$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.forgot),
      withLatestFrom(this._dynamicFormFacade.data$),
      exhaustMap(([action, data]) =>
        this._authService.forgotPassword(data).pipe(
          map((response) =>
            AuthActions.forgotSuccess({ status: response.status })
          ),
          catchError((result) =>
            of(
              setErrors({ errors: result.error.errors }),
              AuthActions.forgotFail(result.error.errors)
            )
          )
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this._credentialsService.removeItem();
          this._router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _dynamicFormFacade: DynamicFormFacade,
    private readonly _authService: AuthService,
    private readonly _credentialsService: CredentialsService,
    private readonly _router: Router
  ) {}
}
