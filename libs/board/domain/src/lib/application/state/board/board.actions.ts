import { createAction, props } from '@ngrx/store';

import { BoardEntity, CardEntity } from '../../../entities';

export const init = createAction('[Board] INIT');

export const loadBoards = createAction('[Board] LOAD_BOARDS');

export const loadBoardsSuccess = createAction(
  '[Board] LOAD_BOARDS_SUCCESS',
  props<{ boards: BoardEntity[] }>()
);

export const loadBoardsFailure = createAction(
  '[Board] LOAD_BOARDS_FAILURE',
  props<{ error: Error }>()
);

export const createBoard = createAction(
  '[Board] CREATE_BOARD',
  props<{ board: BoardEntity }>()
);

export const createBoardSuccess = createAction(
  '[Board] CREATE_BOARD_SUCCESS',
  props<{ board: BoardEntity }>()
);

export const createBoardFail = createAction(
  '[Board] CREATE_BOARD_FAIL',
  props<{ error: Error }>()
);

export const deleteBoard = createAction(
  '[Board] DELETE_BOARD',
  props<{ id: string }>()
);

export const deleteBoardSuccess = createAction(
  '[Board] DELETE_BOARD_SUCCESS',
  props<{ board: BoardEntity }>()
);

export const deleteBoardFail = createAction(
  '[Board] DELETE_BOARD_FAIL',
  props<{ error: Error }>()
);

export const updateBoard = createAction(
  '[Board] UPDATE_BOARD',
  props<{ board: BoardEntity }>()
);

export const updateBoardSuccess = createAction(
  '[Board] UPDATE_BOARD_SUCCESS',
  props<{ board: BoardEntity }>()
);

export const updateBoardFail = createAction(
  '[Board] UPDATE_BOARD_FAIL',
  props<{ error: Error }>()
);

export const favorite = createAction(
  '[Board] FAVORITE',
  props<{ id: string }>()
);

export const favoriteSuccess = createAction(
  '[Board] FAVORITE_SUCCESS',
  props<{ board: BoardEntity }>()
);

export const favoriteFail = createAction(
  '[Board] FAVORITE_FAIL',
  props<{ error: Error }>()
);

export const unfavorite = createAction(
  '[Board] UNFAVORITE',
  props<{ id: string }>()
);

export const unfavoriteSuccess = createAction(
  '[Board] UNFAVORITE_SUCCESS',
  props<{ board: BoardEntity }>()
);

export const unfavoriteFail = createAction(
  '[Board] UNFAVORITE_FAIL',
  props<{ error: Error }>()
);

export const loadBoard = createAction(
  '[Board] LOAD_BOARD',
  props<{ id: string }>()
);

export const loadBoardSuccess = createAction(
  '[Board] LOAD_BOARD_SUCCESS',
  props<{ board: BoardEntity }>()
);

export const loadBoardFailure = createAction(
  '[Board] LOAD_BOARD_FAILURE',
  props<{ error: Error }>()
);

export const createCard = createAction(
  '[Board] CREATE_CARD',
  props<{ card: CardEntity }>()
);

export const createCardSuccess = createAction(
  '[Board] LOAD_BOARD_SUCCESS',
  props<{ card: BoardEntity }>()
);

export const createCardFail = createAction(
  '[Board] LOAD_BOARD_FAIL',
  props<{ card: Error }>()
);

export const createList = createAction(
  '[Board] CREATE_LIST',
  props<{ id: string; title: string }>()
);

export const createListSuccess = createAction(
  '[Board] CREATE_LIST_SUCCESS',
  props<{ board: BoardEntity }>()
);

export const createListFail = createAction(
  '[Board] CREATE_LIST_FAIL',
  props<{ card: Error }>()
);
