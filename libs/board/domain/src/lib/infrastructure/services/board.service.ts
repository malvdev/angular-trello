import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@trello/libs/shared/api';

import {
  BoardEntity,
  BoardRequest,
  BoardResponse,
  BoardsResponse,
} from '../../entities/board.entity';

@Injectable()
export class BoardService {
  constructor(private readonly _apiService: ApiService) {}

  create(board: BoardEntity): Observable<BoardResponse> {
    return this._apiService.post<BoardResponse, BoardRequest>('/board', {
      board,
    });
  }

  update(board: BoardEntity): Observable<BoardResponse> {
    return this._apiService.put<BoardResponse, BoardRequest>(
      `/board/${board.id}`,
      { board }
    );
  }

  delete(id: string): Observable<BoardResponse> {
    return this._apiService.delete<BoardResponse>(`/boards/${id}`);
  }

  getBoard(id: string): Observable<BoardResponse> {
    return this._apiService.get<BoardResponse>(`/boards/${id}`);
  }

  getBoards(): Observable<BoardsResponse> {
    return this._apiService.get<BoardsResponse>('/boards');
  }

  favorite(id: string): Observable<BoardResponse> {
    return this._apiService.post(`/boards/${id}/favorite`, { id });
  }

  unfavorite(id: string): Observable<BoardResponse> {
    return this._apiService.delete<BoardResponse>(`/boards/${id}/favorite`);
  }
}
