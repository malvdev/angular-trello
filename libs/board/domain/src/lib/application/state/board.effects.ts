import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { BoardResponse } from '../../entities';
import { BoardService } from '../../infrastructure';
import * as BoardActions from './board.actions';

@Injectable()
export class BoardEffects {
  init$ = createEffect(() =>
    this._actions$.pipe(
      ofType(BoardActions.init),
      concatMap(() =>
        this._boardService.getBoards().pipe(
          map((response) =>
            BoardActions.loadBoardsSuccess({ boards: response.boards })
          ),
          catchError((error) => of(BoardActions.loadBoardsFailure(error)))
        )
      )
    )
  );

  create$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(BoardActions.createBoard),
      map((action) => action.board),
      concatMap((board) =>
        this._boardService.create(board).pipe(
          map((response) =>
            BoardActions.createBoardSuccess({ board: response.board })
          ),
          catchError((error) => of(BoardActions.createBoardFail(error)))
        )
      )
    );
  });

  delete$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(BoardActions.deleteBoard),
      map((action) => action.id),
      concatMap((board) =>
        this._boardService.delete(board).pipe(
          map((response) =>
            BoardActions.deleteBoardSuccess({ board: response.board })
          ),
          catchError((error) => of(BoardActions.deleteBoardFail(error)))
        )
      )
    );
  });

  update$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(BoardActions.updateBoard),
      map((action) => action.board),
      concatMap((board) =>
        this._boardService.update(board).pipe(
          map((response) =>
            BoardActions.updateBoardSuccess({ board: response.board })
          ),
          catchError((error) => of(BoardActions.updateBoardFail(error)))
        )
      )
    );
  });

  favorite = createEffect(() => {
    return this._actions$.pipe(
      ofType(BoardActions.favorite),
      map((action) => action.id),
      concatMap((id) =>
        this._boardService.favorite(id).pipe(
          map((response: BoardResponse) =>
            BoardActions.favoriteSuccess({ board: response.board })
          ),
          catchError((error) => of(BoardActions.favoriteFail(error)))
        )
      )
    );
  });

  unfavorite = createEffect(() => {
    return this._actions$.pipe(
      ofType(BoardActions.unfavorite),
      map((action) => action.id),
      concatMap((id) =>
        this._boardService.unfavorite(id).pipe(
          map((response: BoardResponse) =>
            BoardActions.unfavoriteSuccess({ board: response.board })
          ),
          catchError((error) => of(BoardActions.unfavoriteFail(error)))
        )
      )
    );
  });

  loadBoard$ = createEffect(() =>
    this._actions$.pipe(
      ofType(BoardActions.loadBoard),
      map((action) => action.id),
      concatMap((id) =>
        this._boardService.getBoard(id).pipe(
          map((response) =>
            BoardActions.loadBoardSuccess({ board: response.board })
          ),
          catchError((error) => of(BoardActions.loadBoardFailure(error)))
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _boardService: BoardService
  ) {}
}
