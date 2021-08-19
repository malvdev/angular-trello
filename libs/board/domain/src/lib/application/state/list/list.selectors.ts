import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LIST_FEATURE_KEY, ListState, listAdapter } from './list.reducer';

export const getListState = createFeatureSelector<ListState>(LIST_FEATURE_KEY);

const { selectAll, selectEntities } = listAdapter.getSelectors();

export const getListLoaded = createSelector(
  getListState,
  (state: ListState) => state.loaded
);

export const getListError = createSelector(
  getListState,
  (state: ListState) => state.error
);

export const getAllList = createSelector(getListState, (state: ListState) =>
  selectAll(state)
);

export const getListEntities = createSelector(getListState, (state: ListState) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getListState,
  (state: ListState) => state.selectedId
);

export const getSelected = createSelector(
  getListEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
