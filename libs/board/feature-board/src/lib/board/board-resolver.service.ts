import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { BoardEntity, BoardFacade } from '@trello/libs/board/domain';

@Injectable()
export class BoardResolverService implements Resolve<BoardEntity> {
  constructor(private readonly _boardFacade: BoardFacade) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    const id = route.params['id'];
    this._boardFacade.loadBoard(id);
  }
}
