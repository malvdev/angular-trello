import { BoardEntity } from '../../../entities';
import * as BoardActions from './board.actions';
import { State, initialBoardState, boardReducer } from './board.reducer';

describe('Board Reducer', () => {
  const createBoardEntity = (id: string, title = ''): BoardEntity => ({
    id,
    title: title || `title-${id}`,
  });

  describe('valid Board actions', () => {
    it('loadBoardSuccess should return set the list of known Board', () => {
      const boards = [
        createBoardEntity('PRODUCT-AAA'),
        createBoardEntity('PRODUCT-zzz'),
      ];
      const action = BoardActions.loadBoardsSuccess({ boards });

      const result: State = boardReducer(initialBoardState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = boardReducer(initialBoardState, action);

      expect(result).toBe(initialBoardState);
    });
  });
});
