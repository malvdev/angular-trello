import { MemberEntity } from './member.entity';

export interface CardEntity {
  id: string;
  title: string;
  description?: string;
  labels?: { [key: string]: string }[];
  badges?: { [key: string]: string }[];
  members?: MemberEntity[];
}
