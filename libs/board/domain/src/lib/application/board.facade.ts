import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { BoardEntity } from '../entities/board.entity';
import { BoardActions, BoardSelectors } from './state';

@Injectable()
export class BoardFacade {
  favoriteBoards$ = this._store.pipe(select(BoardSelectors.getFavoriteBoards));
  loaded$ = this._store.pipe(select(BoardSelectors.getBoardLoaded));
  allBoard$ = this._store.pipe(select(BoardSelectors.getAllBoard));

  constructor(private readonly _store: Store) {}

  init(): void {
    this._store.dispatch(BoardActions.init());
  }

  loadBoard(id: string): void {
    this._store.dispatch(BoardActions.loadBoard({ id }));
  }

  create(board: BoardEntity): void {
    this._store.dispatch(BoardActions.createBoard({ board }));
  }

  delete(id: string): void {
    this._store.dispatch(BoardActions.deleteBoard({ id }));
  }

  update(board: BoardEntity): void {
    this._store.dispatch(BoardActions.updateBoard({ board }));
  }

  favorite(id: string): void {
    this._store.dispatch(BoardActions.favorite({ id }));
  }

  unfavorite(id: string): void {
    this._store.dispatch(BoardActions.unfavorite({ id }));
  }
}
