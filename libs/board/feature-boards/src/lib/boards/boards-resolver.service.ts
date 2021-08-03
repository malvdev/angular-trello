import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { BoardEntity, BoardFacade } from '@trello/libs/board/domain';

@Injectable()
export class BoardsResolverService implements Resolve<BoardEntity> {
  constructor(private readonly _boardFacade: BoardFacade) {}

  resolve(): Observable<any> | Promise<any> | any {
    this._boardFacade.init();
  }
}
