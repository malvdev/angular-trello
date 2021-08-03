import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
} from '@angular/core';

export type BadgeTypes = 'subscription' | 'tasks' | 'description';

export interface BadgeType {
  title: string;
  icon: string;
}

export interface Badge {
  type: BadgeTypes;
}

@Component({
  selector: 'app-ui-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  types: { [key: string]: BadgeType } = {
    description: {
      title: 'This card is with a description.',
      icon: 'subject',
    },
    tasks: {
      title: 'Task list items.',
      icon: 'task_alt',
    },
    subscription: {
      title: 'You are subscribed to this card.',
      icon: 'visibility',
    },
  };

  @Input()
  badge: Badge;

  get getType(): BadgeType {
    return this.types[this.badge?.type];
  }

  @HostBinding('attr.title')
  get attrTitle(): string {
    return this.getType?.title || '';
  }
}
