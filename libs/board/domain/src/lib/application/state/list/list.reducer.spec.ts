import { Action } from '@ngrx/store';

import { ListEntity } from '../../../entities';
import * as ListActions from './list.actions';
import { ListState, initialListState, listReducer } from './list.reducer';

describe('List Reducer', () => {
  const createListEntity = (id: string, name = ''): ListEntity => ({
    id,
    name: name || `name-${id}`,
    cards: [],
  });

  describe('valid List actions', () => {
    it('loadListSuccess should return the list of known List', () => {
      const lists = [
        createListEntity('PRODUCT-AAA'),
        createListEntity('PRODUCT-zzz'),
      ];
      const action = ListActions.loadListsSuccess({ lists });

      const result: ListState = listReducer(initialListState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = listReducer(initialListState, action);

      expect(result).toBe(initialListState);
    });
  });
});
