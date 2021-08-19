import { BadgeEntity } from './badge.entity';
import { LabelEntity } from './label.entity';
import { MemberEntity } from './member.entity';

export interface CardEntity {
  id: string;
  title: string;
  description?: string;
  labels?: LabelEntity[];
  badges?: BadgeEntity[];
  members?: MemberEntity[];
}
