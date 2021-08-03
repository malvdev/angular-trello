import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { BoardEntity } from '../../entities/board.entity';
import * as BoardActions from './board.actions';

export const BOARD_FEATURE_KEY = 'board';

export interface State extends EntityState<BoardEntity> {
  selectedId?: string;
  loaded: boolean;
  error?: string | null | Error;
}

export interface BoardPartialState {
  readonly [BOARD_FEATURE_KEY]: State;
}

export const boardAdapter: EntityAdapter<BoardEntity> =
  createEntityAdapter<BoardEntity>();

export const initialState: State = boardAdapter.getInitialState({
  loaded: false,
});

const reducer = createReducer(
  initialState,
  on(BoardActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(BoardActions.loadBoardsSuccess, (state, { boards }) =>
    boardAdapter.setAll(boards, {
      ...state,
      loaded: true,
      error: null,
    })
  ),
  on(BoardActions.loadBoardsFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(BoardActions.createBoardSuccess, (state, { board }) =>
    boardAdapter.addOne(board, {
      ...state,
      error: null,
    })
  ),
  on(BoardActions.createBoardFail, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    BoardActions.favoriteSuccess,
    BoardActions.unfavoriteSuccess,
    (state, { board }) =>
      boardAdapter.updateOne(
        { id: board.id, changes: board },
        {
          ...state,
          error: null,
        }
      )
  ),
  on(BoardActions.deleteBoardSuccess, (state, { board }) =>
    boardAdapter.removeOne(board.id, {
      ...state,
    })
  ),
  on(BoardActions.deleteBoardFail, (state, { error }) => ({
    ...state,
    error,
  })),
  on(BoardActions.updateBoardSuccess, (state, { board }) =>
    boardAdapter.updateOne(
      { id: board.id, changes: board },
      {
        ...state,
        error: null,
      }
    )
  ),
  on(BoardActions.updateBoardFail, (state, { error }) => ({
    ...state,
    error,
  })),
  on(BoardActions.loadBoardSuccess, (state) => ({
    ...state,
  })),
  on(BoardActions.loadBoardFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function boardReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
