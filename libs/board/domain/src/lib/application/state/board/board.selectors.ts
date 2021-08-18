import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BOARD_FEATURE_KEY, State, boardAdapter } from './board.reducer';

export const getBoardState = createFeatureSelector<State>(BOARD_FEATURE_KEY);

const { selectAll, selectEntities } = boardAdapter.getSelectors();

export const getBoardLoaded = createSelector(
  getBoardState,
  (state: State) => state.loaded
);

export const getBoardError = createSelector(
  getBoardState,
  (state: State) => state.error
);

export const getSelectedId = createSelector(
  getBoardState,
  (state: State) => state.selectedId
);

export const getAllBoard = createSelector(getBoardState, (state: State) =>
  selectAll(state)
);

export const getBoard = createSelector(
  getAllBoard,
  getSelectedId,
  (boards, id) => boards.find((board) => board.id === id)
);

export const getBoardEntities = createSelector(getBoardState, (state: State) =>
  selectEntities(state)
);

export const getFavoriteBoards = createSelector(getAllBoard, (boards) =>
  boards.filter((board) => board?.isFavorite)
);
