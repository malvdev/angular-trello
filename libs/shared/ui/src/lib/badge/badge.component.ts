import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
} from '@angular/core';

import { BadgeEntity, BadgeType } from '@trello/libs/board/domain';

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
  badge: BadgeEntity;

  get getType(): BadgeType {
    return this.types[this.badge?.type];
  }

  @HostBinding('attr.title')
  get attrTitle(): string {
    return this.getType?.title || '';
  }
}
