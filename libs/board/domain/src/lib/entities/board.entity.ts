import { ListEntity } from './list.entity';
import { MemberEntity } from './member.entity';

export type BoardVisibility = 'public' | 'private';

export interface BoardEntity {
  id: string;
  title: string;
  team?: string;
  isFavorite?: boolean;
  background?: string;
  visibility?: BoardVisibility;
  author?: {
    id: string;
  };
  members?: MemberEntity[];
  lists?: ListEntity[];
}

export interface BoardsResponse {
  boards: BoardEntity[];
}

export interface BoardResponse {
  board: BoardEntity;
}

export interface BoardRequest {
  board: BoardEntity;
}
