import { MemberEntity } from './member.entity';

export interface CardEntity {
  id: string;
  title: string;
  description?: string;
  labels?: string[];
  badges?: string[];
  members?: MemberEntity[];
}
