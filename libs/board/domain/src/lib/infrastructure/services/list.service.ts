import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from '@trello/libs/shared/api';

import { ListEntity, ListResponse, ListsResponse } from '../../entities';

@Injectable()
export class ListService {
  constructor(private readonly _apiService: ApiService) {}

  getLists(id: string): Observable<ListsResponse> {
    return of({ lists: [] });
  }

  createList(id: string, name: string): Observable<ListResponse> {
    return this._apiService.post<ListResponse, any>('/board/list', {
      id,
      name,
    });
  }

  createCard(list: ListEntity): Observable<ListResponse> {
    return this._apiService.post<ListResponse, any>('/board/card', {
      list,
    });
  }
}
