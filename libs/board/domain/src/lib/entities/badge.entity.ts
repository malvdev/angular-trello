export type BadgeTypes = 'subscription' | 'tasks' | 'description';

export interface BadgeType {
  title: string;
  icon: string;
}

export interface BadgeEntity {
  type: BadgeTypes;
}
