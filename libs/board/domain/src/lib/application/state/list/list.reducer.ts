import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { ListEntity } from '../../../entities';
import * as ListActions from './list.actions';

export const LIST_FEATURE_KEY = 'list';

export interface ListState extends EntityState<ListEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null | Error;
}

export interface ListPartialState {
  readonly [LIST_FEATURE_KEY]: ListState;
}

export const listAdapter: EntityAdapter<ListEntity> =
  createEntityAdapter<ListEntity>();

export const initialListState: ListState = listAdapter.getInitialState({
  loaded: false,
});

const reducer = createReducer(
  initialListState,
  on(ListActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(ListActions.loadListsSuccess, (state, { lists }) =>
    listAdapter.setAll(lists, { ...state, loaded: true })
  ),
  on(ListActions.loadListsFailure, (state, { error }) => ({ ...state, error })),
  on(ListActions.createListSuccess, (state, { list }) =>
    listAdapter.addOne(list, {
      ...state,
      selectedId: list.id,
      error: null,
    })
  )
);

export function listReducer(state: ListState | undefined, action: Action) {
  return reducer(state, action);
}
