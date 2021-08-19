import { CardEntity } from './card.entity';

export interface ListEntity {
  id: string;
  name: string;
  cards: CardEntity[];
}

export interface ListResponse {
  list: ListEntity;
}

export interface ListsResponse {
  lists: ListEntity[];
}
