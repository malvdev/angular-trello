import { CardEntity } from './card.entity';

export interface ListEntity {
  id: string;
  name: string;
  cards: CardEntity[];
}
