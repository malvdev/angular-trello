import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import * as DynamicFormActions from './dynamic-form.actions';

@Injectable()
export class DynamicFormEffects {
  setData$ = createEffect(() =>
    this._actions$.pipe(
      ofType(DynamicFormActions.setData, DynamicFormActions.updateData),
      map(() => DynamicFormActions.initializeErrors())
    )
  );

  constructor(private readonly _actions$: Actions) {}
}
