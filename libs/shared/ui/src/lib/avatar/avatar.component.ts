import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export type Avatar = {
  name: string;
  url?: string;
};

@Component({
  selector: 'app-ui-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input()
  avatar: Avatar;
}
