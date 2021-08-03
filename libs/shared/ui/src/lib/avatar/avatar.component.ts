import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { MemberEntity } from '@trello/libs/board/domain';

@Component({
  selector: 'app-ui-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input()
  avatar: MemberEntity | null;
}
