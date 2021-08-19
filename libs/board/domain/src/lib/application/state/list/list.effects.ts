import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { ListService } from '../../../infrastructure/services/list.service';
import * as ListActions from './list.actions';

@Injectable()
export class ListEffects {
  getLists$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ListActions.loadLists),
      concatMap(({ id }) =>
        this._listService.getLists(id).pipe(
          map((response) =>
            ListActions.loadListsSuccess({ lists: response.lists })
          ),
          catchError((error) => of(ListActions.loadListsFailure(error)))
        )
      )
    )
  );

  createList$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(ListActions.createList),
      map((action) => action),
      concatMap(({ id, title }) =>
        this._listService.createList(id, title).pipe(
          map((response) =>
            ListActions.createListSuccess({ list: response.list })
          ),
          catchError((error) => of(ListActions.createListFail(error)))
        )
      )
    );
  });

  constructor(
    private readonly _actions$: Actions,
    private readonly _listService: ListService
  ) {}
}
