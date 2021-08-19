import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as ListActions from './list.actions';
import * as ListSelectors from './list.selectors';

@Injectable()
export class ListFacade {
  allLists$ = this._store.pipe(select(ListSelectors.getAllList));

  constructor(private readonly _store: Store) {}

  init(id: string): void {
    this._store.dispatch(ListActions.loadLists({ id }));
  }

  createList(id: string, title: string): void {
    this._store.dispatch(ListActions.createList({ id, title }));
  }
}
