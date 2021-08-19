import { createAction, props } from '@ngrx/store';

import { CardEntity, ListEntity } from '../../../entities';

export const init = createAction('[List] INIT');

export const loadLists = createAction(
  '[List] LOAD_LISTS',
  props<{ id: string }>()
);

export const loadListsSuccess = createAction(
  '[List] LOAD_LISTS_SUCCESS',
  props<{ lists: ListEntity[] }>()
);

export const loadListsFailure = createAction(
  '[List] LOAD_LISTS_FAILURE',
  props<{ error: Error }>()
);

export const createList = createAction(
  '[List] CREATE_LIST',
  props<{ id: string; title: string }>()
);

export const createListSuccess = createAction(
  '[List] CREATE_LIST_SUCCESS',
  props<{ list: ListEntity }>()
);

export const createListFail = createAction(
  '[List] CREATE_LIST_FAIL',
  props<{ card: Error }>()
);

export const createCard = createAction(
  '[List] CREATE_CARD',
  props<{ card: CardEntity }>()
);

export const createCardSuccess = createAction(
  '[List] CREATE_CARD_SUCCESS',
  props<{ card: CardEntity }>()
);

export const createCardFail = createAction(
  '[List] CREATE_CARD_FAIL',
  props<{ card: Error }>()
);
